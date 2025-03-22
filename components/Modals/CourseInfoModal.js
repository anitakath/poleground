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
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2 className={styles.title}>{course.title}</h2>
                <p className={styles.description}> {course.description}</p>
                <p className={styles.info}>{course.info}</p>

                <button className={styles.coursePlanButton} onClick={() => coursePlanNavigator('table')}> gehe zum Kursplan</button>
                {/* Schließen-Button */}
                <button onClick={onClose} className={styles.button}>Schließen</button>
            </div>
        </div>
    );
};

export default CourseInfoModal;