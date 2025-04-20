
import styles from './CoursePlan.module.css'
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import { useState, useEffect } from 'react';
import useCourseData from '../../custom hooks/useCourseData';
import CoursePlanHeader from './CoursePlanHeader';
import CheckOutModal from '../Modals/CheckOutModal';
import MobileCoursePlan from './Mobile/MobileCoursePlan';
import CourseRequestModal from '../Modals/CourseRequestModal';
import { supabase } from '../../services/supabaseClient';
import useScrollToSection from '../../custom hooks/useScrollToSection';
const CoursePlan = () =>{
    const {getHour, getMinutes, convertDate} = useTimesAndDates();
    const {courses} = useCourseData();
    const [hoveredGroup, setHoveredGroup] = useState(null);
   // const [currentWeekStart, setCurrentWeekStart] = useState(getStartOfWeek(new Date()));
    const [weeksForward, setWeeksForward] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState('ALL');
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {scrollToSection} = useScrollToSection();


    function getStartOfWeek(date) {
      const day = date.getDay(); // Sonntag = 0, Montag = 1, ...
      const diff = (day === 0 ? -6 : 1) - day; // Für Wochenbeginn Montag
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() + diff);
      startOfWeek.setHours(0, 0, 0, 0); // Setze auf Mitternacht
      return startOfWeek;
    }

    const [currentWeekStart, setCurrentWeekStart] = useState(() => getStartOfWeek(new Date()));




  /* ----- FILTER START ----  */

    const goBackOneWeek = () => {
      if(weeksForward < 0){
        return
      }
      // Nur eine Woche zurückgehen
      setCurrentWeekStart(prev => {
          const newDate = new Date(prev);
          newDate.setDate(newDate.getDate() - 7);
          newDate.setHours(0, 0, 0, 0);
          return newDate;
      });

      setWeeksForward(prev => prev - 1); // Setze die Anzahl der Wochen vorwärts zurück
    };

    const goForwardOneWeek = () => {
      if (weeksForward < 8) { // Maximal 8 Wochen vorwärts
          setCurrentWeekStart(prev => {
              const newDate = new Date(prev);
              newDate.setDate(newDate.getDate() + 7);
              newDate.setHours(0, 0, 0, 0);
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

    const [selectedTrainer, setSelectedTrainer] = useState("ALL")


    const trainerFilterHandler = (who) =>{

      setSelectedTrainer(who)
    }

    const filteredCourses = () => {
        let coursesToFilter;

        if (selectedGroup === 'ALL') {
            coursesToFilter = Object.values(courses).flat();

        } else if(selectedGroup !="ALL") {
            coursesToFilter = Object.values(courses[selectedGroup]) || [];

        }

        if (selectedTrainer !== "ALL") {

          coursesToFilter = coursesToFilter.filter(course => course.instructor === selectedTrainer);
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

   
      let hoverTimeoutId = null;

      const handleLevelChange = (level) => {
        setSelectedLevel(level);
      
        if (hoverTimeoutId) {
          clearTimeout(hoverTimeoutId);
        }
      
        hoverTimeoutId = setTimeout(() => {
          setHoveredGroup(null);
        }, 1000);
      };


      /* ----- FILTER ENDE ----  */


      const [isCheckedOutModalOpen, setIsCheckedOutModalOpen] = useState(false)
      const [checkoutData, setCheckoutData] = useState(null)



      const openCheckoutModal = (course) =>{

        setIsCheckedOutModalOpen(true)

        setCheckoutData(course);


      }

       
    const closeModal = () => {
      setIsCheckedOutModalOpen(false);
    };

    

    return (
        <div className={styles.tableContainer} >

        {isCheckedOutModalOpen && <CheckOutModal onClose={closeModal} checkoutData={checkoutData}/>}
       {/*} <div className={styles.titleContainer}>
          <h1 className='text-xl'> KURSPLAN</h1>
          <div className='flex w-full justify-evenly'>
            <button onClick={() => scrollToSection('descriptions')} className={styles.buttons}> KURSBESCHREIBUNGEN</button>
            <button onClick={() => scrollToSection('priceTable')}  className={styles.buttons}> PREISE </button>
            <button onClick={() => scrollToSection('privateParties')}  className={styles.buttons}> PRIVATE PARTIES </button>
            <button onClick={() => scrollToSection('workshops')}  className={styles.buttons}> EVENTS </button>
          </div>
        </div>*/}
         
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
          trainerFilterHandler={trainerFilterHandler}
          selectedTrainer={selectedTrainer}
          setSelectedTrainer={setSelectedTrainer}
      
        />

        <MobileCoursePlan
          courses={courses}
          selectedGroup={selectedGroup}
          selectedLevel={selectedLevel}
          /*courses={courseData}*/
          currentWeekStart={currentWeekStart}
          filteredCourses={filteredCourses}
          openCheckoutModal={openCheckoutModal}
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
  

                //console.log(hour)
                 // Generiere die Kurse für den aktuellen Tag und die aktuelle Stunde
                    const dayCourses = [...Array(7)].map((_, dayIndex) => {
                      const day = new Date(2025, 2, dayIndex + 17);
                   
                      return filteredCourses().filter(course => {
                          const courseDate = new Date(course.scheduled_at);
                          //console.log(courseDate)
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
                                case 'ARIALSILK':
                                  backgroundColor = 'var(--ARIALSILK)';
                                break;
                                case 'KIDS':
                                  backgroundColor = 'var(--KIDS)';
                                break;
                              default:
                                backgroundColor = 'transparent'; // Fallback-Farbe
                            }

               
                            const time = getHour(course.scheduled_at)

                   
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
                                   <p> {time} </p>
                                    <p className='mx-2'> - </p>
                                    <p> {getMinutes(course.duration)}</p>
                                </div>
                                <div className={` px-1 ${styles.courseInfos}`}>
                                    <p>{course.scheduled_at}</p>
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




          <div className={styles.courseRequestModalContainer}>
            <h1 className=' w-full my-2'>Hast du Interesse an einem Kurs zu einer anderen Tages- oder Uhrzeit als hier angeboten?</h1>
            <p className=' w-full'>Klicke <button className={styles.courseRequestButton} onClick={() => setIsModalOpen(true)}>hier</button>, um uns mitzuteilen, welchen Kurs du in den kommenden Monaten gerne besuchen würdest. Wir setzen alles daran, deine Wünsche zu erfüllen! 💜</p>
            
          
            <CourseRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        
        </div>
    );
    };
    
    export default CoursePlan;
