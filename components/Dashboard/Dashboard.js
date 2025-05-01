import styles from './Dashboard.module.css'
import useCourseData from '../../custom hooks/useCourseData'
import { useState } from 'react';

import AddCourseModal from './AddCourseModal'; // Stelle sicher, dass du diese Datei hast

// Beispiel: Funktion, um den Start der Woche (Montag) zu bestimmen
const getStartOfWeek = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDay(); // Sonntag=0, Montag=1,...
  const diff = (day === 0 ? -6 : 1) - day; // Verschiebung zum Montag
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() + diff);
  return startOfWeek;
};

const DashboardComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Beispiel: Kurse aus useCourseData
  const { courses } = useCourseData();

  console.log(courses)

  // Gruppiere Kurse nach Wochen
  const weeklyGroups = (() => {
    const weeks = {};
    Object.values(courses).flat().forEach((course) => {
      const startOfWeek = getStartOfWeek(course.scheduled_at);
      const weekKey = startOfWeek.toISOString().slice(0,10); // z.B. "2025-04-28"
      if (!weeks[weekKey]) {
        weeks[weekKey] = [];
      }
      weeks[weekKey].push(course);
    });
    // Sortiere die Wochen chronologisch
    return Object.keys(weeks).sort().map((key) => ({
      weekStart: key,
      courses: weeks[key],
    }));
  })();

  const daysOfWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

  // Button Handlers
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleMultiSelectMode = () => {
    if (isMultiSelectMode) {
      setIsMultiSelectMode(false);
      setSelectedCourses([]);
    } else {
      setIsMultiSelectMode(true);
    }
  };

  const toggleCourseSelection = (course) => {

    console.log(course)

    const courseSheduledAt = course.scheduled_at
    
    if (selectedCourses.includes(course.scheduled_at)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseSheduledAt));
    } else {
      setSelectedCourses([...selectedCourses, courseSheduledAt]);
    }
  };

  console.log(isMultiSelectMode)
  console.log(selectedCourses)


  const addIsCancelledProperty = () => {
    const updatedCourses = {};

    Object.keys(courses).forEach(group => {
      updatedCourses[group] = courses[group].map(course => ({
        ...course,
        isCancelled: false,
      }));
    });

    setCourses(updatedCourses);
  };

  const fetchCourses = async () => {
    const rawData = await fetchYourData();
    const processedData = rawData.map(course => ({
      ...course,
      isCancelled: false,
    }));
    // dann in deinem Zustand speichern oder zurückgeben
  };


  return (
    <div className={styles.container}>
      <h1>Wochenplan</h1>

      <button onClick={addIsCancelledProperty}>Alle Kurse auf "nicht storniert" setzen</button>

      {/* Action Buttons */}
      <div className={styles.actionContainer}>

        <button className={styles.greenButton} onClick={handleOpenModal}>+</button>

        <button 
          className={styles.redButton} 
          onClick={toggleMultiSelectMode}
        >
          -
        </button>
      </div>

      {/* Wochenplan-Gitter */}
      <div className={styles.gridContainer}>
        {/* Kopfzeile mit Tagen */}
        <div className={styles.headerRow}>
          <div className={styles.headerCell}>Woche</div>
          {daysOfWeek.map(day => (
            <div key={day} className={styles.headerCell}>{day}</div>
          ))}
        </div>

        {/* Zeilen für jede Woche */}
        {weeklyGroups.map((week, index) => {
          const weekStartDate = new Date(week.weekStart);
          const weekEndDate = new Date(weekStartDate);
          weekEndDate.setDate(weekStartDate.getDate() +6);

          return (
            <div key={index} className={styles.dataRow}>
              {/* Erste Zelle: Wochenangabe */}
              <div className={styles.cell}>
                {week.weekStart} - {weekEndDate.toISOString().slice(0,10)}
              </div>
              {/* Für jeden Tag in der Woche */}
              {daysOfWeek.map((day, i) => {
                const currentDayDate = new Date(weekStartDate);
                currentDayDate.setDate(weekStartDate.getDate() + i);

                // Filtere Kurse für diesen Tag
                const coursesForDay = week.courses.filter(course => {
                  const courseDateStr = new Date(course.scheduled_at).toISOString().slice(0,10);
                  return courseDateStr === currentDayDate.toISOString().slice(0,10);
                });

                // Sortiere Kurse nach Uhrzeit
                const sortedCourses = coursesForDay.slice().sort((a,b) => new Date(a.scheduled_at).getTime() - new Date(b.scheduled_at).getTime());

                return (
                  <div key={day} className={styles.cell}>
                    {sortedCourses.length >0 ? (
                      sortedCourses.map((course) => (
                        <div
                          key={course.id}
                          className={`${styles.courseItem} ${isMultiSelectMode && selectedCourses.includes(course.id) ? styles.selected : ''} ${isMultiSelectMode && !selectedCourses.includes(course.id) ? styles.wobble : ''}`}
                          onClick={() => isMultiSelectMode && toggleCourseSelection(course)}
                        >
                          <strong>{course.title}</strong><br />
                          {new Date(course.scheduled_at).toLocaleString('de-DE')}<br />
                          Dauer: {course.duration} Minuten<br />
                        </div>
                      ))
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Modal zum Hinzufügen */}
      {showModal && (
        <AddCourseModal onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default DashboardComponent;