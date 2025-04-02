import React from 'react';
import styles from './CourseInfoModal.module.css'; // Stelle sicher, dass du die richtigen Styles importierst
import useScrollToSection from '../../custom hooks/useScrollToSection';
import Image from 'next/image';
const CourseInfoModal = ({ course, onClose }) => {

    console.log(course)
    const {scrollToSection} = useScrollToSection()

    const coursePlanNavigator = (section) =>{

        onClose();
        setTimeout(() => {
            scrollToSection(section); 
        }, 300); 
    

    }
    return (
        <div className={styles.modalOverlay} >
            <div className={styles.modalContent}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerTitleContainer}>
                        <h2 className={styles.title}>{course.title}</h2>
                        <h3 className={styles.subTitle}> {course.subTitle}</h3>
                    </div>



                    <div className={styles.buttonContainer}>
                        <button className={styles.coursePrices} onClick={() => coursePlanNavigator('priceTable')}> Preise </button>
                
                        <button className={styles.coursePlanButton} onClick={() => coursePlanNavigator('table')}> Kursplan</button>

                    </div>

                    
                </div>

                <div className={styles.subContainer}>
                    <p className={styles.description}> {course.description}</p>
                    <p className={styles.info}>{course.info}</p>

                </div>

              

                {/* Schließen-Button */}
              
                <button onClick={onClose} className={styles.button}>Schließen</button>
     
            </div>
        </div>
    );
};

export default CourseInfoModal;