
import styles from './CoursePlan.module.css'
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import { useState } from 'react';

const CoursePlan = () =>{


    const {getHour, getMinutes} = useTimesAndDates();

    const courses = {
        DANCE: [
          { group: "DANCE", title: "Sensual Floorwork", duration: 75, scheduled_at: "2025-03-17T10:00:00", description: "Learn to flow", instructor: "Anne", id: "1", level: "intermediate", room: "studio 2", spots: "3/13",  },
          { group: "DANCE", title: "Sexy Floor Choreo", duration: 75, scheduled_at: "2025-03-17T11:15:00", description: "Get sexy ", instructor: "Natalia", id: "2", level: "beginner", room: "studio 1", spots: "5/15",},
          { group: "DANCE", title: "Lap Dance X Chair", duration: 75, scheduled_at: "2025-03-18T18:00:00", description: "sexy sexy sexy.", instructor: "Petra", id: "3", level: "mixed", room: "studio 2", spots: "4/12",  },
          { group: "DANCE", title: "Contemporary Floor Plastique", duration: 75, scheduled_at: "2025-03-18T12:30:00", description: "Explore various contemporary styles.", instructor: "Anne", id: "4", level: "intermediate", room: "studio 1", spots: "6/15",},
          { group:"DANCE" , title:"Sensual Floorwork" , duration :75 , scheduled_at :"2025-03-19T13:30:00" , description :"Sensual Floorwork." , instructor :"Natalia" , id :"5" , level :"advanced" , room :"studio 3" , spots :"8 /10",  },
          { group:"DANCE" , title:"Twerk it out" , duration :75 , scheduled_at :"2025-03-20T10:00:00" , description :"twerk it out" , instructor :"Petra" , id :"6" , level :"beginner" , room :"studio 2" , spots :"7 /12", },
        ],
      
        POLE:[
          { group:"POLE" , title:"Pole Beginner" , duration :75 , scheduled_at :"2025-03-17T10:00:00" , description :"Introduction to pole dance techniques." , instructor :"Petra" , id :"1" , level :"beginner" ,room:"studio 3 ",spots:"4 /10", },
          { group:"POLE", title:"Pole Intermediate",duration:75,scheduled_at:"2025-03-17T11:15:00",description:"Learn intermediate spins on the pole.",instructor:"Anne",id:"2",level:"intermediate",room:"studio 1",spots:"6/12", },
          { group:"POLE", title:"Pole Advanced", duration:75, scheduled_at:"2025-03-18T12:30:00",description:"Master advanced tricks and transitions.",instructor:"Natalia ",id:"3 ",level:"advanced",room:"studio 2 ",spots:"2/8",},
          { group:'POLE', title:'Pole Flow', duration:75, scheduled_at:'2025-03-21T12:30:00', description:'Create a choreography using pole techniques.', instructor:'Petra', id:'7', level:'advanced', room:'studio 3', spots:'2/6', },
          { group:'POLE', title:'Pole Advanced', duration:75, scheduled_at:'2025-03-22T10:00:00', description:'Get fit while having fun on the pole.', instructor:'Anne', id:'8', level:'beginner', room:'studio 1', spots:'6/12'},
          { group:'POLE', title:'Pole Beginner', duration:75, scheduled_at:'2025-03-23T11:15:00', description:'Learn dynamic moves and transitions.', instructor:'Natalia', id:'9', level:'intermediate', room:'studio 2', spots:'4/8'},
          { group:'POLE', title:'Pole Intermediate', duration :75 ,scheduled_at:'2025-03-23T10:00:00' ,description:'Create an advanced choreography.' ,instructor:'Petra' ,id:'10' ,level:'advanced' ,room:'studio 3' ,spots:'2/6'}
      
        ],

        FLEXIBILITY: [
            { group: 'FLEXIBILITY', title: 'Flexi Hips & Middle Splits', duration: 75, scheduled_at: '2025-03-17T11:15:00', description: 'Improve your flexibility for better performance.', instructor: 'Natalia', id: '1', level: 'intermediate', room: 'studio 1', spots: '6/12' },
            { group: 'FLEXIBILITY', title: 'Flexi Front Splits', duration: 75, scheduled_at: '2025-03-18T13:30:00', description: 'Start your day with a good stretch.', instructor: 'Petra', id: '2', level: 'beginner', room: 'studio 3', spots: '8/15' },
            { group: 'FLEXIBILITY', title: 'Flexi Backbends', duration: 75, scheduled_at: '2025-03-19T10:00:00', description: 'Master advanced flexibility techniques.', instructor: 'Anne', id: '3', level: 'advanced', room: 'studio 2', spots: '4/8' },
            { group: 'FLEXIBILITY', title: 'Yoga meets Flexi', duration: 75, scheduled_at: '2025-03-19T11:15:00', description: 'A class focused on stretching and strengthening muscles.', instructor: 'Natalia', id: '4', level: 'intermediate', room: 'studio 1', spots: '7/12' },
            { group:'FLEXIBILITY' , title:'Flexi Hips & Middle Splits' , duration :75 , scheduled_at :'2025-03-20T12:30:00', description :'Improve flexibility through yoga poses.' , instructor :'Petra' , id :'5' , level :'beginner' , room :'studio 2' , spots :'9 /14'},
            { group:'FLEXIBILITY' , title:'Flexi Front Splits' , duration :75 , scheduled_at :'2025-03-21T10:00:00', description :'Push your limits in this intensive class.' , instructor :'Natalia' , id :'7' , level :'intermediate' , room :'studio 1' , spots :'6 /12'},
            { group:'FLEXIBILITY' , title:'Flexi Backbends' , duration :75 ,scheduled_at:'2025-03-22T11:15:00',description:'Start your day with a refreshing yoga session.',instructor:'Petra',id:'8',level:'beginner',room:'studio 2',spots:'8/10'},
            { group:'FLEXIBILITY',title:'Flexi Full Body',duration:75,scheduled_at:'2025-03-22T10:00:00',description:'Wind down with an evening stretching routine.',instructor:'Anne',id:'9',level:'intermediate',room:'studio 3',spots:'5/10'},
            { group:'FLEXIBILITY' , title:'Yoga meets Flexi' , duration :75 , scheduled_at :'2025-03-23T12:30:00' , description :'Increase your range of motion with dynamic stretches.' , instructor :'Anne' , id :'6' , level :'advanced' , room :'studio 3' , spots :'4 /8'},
        ],
        OPENTRAINING: [
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-17T15:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-17T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-17T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-18T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-18T15:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-18T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-19T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-19T15:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-19T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },

          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-20T15:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-20T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-21T15:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-21T18:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-22T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
          
          { group: 'PLAYGROUND', title: 'Playground', duration: 120, scheduled_at: '2025-03-23T10:00:00', description: 'Playground', instructor: '-', id: '1', level: 'mixed', room: 'studio 1', spots: '6/12' },
         
        ]
    
      };

      const [selectedGroup, setSelectedGroup] = useState('ALL');
      const [hoveredGroup, setHoveredGroup] = useState(null);
      const [selectedLevel, setSelectedLevel] = useState(null);


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
    
        // Filtere zusätzlich nach dem ausgewählten Level
        if (selectedLevel) {
            return coursesToFilter.filter(course => course.level === selectedLevel);
        }
    
        return coursesToFilter;
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

      return (
        <div className={styles.tableContainer}>
          <div className='p-2 flex '>

            <div className='mx-2 w-40'>
              zurück / vor
            </div>

            <div className='mx-2 w-full flex items-center relative'>
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
            </div>
          </div>

          <table className={styles.courseTable}>
            <thead>
              <tr>
                <th className={styles.timeHeader}>Uhrzeit</th>
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
              {[...Array(9)].map((_, index) => {
                const hour = (index + 10).toString().padStart(2, '0') + ':00';
                return (
                  <tr key={hour}>
                     <td className={styles.timeCell}>{hour}</td>

                
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
                                  backgroundColor = 'var(--PLAYGROUND';
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