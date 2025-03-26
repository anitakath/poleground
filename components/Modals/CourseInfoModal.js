import React from 'react';
import styles from './CourseInfoModal.module.css'; // Stelle sicher, dass du die richtigen Styles importierst
import useScrollToSection from '../../custom hooks/useScrollToSection';

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
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent}>
                <div className={styles.headerContainer}>
                    <h2 className={styles.title}>{course.title}</h2>

                    <div className={styles.buttonContainer}>
                        <button className={styles.coursePrices} onClick={() => coursePlanNavigator('priceTable')}> Preise </button>
                
                        <button className={styles.coursePlanButton} onClick={() => coursePlanNavigator('table')}> Kursplan</button>

                    </div>

                    
                </div>
               



                <p className={styles.description}> {course.description}</p>
                <p className={styles.info}>{course.info}</p>

                {/* Schließen-Button */}
                <div className=" flex justify-end h-10">
                    <button onClick={onClose} className={styles.button}>Schließen</button>
                </div>
            </div>
        </div>
    );
};

export default CourseInfoModal;