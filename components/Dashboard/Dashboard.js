import styles from './Dashboard.module.css'
import { v4 as uuidv4 } from 'uuid';
import useCourseData from '../../custom hooks/useCourseData'
import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient';
import AddCourseModal from './AddCourseModal'; // Stelle sicher, dass du diese Datei hast
import useFetchCourseData from '../../custom-hooks/useFetchCourseData';
import useCourses from '../../custom hooks/useCourses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
  const {transformCourses} = useCourses();
  const [showModal, setShowModal] = useState(false);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [coursesObject, setCoursesObject] = useState({})
  const [isLoadingData, setIsLoadingData] = useState(true)

  
  // Gruppiere Kurse nach Wochen
  const weeklyGroups = (() => {
    if (!coursesObject || typeof coursesObject !== 'object') {
      return [];
    }
    const weeks = {};
    Object.values(coursesObject).flat().forEach((course) => {
      const startOfWeek = getStartOfWeek(course.scheduled_at);
      const weekKey = startOfWeek.toISOString().slice(0,10);
      if (!weeks[weekKey]) {
        weeks[weekKey] = [];
      }
      weeks[weekKey].push(course);
    });
    return Object.keys(weeks).sort().map((key) => ({
      weekStart: key,
      coursesObject: weeks[key],
    }));
  })();

  /*
  const weeklyGroups = (() => {
    const weeks = {};
    Object.values(coursesObject).flat().forEach((course) => {
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
      coursesObject: weeks[key],
    }));
  })();
  */

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

    const courseUuid = course.uuid
    
    if (selectedCourses.includes(course.uuid)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseUuid ));
    } else {
      setSelectedCourses([...selectedCourses, courseUuid ]);
    }
  };



 

  function formatDateRange(startDate, endDate) {
    const startDay = startDate.getDate().toString().padStart(2, '0');
    const startMonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
    const endDay = endDate.getDate().toString().padStart(2, '0');
    const endMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
    const year = endDate.getFullYear(); // Annahme: beide Daten im selben Jahr
  
    return `${startDay}.${startMonth}.-${endDay}.${endMonth}.${year}`;
  }




  const fetchCourseData = async () => {
    setIsLoadingData(true)
    try {
      const { data, error } = await supabase
        .from('poleground_courses')
        .select('*'); // Alle Spalten auswählen

      if (error) {
        console.error('Fehler beim Laden der Kurse:', error);
        setIsLoadingData(false)
      } else {
        setCoursesObject(transformCourses(data))
        setCourseData(data);
        setIsLoadingData(false)
      }
    } catch (err) {
      console.error('Unbekannter Fehler beim Fetch:', err);
      setIsLoadingData(false)
    }
  };


  
  // Optional: Daten beim Komponenten-Laden automatisch holen
  useEffect(() => {
    fetchCourseData();
  }, [showModal]);
  


  const deleteSelectedObjects = async () => {
    console.log('Lösche ausgewählte Objekte...');
  
    try {
      const { data, error } = await supabase
        .from('poleground_courses')
        .delete()
        .in('uuid', selectedCourses); // Hier wird das Array verwendet
  
      if (error) {
        console.error('Fehler beim Löschen:', error);
      } else {
        console.log('Erfolgreich gelöscht:', data);
  
        setSelectedCourses([])
        // Optional: Nach dem Löschen die Daten neu laden oder den UI-Status aktualisieren
        fetchCourseData();
      }
    } catch (err) {
      console.error('Unbekannter Fehler beim Löschen:', err);
    }
  };


  return (
    <div className={styles.container}>

    {/* Action Buttons */}
      <div className={styles.actionContainer}>

        <button className={styles.greenButton} onClick={handleOpenModal}>+</button>

        <button 
          className={styles.redButton} 
          onClick={toggleMultiSelectMode}
        >
          -
        </button>

        {selectedCourses && selectedCourses.length > 0 && (
          <button className={styles.deleteButton} onClick={() => deleteSelectedObjects()}> 
           <FontAwesomeIcon icon={faTrash} />
          </button>
        )}

        <button className='mx-4 cursor-pointer'> Eintrag editieren </button>
        <button className='mx-4 cursor-pointer' > Einträge / Wochen kopieren </button>
      </div>

      <div>
        { isLoadingData && <p className='text-xl my-6'>  Kursplan lädt... </p>}
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
                <p className={styles.cell_paragraph}> 
                {formatDateRange(new Date(week.weekStart), new Date(weekEndDate))}
                </p>
              </div>
              {/* Für jeden Tag in der Woche */}
              {daysOfWeek.map((day, i) => {
                const currentDayDate = new Date(weekStartDate);
                currentDayDate.setDate(weekStartDate.getDate() + i);

                // Filtere Kurse für diesen Tag
                const coursesForDay = week.coursesObject.filter(course => {
                  const courseDateStr = new Date(course.scheduled_at).toISOString().slice(0,10);
                  return courseDateStr === currentDayDate.toISOString().slice(0,10);
                });

                // Sortiere Kurse nach Uhrzeit
                const sortedCourses = coursesForDay.slice().sort((a,b) => new Date(a.scheduled_at).getTime() - new Date(b.scheduled_at).getTime());

              
                return (
                  <div key={day} className={styles.cell}>
                    {sortedCourses.length >0 ? (
                      sortedCourses.map((course) => {

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
                                  key={course.id}
                                  style={{ backgroundColor }} 
                                  className={`${styles.courseItem} ${isMultiSelectMode && selectedCourses.includes(course.uuid) ? styles.selected : ''} ${isMultiSelectMode && !selectedCourses.includes(course.uuid) ? styles.wobble : ''}`}
                                  onClick={() => isMultiSelectMode && toggleCourseSelection(course)}
                                >
                                  <strong>{course.title}</strong><br />
                                  {new Date(course.scheduled_at).toLocaleString('de-DE')}<br />
                                  {course.room} 
                                  <br/>
                                  Dauer: {course.duration} Minuten<br />
                                </div>
                          )
                        })
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
        <AddCourseModal onClose={handleCloseModal} courseData={courseData} />
      )}
    </div>
  );
};

export default DashboardComponent;