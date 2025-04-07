import { useState } from 'react';
import {motion} from 'framer-motion'
import styles from './CoursePlanHeader.module.css'
import Image from 'next/image';
//CUSTOM HOOKS + COMPONENTS
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import useCourseData from '../../custom hooks/useCourseData';
import useScrollToSection from '../../custom hooks/useScrollToSection';
import CourseRequestModal from '../Modals/CourseRequestModal';

const CoursePlanHeader = ({handleFilterChange, handleLevelChange, currentWeekStart, openCheckoutModal, goBackOneWeek, goForwardOneWeek, selectedGroup, hoveredGroup, setHoveredGroup}) =>{


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
        <div className={styles.filterButtonsContainer}>
                <div className={styles.filterButtonsSubContainer}>
                    <button 
                        onClick={() => handleFilterChange('ALL')} 
                        className={`${styles.filterButton} ${selectedGroup === 'ALL' ? styles.filterButtonActive : ''}`}
                    >
                        ALLE KURSE
                    </button>
                </div>
              
                {Object.keys(courses).map(group => (
                    <div key={group} className={styles.filterButtonsSubContainer}>
                        <button 
                            onClick={() => handleFilterChange(group)} 
                            onMouseEnter={() => setHoveredGroup(group)} 
                            
                            className={`${styles.filterButton} ${selectedGroup === group ? styles.filterButtonActive : ''}`}
                        >
                            {group}
                        </button>
                        {/* Hover-Div für die Level-Buttons */}
                        {hoveredGroup === group && (
                            <motion.div 
                                className={styles.filterButtonsUniqueLevelButtons}
                                initial={{ opacity: 0, y: -3 }} // Startzustand
                                animate={{ opacity: 1, y: 0 }} // Endzustand
                                exit={{ opacity: 0, y: -3 }} // Zustand beim Verlassen
                                transition={{ duration: 0.2, ease: "easeInOut" }} // Übergangseffekte
                            >
                                {getUniqueLevels(group).map(level => (
                                <button 
                                    key={level} 
                                    className={styles.levelButton} 
                                    onClick={() => handleLevelChange(level)}
                                >
                                    {level}
                                </button>
                                ))}
                            </motion.div>
                        )}
                    </div>
       
                ))}
      
           
         
        </div>
            
        

    <div className='w-full flex'>
        <button 
                className={styles.courseDescriptionButton}
                onClick={() => scrollToSection("descriptions")}
            > 
                zu den Kursbeschreibungen und Preisen
        </button>
        <button 
                className={styles.courseDescriptionButton}
                onClick={() => scrollToSection("descriptions")}
            > 
                zu den Workshops, Events & Retreats
        </button>
    </div>

        <div className='flex mb-2 justify-start items-center'>
            <p className={styles.weekInfo}> {convertDate(currentWeekStart)} </p>

            <button className={styles.backForwardButton}>
            <Image src="/iconpng/icons8-zurück-30.png" alt="go back button" onClick={goBackOneWeek} width={25} height={30} />
            </button>
            <button className={styles.backForwardButton}>
            <Image src="/iconpng/icons8-vorwärts-30.png" alt="go forward button"  onClick={goForwardOneWeek} width={25} height={25} />
            </button>
        </div>

        </div>

    )
}

export default CoursePlanHeader;