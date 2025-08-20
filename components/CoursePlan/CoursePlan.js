import styles from './CoursePlan.module.css'
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import { useState, useEffect } from 'react';
import useScrollToSection from '../../custom hooks/useScrollToSection';
import CheckOutModal from '../Modals/CheckOutModal';
import CourseRequestModal from '../Modals/CourseRequestModal';
import { supabase } from '../../services/supabaseClient';

const CoursePlan = () => {
  const { scrollToSection } = useScrollToSection();
  const [courses, setCourses] = useState([]);
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [weeksForward, setWeeksForward] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckedOutModalOpen, setIsCheckedOutModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("ALL");

  // 🟣 FETCH COURSES FROM SUPABASE
  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('poleground_courses')
        .select('*');

      if (error) {
        console.error('Fehler beim Laden der Kurse:', error.message);
      } else {
        setCourses(data);
      }
    };

    fetchCourses();
  }, []);

  // 🟣 WEEK RANGE HELPER
  const getWeekRange = (weeksForward = 0) => {
    // Statt heutigem Datum -> fester Start (z.B. 8. September 2025)
    const baseDate = new Date(2025, 8, 8); // ⚠️ Monat ist 0-basiert -> 8 = September

    const day = baseDate.getDay(); // Sonntag=0, Montag=1, ...
    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(baseDate);
    monday.setDate(baseDate.getDate() + diffToMonday + weeksForward * 7);
    monday.setHours(0, 0, 0, 0);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    return { monday, sunday };
  };

  /*
  const getWeekRange = (weeksForward = 0) => {
    const today = new Date();
    const day = today.getDay(); // Sonntag=0, Montag=1, ...
    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMonday + weeksForward * 7);
    monday.setHours(0, 0, 0, 0);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    return { monday, sunday };
  };*/

  const { monday, sunday } = getWeekRange(weeksForward);

  // 🟣 FILTER COURSES OF THIS WEEK
  const coursesThisWeek = courses.filter(course => {
    const date = new Date(course.scheduled_at);
    return date >= monday && date <= sunday;
  });

  // 🟣 GROUP COURSES BY DAY
  const groupedCourses = coursesThisWeek.reduce((acc, course) => {
    const date = new Date(course.scheduled_at);
    const dayName = date.toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "2-digit" });

    if (!acc[dayName]) acc[dayName] = [];
    acc[dayName].push(course);

    acc[dayName].sort((a, b) => new Date(a.scheduled_at) - new Date(b.scheduled_at));

    return acc;
  }, {});


  const weekDaysOrder = [
    "Montag", 
    "Dienstag", 
    "Mittwoch", 
    "Donnerstag", 
    "Freitag", 
    "Samstag", 
    "Sonntag"
  ];
  

  return (
    <div className={styles.tableContainer}>
      {isCheckedOutModalOpen && <CheckOutModal />}

      {/* WEEK NAVIGATION */}
      <div className={styles.weekNav}>
        <button onClick={() => setWeeksForward(weeksForward - 1)}>⟵ Vorherige Woche</button>
        <h2 className='text-lg'>
          Woche {monday.toLocaleDateString("de-DE")} – {sunday.toLocaleDateString("de-DE")}
        </h2>
        <button onClick={() => setWeeksForward(weeksForward + 1)}>Nächste Woche ⟶</button>
      </div>

      {/* WEEK VIEW */}


  <div className={styles.weekContainer}>
    {weekDaysOrder.map((weekday, index) => {
      // 📅 Datum berechnen
      const currentDate = new Date(monday);
      currentDate.setDate(monday.getDate() + index);

      // Key für groupedCourses suchen (z.B. "Montag, 01.09.")
      const dayKey = currentDate.toLocaleDateString("de-DE", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
      });

      const dayCourses = groupedCourses[dayKey] || [];

      return (
        <div key={dayKey} className={styles.dayColumn}>
          <h3>{dayKey}</h3>

          {dayCourses.length > 0 ? (
            dayCourses.map(course => (
              <div key={course.id} className={`${styles.courseCard} ${styles[course.group]}`}>
                <h4>{course.title}</h4>
                <p>
                  {new Date(course.scheduled_at).toLocaleTimeString("de-DE", {
                    hour: "2-digit",
                    minute: "2-digit"
                  })} Uhr – {course.duration} Min
                </p>
                <p>Trainer: {course.instructor}</p>
                <p>Level: {course.level}</p>
                <p>Raum: {course.room}</p>
                <p>Plätze: {course.spots}</p>
              </div>
            ))
          ) : (
            <p className={`${styles.courseCard} ${styles.noCourseInfo}`} >Für heute wurden keine Kurse geplant</p>
          )}
        </div>
      );
    })}
  </div>

     

      {/* COURSE REQUEST MODAL */}
      <div className={styles.courseRequestModalContainer}>
        <h1 className='w-full my-2'>
          Hast du Interesse an einem Kurs zu einer anderen Tages- oder Uhrzeit als hier angeboten?
        </h1>
        <p className='w-full'>
          Klicke <button className={styles.courseRequestButton} onClick={() => setIsModalOpen(true)}>hier</button>, um
          uns mitzuteilen, welchen Kurs du in den kommenden Monaten gerne besuchen würdest. Wir setzen alles daran, deine
          Wünsche zu erfüllen! 💜
        </p>

        <CourseRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default CoursePlan;



    /* <tbody>
          
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
                                backgroundColor = 'transparent'; 
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
                                style={{ backgroundColor }} 
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
            </tbody>*/

            /*


            FILTER BY SELECTED WEEEEEEEEK

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

    */