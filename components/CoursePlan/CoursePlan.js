
import styles from './CoursePlan.module.css'
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import { useState } from 'react';
import Image from 'next/image';
import useScrollToSection from '../../custom hooks/useScrollToSection';
import Link from 'next/link';
import useCourseData from '../../custom hooks/useCourseData';
import CourseRequestModal from '../Modals/CourseRequestModal';

const CoursePlan = () =>{
    const {getHour, getMinutes, convertDate} = useTimesAndDates();
    const {scrollToSection} = useScrollToSection()
    const {courses} = useCourseData();
   
    const [currentWeekStart, setCurrentWeekStart] = useState(getStartOfWeek(new Date()));
    const [weeksForward, setWeeksForward] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState('ALL');
    const [hoveredGroup, setHoveredGroup] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    function getStartOfWeek(date) {
      const startOfWeek = new Date(date);
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Sonntag
      return startOfWeek;
  }
  const goBackOneWeek = () => {

    if(weeksForward < 0){
      return
    }
    // Nur eine Woche zurückgehen
    setCurrentWeekStart(prev => {
        const newDate = new Date(prev);
        newDate.setDate(newDate.getDate() - 7);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier kannst du die Logik zum Senden der Anfrage hinzufügen
        console.log({ courseType, date, email });
        setIsModalOpen(false); // Schließe das Modal nach dem Absenden
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

      // Funktion zum Extrahieren der einzigartigen Level
      const getUniqueLevels = (group) => {
        const levels = new Set();
        courses[group].forEach(course => levels.add(course.level));
        return Array.from(levels);
      };

      console.log(currentWeekStart)


      return (
        <div className={styles.tableContainer}>
          <div className='p-2 flex'>

            <div className='mx-2 w-40 flex items-center'>
              <p className={styles.weekInfo}> {convertDate(currentWeekStart)} </p>
              <div className='flex '>
                <button className={styles.backForwardButton}>
                  <Image src="/iconpng/icons8-zurück-30.png" alt="go back button" onClick={goBackOneWeek} width={30} height={30} />
                </button>
                <button className={styles.backForwardButton}>
                  <Image src="/iconpng/icons8-vorwärts-30.png" alt="go forward button"  onClick={goForwardOneWeek} width={30} height={30} />
                </button>
              </div>

            </div>

            <div className='mx-2 w-full flex items-center justify-evenly relative'>
                <button 
                    onClick={() => handleFilterChange('ALL')} 
                    className={`${styles.filterButton} ${selectedGroup === 'ALL' ? styles.filterButtonActive : ''}`}
                >
                    ALLE KURSE
                </button>
                  {Object.keys(courses).map(group => (
                        <div key={group} >
                            <button 
                                onClick={() => handleFilterChange(group)} 
                                onMouseEnter={() => setHoveredGroup(group)} 
                                
                                className={`${styles.filterButton} ${selectedGroup === group ? styles.filterButtonActive : ''}`}
                            >
                                {group}
                            </button>
                            {/* Hover-Div für die Level-Buttons */}
                            {hoveredGroup === group && (
                                <div className={styles.filterButtonsUniqueLevelButtons}>
                                    {getUniqueLevels(group).map(level => (
                                        <button 
                                          key={level} 
                                          className={styles.levelButton}
                                          onClick={() => handleLevelChange(level)} 
                                        >
                                            {level} 
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                   
                    ))}
                    <div className={styles.descriptionsLinkContainer}> 
                      <button 
                        className={styles.courseDescriptionButton}
                        onClick={() => scrollToSection("descriptions")}
                      > zu den Kursbeschreibungen </button>
                       <button 
                        className={styles.courseDescriptionButton}
                        onClick={() => scrollToSection("priceTable")}
                      > zu den Preisen </button>
                    </div>
            </div>
          </div>
          <div className='my-2 p-2'>
            <h1>Hast du Interesse an einem Kurs zu einer anderen Tages- oder Uhrzeit als hier angeboten?</h1>
            <p>Klicke <button className={styles.courseRequestButton} onClick={() => setIsModalOpen(true)}>hier</button>, um uns mitzuteilen, welchen Kurs du in den kommenden Monaten gerne besuchen würdest. Wir setzen alles daran, deine Wünsche zu erfüllen! 💜</p>
            
          
            <CourseRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        
          <table className={styles.courseTable}>
            <thead>
              <tr>
                {/*<th className={styles.timeHeader}>Uhrzeit</th>*/}
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
                  <tr key={hour} n>
                     {/*<td className={styles.timeCell}>{hour}</td>*/}

                
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


                            return (
                              <div 
                                key={course.title} 
                                className={styles.courseItem} 
                                style={{ backgroundColor }} // Setze die Hintergrundfarbe hier
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
