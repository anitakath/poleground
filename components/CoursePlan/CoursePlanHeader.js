import { useState } from 'react';
import styles from './CoursePlanHeader.module.css'
import Image from 'next/image';
//CUSTOM HOOKS + COMPONENTS
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import useCourseData from '../../custom hooks/useCourseData';
import useScrollToSection from '../../custom hooks/useScrollToSection';
import CourseRequestModal from '../Modals/CourseRequestModal';

const CoursePlanHeader = ({handleFilterChange, handleLevelChange, currentWeekStart, setCurrentWeekStart, goBackOneWeek, goForwardOneWeek, selectedGroup, hoveredGroup, setHoveredGroup}) =>{



    const [isModalOpen, setIsModalOpen] = useState(false);
    const { convertDate} = useTimesAndDates();
    const {courses} = useCourseData();

    const {scrollToSection} = useScrollToSection()


    
    

     // Funktion zum Extrahieren der einzigartigen Level
     const getUniqueLevels = (group) => {
        const levels = new Set();
        courses[group].forEach(course => levels.add(course.level));
        return Array.from(levels);
      };

    return(
    <div>

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
      
            <button 
                className={styles.courseDescriptionButton}
                onClick={() => scrollToSection("descriptions")}
            > 
                zu den Kursbeschreibungen und Preisen
            </button>
            
         
            </div>
        </div>

        <div className='my-2  mt-8 p-2'>
            <h1>Hast du Interesse an einem Kurs zu einer anderen Tages- oder Uhrzeit als hier angeboten?</h1>
            <p>Klicke <button className={styles.courseRequestButton} onClick={() => setIsModalOpen(true)}>hier</button>, um uns mitzuteilen, welchen Kurs du in den kommenden Monaten gerne besuchen würdest. Wir setzen alles daran, deine Wünsche zu erfüllen! 💜</p>
            
          
            <CourseRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>


        </div>

    )
}

export default CoursePlanHeader;