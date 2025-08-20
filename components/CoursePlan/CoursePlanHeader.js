import { useState } from 'react';
import {motion} from 'framer-motion'
import styles from './CoursePlanHeader.module.css'
import Image from 'next/image';
//CUSTOM HOOKS + COMPONENTS
import useTimesAndDates from '../../custom hooks/useTimesAndDates';
import useCourseData from '../../custom hooks/useCourseData';
import useScrollToSection from '../../custom hooks/useScrollToSection';



const CoursePlanHeader = ({
  handleFilterChange,
  handleLevelChange,
  currentWeekStart,
  goBackOneWeek,
  goForwardOneWeek,
  selectedGroup,
  trainerFilterHandler,
  selectedTrainer,
  setSelectedTrainer
}) => {
  const { convertDate } = useTimesAndDates();
  const { courses } = useCourseData();
  const trainer = ['ANNE', 'STELLA', 'NATALIA', 'MALAK'];
  const { scrollToSection } = useScrollToSection();

  // Extrahiert Level aus Kursdaten
  const getUniqueLevels = (group) => {
    const levels = new Set();
    courses[group].forEach((course) => levels.add(course.level));
    return Array.from(levels);
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const setTrainerHandler = (trainer) => {
    const updatedTrainer = capitalizeFirstLetter(trainer);
    setSelectedTrainer(updatedTrainer);
  };

  return (
    <div>
      {/* SPORTARTEN & LEVEL */}
      <div className={styles.filterButtonsContainer}>
        <div className={styles.groupsWrapper}>
          {/* ALLE KURSE */}
          <button
            onClick={() => handleFilterChange('ALL')}
            className={`${styles.groupButton} ${selectedGroup === 'ALL' ? styles.groupButtonActive : ''}`}
          >
            Alle Kurse
          </button>

          {/* SPORTARTEN */}
          {Object.keys(courses).map((group) => (
            <div key={group} className={styles.groupCard}>
              <button
                onClick={() => handleFilterChange(group)}
                className={`${styles.groupButton} ${selectedGroup === group ? styles.groupButtonActive : ''}`}
              >
                {group}
              </button>

              {/* LEVEL */}
              {selectedGroup === group && (
                <motion.div
                  className={styles.levelButtonsContainer}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {getUniqueLevels(group).map((level) => (
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
      </div>

      {/* TRAINER-FILTER */}
      <div className={styles.filterTrainersContainer}>
        <div className={styles.filterTrainersSubContainer}>
          <button
            onClick={() => trainerFilterHandler('ALL')}
            className={`${styles.filterButton} ${selectedTrainer === 'ALL' ? styles.filterTrainerActive : ''}`}
          >
            Alle Trainer
          </button>

          {trainer.map((trainer) => (
            <button
              key={trainer}
              className={`${styles.trainersButton} ${selectedTrainer === trainer ? styles.filterTrainerActive : ''}`}
              onClick={() => setTrainerHandler(trainer)}
            >
              {trainer}
            </button>
          ))}
        </div>
      </div>

      {/* WOCHE & NAVIGATION */}
      <div className="flex my-4 justify-start items-center">
        <p className={styles.weekInfo}>{convertDate(currentWeekStart)}</p>
        <button className={styles.backForwardButton} onClick={goBackOneWeek}>
          <Image src="/iconpng/icons8-zurück-30.png" alt="go back button" width={25} height={30} />
        </button>
        <button className={styles.backForwardButton} onClick={goForwardOneWeek}>
          <Image src="/iconpng/icons8-vorwärts-30.png" alt="go forward button" width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default CoursePlanHeader;

/*
const CoursePlanHeader = ({
    handleFilterChange, 
    handleLevelChange, 
    currentWeekStart, 
    goBackOneWeek, 
    goForwardOneWeek, 
    selectedGroup, 
    hoveredGroup, 
    trainerFilterHandler,
    selectedTrainer,
    setSelectedTrainer
}) =>{


    const { convertDate} = useTimesAndDates();
    const {courses} = useCourseData();
    const trainer =["ANNE", "STELLA", "NATALIA", "MALAK"]

    const {scrollToSection} = useScrollToSection()


     // Funktion zum Extrahieren der einzigartigen Level
     const getUniqueLevels = (group) => {
        const levels = new Set();
        courses[group].forEach(course => levels.add(course.level));
        return Array.from(levels);
    };

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      };
      
      const setTrainerHandler = (trainer) => {

        const updatedTrainer = capitalizeFirstLetter(trainer); 
        setSelectedTrainer(updatedTrainer);
      };      
      
      console.log(courses)

    
      
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
                    
                    <div key={group} className={styles.filterTrainersSubContainer}>
                        <button 
                            onClick={() => handleFilterChange(group)} 
                            className={` ${styles.filterButton} ${selectedGroup=== group ? styles.filterButtonActive : ''}`}
                        >
                            {group} 
                    
                        </button>
            
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
        <div className={styles.filterTrainersContainer}> 
            <div className={styles.filterTrainersSubContainer}>
                    <button 
                        onClick={() => trainerFilterHandler('ALL')} 
                        className={`${styles.filterButton} ${selectedTrainer === 'ALL' ? styles.filterTrainerActive : ''}`}
                    >
                        ALLE TRAINER
                    </button>

                 
                    {trainer && trainer.map((trainer) => (
                        <button 
                            key={trainer}
                            className={`${styles.trainersButton} ${selectedTrainer === trainer ? styles.filterTrainerActive : ''}`}
              
                            onClick={()=> setTrainerHandler(trainer)}
                        >{trainer}</button>
                    ))}
                    

                   
                </div>
        </div>
            
        


        <div className='flex  my-4 justify-start items-center'>
            <p className={styles.weekInfo}> {convertDate(currentWeekStart)}</p>

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

export default CoursePlanHeader;*/