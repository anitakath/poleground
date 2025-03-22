import React from 'react';
import styles from './CourseInfoModal.module.css'; // Stelle sicher, dass du die richtigen Styles importierst

const CourseInfoModal = ({ course, onClose }) => {

    console.log(course)
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2 className={styles.title}>{course.title}</h2>
                <p className={styles.description}> {course.description}</p>
                <p className={styles.info}>{course.info}</p>
                {/* Schließen-Button */}
                <button onClick={onClose} className={styles.button}>Schließen</button>
            </div>
        </div>
    );
};

export default CourseInfoModal;