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
  const [chosenCourse, setChosenCourse] = useState(null)

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

  const openCheckoutModal = (course) =>{
    setChosenCourse(course)
    setIsCheckedOutModalOpen(true)

  }

  const closeCheckoutModal = () =>{
    setIsCheckedOutModalOpen(false)
  }
  



  return (
    <div className={styles.tableContainer}>
      {isCheckedOutModalOpen && <CheckOutModal chosenCourse={chosenCourse} onClose={closeCheckoutModal} />}

      {/* WEEK NAVIGATION */}
      <div className={styles.weekNav}>
        <button 
          onClick={() => setWeeksForward(prev => Math.max(prev - 1, -2))}
          disabled={weeksForward <= -2}
        >
          ⟵ Vorherige Woche
        </button>

        <h2 className="text-lg">
          Woche {monday.toLocaleDateString("de-DE")} – {sunday.toLocaleDateString("de-DE")}
        </h2>

        <button 
          onClick={() => setWeeksForward(prev => Math.min(prev + 1, 8))}
          disabled={weeksForward >= 6}
        >
          Nächste Woche ⟶
        </button>
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
              <div 
                onClick={()=> openCheckoutModal(course)}
                key={course.id} 
                className={`${styles.courseCard} ${styles[course.group]}`}
              >
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

     