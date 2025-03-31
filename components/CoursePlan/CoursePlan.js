
import styles from './CoursePlan.module.css'
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import { useState } from 'react';
import useCourseData from '../../custom hooks/useCourseData';
import CoursePlanHeader from './CoursePlanHeader';
import CheckOutModal from '../Modals/CheckOutModal';

const CoursePlan = () =>{
    const {getHour, getMinutes, convertDate} = useTimesAndDates();
    const {courses} = useCourseData();
    const [hoveredGroup, setHoveredGroup] = useState(null);
    const [currentWeekStart, setCurrentWeekStart] = useState(getStartOfWeek(new Date()));
    const [weeksForward, setWeeksForward] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState('ALL');
    const [selectedLevel, setSelectedLevel] = useState(null);
 


    function getStartOfWeek(date) {
      const startOfWeek = new Date(date);
      // Berechne den Unterschied zum Montag
      const day = startOfWeek.getDay();
      const diff = (day === 0 ? -6 : 1 - day); // Wenn Sonntag (0), gehe zurück zu -6 Tagen
  
      startOfWeek.setDate(startOfWeek.getDate() + diff);
  
      return startOfWeek;
  }

  /* ----- FILTER START ----  */

    const goBackOneWeek = () => {
      if(weeksForward < 0){
        return
      }
      // Nur eine Woche zurückgehen
      setCurrentWeekStart(prev => {
          const newDate = new Date(prev);
          newDate.setDate(newDate.getDate() - 7);

          console.log(newDate)
          return newDate;
      });
      setWeeksForward(prev => prev - 1); // Setze die Anzahl der Wochen vorwärts zurück
    };

    const goForwardOneWeek = () => {
      if (weeksForward < 8) { // Maximal 8 Wochen vorwärts
          setCurrentWeekStart(prev => {
              const newDate = new Date(prev);
              newDate.setDate(newDate.getDate() + 7);
              return newDate;
          });
        setWeeksForward(prev => prev + 1); // Erhöhe die Anzahl der Wochen vorwärts
      }
    };

    const handleFilterChange = (group) => {
        setSelectedGroup(group);
        setHoveredGroup(group)
        setSelectedLevel(null);
    }

      const filteredCourses = () => {
        let coursesToFilter;

        if (selectedGroup === 'ALL') {
            coursesToFilter = Object.values(courses).flat();
        } else {
            coursesToFilter = Object.values(courses[selectedGroup]) || [];
        }

        // Filtere nach dem ausgewählten Level
        if (selectedLevel) {
            coursesToFilter = coursesToFilter.filter(course => course.level === selectedLevel);
        }

        // Bestimme das Ende der aktuellen Woche
        const endOfWeek = new Date(currentWeekStart);
        endOfWeek.setDate(endOfWeek.getDate() + 7); // Sonntag

        // Filtere nach der aktuellen Woche
        const filteredByWeek = coursesToFilter.filter(course => {
            const scheduledDate = new Date(course.scheduled_at);
            return scheduledDate >= currentWeekStart && scheduledDate <= endOfWeek;
        });

        return filteredByWeek;
    };
      
    const handleLevelChange = (level) => {
      setSelectedLevel(level);
    };

      /* ----- FILTER ENDE ----  */


      const [isCheckedOutModalOpen, setIsCheckedOutModalOpen] = useState(false)
      const [checkoutData, setCheckoutData] = useState(null)



      const openCheckoutModal = (course) =>{

        setIsCheckedOutModalOpen(true)

        setCheckoutData(course);

        console.log(course)

      }

       
    const closeModal = () => {
      setIsCheckedOutModalOpen(false);
    };


    return (
        <div className={styles.tableContainer}>

          {isCheckedOutModalOpen && <CheckOutModal onClose={closeModal} checkoutData={checkoutData}/>}
         
         <CoursePlanHeader 
          currentWeekStart={currentWeekStart}
          setCurrentWeekStart={setCurrentWeekStart}
          goBackOneWeek={goBackOneWeek}
          goForwardOneWeek={goForwardOneWeek}
          selectedGroup={selectedGroup}
          handleFilterChange={handleFilterChange}
          hoveredGroup={hoveredGroup}
          setHoveredGroup={setHoveredGroup}
          handleLevelChange={handleLevelChange}
        />


        
          <table className={styles.courseTable}>
            <thead>
              <tr>
                <th className={styles.dayHeader}>Montag</th>
                <th className={styles.dayHeader}>Dienstag</th>
                <th className={styles.dayHeader}>Mittwoch</th>
                <th className={styles.dayHeader}>Donnerstag</th>
                <th className={styles.dayHeader}>Freitag</th>
                <th className={styles.dayHeader}>Samstag</th>
                <th className={styles.dayHeader}>Sonntag</th>
              </tr>
            </thead>
            <tbody>
              {/* Hier werden die Zeilen für jede Uhrzeit generiert */}
              {[...Array(13)].map((_, index) => {
                const hour = (index + 10).toString().padStart(2, '0') + ':00';
  

                 // Generiere die Kurse für den aktuellen Tag und die aktuelle Stunde
                    const dayCourses = [...Array(7)].map((_, dayIndex) => {
                      const day = new Date(2025, 2, dayIndex + 17);
                      return filteredCourses().filter(course => {
                          const courseDate = new Date(course.scheduled_at);
                          return courseDate.getDay() === day.getDay() && courseDate.getHours() === index + 10;
                      });
                  });

                  // Überprüfe, ob es Kurse für diese Stunde gibt
                  const hasCourses = dayCourses.some(courses => courses.length > 0);

                  // Rendere die Zeile nur, wenn es Kurse gibt
                  if (!hasCourses) {
                      return null; // Überspringe das Rendern dieser Zeile
                  }
  
                return (
                  <tr key={hour}>
                    
                    {[...Array(7)].map((_, dayIndex) => {
                 
                      const day = new Date(2025, 2, dayIndex + 17);
                       const dayCourses = filteredCourses().filter(course => { // Hier rufen wir die Funktion auf
                            const courseDate = new Date(course.scheduled_at);
                            return courseDate.getDay() === day.getDay() && courseDate.getHours() === index + 10;
                        });
                      return (
                        <td 
                            key={dayIndex} 
                            className={styles.dayCell}
                        >
                            
                          {dayCourses.map(course => {
                            // Bestimme die Hintergrundfarbe basierend auf der Gruppe
                            let backgroundColor;
                            switch (course.group) {
                              case 'POLE':
                                backgroundColor = 'var(--POLE)';
                                break;
                              case 'FLEXIBILITY':
                                backgroundColor = 'var(--FLEXIBILITY)';
                                break;
                              case 'DANCE':
                                backgroundColor = 'var(--DANCE)';
                                break;
                                case 'PLAYGROUND':
                                  backgroundColor = 'var(--PLAYGROUND)';
                                break;
                                case 'SPECIALS':
                                  backgroundColor = 'var(--SPECIALS)';
                                  break;
                              default:
                                backgroundColor = 'transparent'; // Fallback-Farbe
                            }


                            const updatedCourse = {
                              ...course,
                              isCheckedOut: "course"
                          };


                            return (
                              <div 
                                key={course.title} 
                                className={styles.courseItem} 
                                style={{ backgroundColor }} // Setze die Hintergrundfarbe hier
                                onClick={()=> openCheckoutModal(updatedCourse)}
                              >
                                <h2 className={`mt-2 flex ${styles.courseTitle}`}><strong>{course.title}</strong></h2>
                                
                                <div className={`flex px-1 ${styles.courseInfos}`}>
                                    <p> {getHour(course.scheduled_at)} </p>
                                    <p className='mx-2'> - </p>
                                    <p> {getMinutes(course.duration)}</p>
                                </div>
                                <div className={` px-1 ${styles.courseInfos}`}>
                                    <p>{course.level}</p>
                                    <p>{course.room}</p>
                                    <p>{course.spots} free spots</p>
                                    <p>{course.instructor}</p>
                                </div>

                                
                               
                              </div>
                            );
                          })}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    );
    };
    
    export default CoursePlan;
