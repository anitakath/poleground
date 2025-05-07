import styles from './MobileDashboard.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const MobileDashboard = ({ toggleCourseSelection, weeklyGroups, isMultiSelectMode, selectedCourses}) => {
    
  // Funktion zum Gruppieren der Kurse nach Tag
  const groupCoursesByDay = (courses) => {
    const days = {
      Montag: [],
      Dienstag: [],
      Mittwoch: [],
      Donnerstag: [],
      Freitag: [],
      Samstag: [],
      Sonntag: []
    };

    courses.forEach(course => {
      const date = new Date(course.scheduled_at);
      const options = { weekday: 'long' };
      const dayNameEnglish = date.toLocaleString('en-US', options); // z.B. "Monday"

      // Deutsche Wochentage zuordnen
      const dayMap = {
        Monday: 'Montag',
        Tuesday: 'Dienstag',
        Wednesday: 'Mittwoch',
        Thursday: 'Donnerstag',
        Friday: 'Freitag',
        Saturday: 'Samstag',
        Sunday: 'Sonntag'
      };

      const dayNameGerman = dayMap[dayNameEnglish];

      if (dayNameGerman && days[dayNameGerman]) {
        days[dayNameGerman].push({ ...course, date });
      }
    });

    return days;
  };


  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  }

  const goUpHandler = () => {

    console.log('Go up')
  
    const element = document.getElementById("filterCoursesComponent");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={styles.container} id="mobileDashboardContainer">
        <button className={styles.goUp_button} onClick={goUpHandler}> 
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
      {weeklyGroups.map((week, index) => (
        <div key={index} className={styles.weekContainer}>
        
          {/* Wochenstart anzeigen */}
          <h2 className={styles.weekStart} id={week.weekStart}>Woche ab dem {formatDate(week.weekStart)}</h2>

          {/* Kurse nach Tag gruppieren */}
          {Object.entries(groupCoursesByDay(week.coursesObject)).map(([day, courses]) => (
            courses.length > 0 && (
              <div key={day} className={styles.daySection}>
                {/* Tag und Datum anzeigen */}
                <h3 className={styles.dayHeader}>{day}</h3>
                {/* Kurse des Tages */}
                {courses.length >0 && courses.map((course) => {
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

                    
                    return(
                  <div 
                    onClick={() => isMultiSelectMode && toggleCourseSelection(course)}
                    style={{ backgroundColor }} 
                    key={course.id} 
                    className={`${styles.courseItem} ${isMultiSelectMode && selectedCourses.includes(course.uuid) ? styles.selected : ''} ${isMultiSelectMode && !selectedCourses.includes(course.uuid) ? styles.wobble : ''}`}>
                    <p><strong>{course.title}</strong></p>
                    <p>Uhrzeit: {new Date(course.scheduled_at).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</p>
                    <p>Raum: {course.room}</p>
                    <p>Instructor: {course.instructor}</p>
                  </div>
                )})}
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobileDashboard;