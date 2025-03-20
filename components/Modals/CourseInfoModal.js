import React from 'react';
import styles from './CourseInfoModal.module.css'; // Stelle sicher, dass du die richtigen Styles importierst

const CourseInfoModal = ({ course, onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2 className={styles.title}>{course}</h2>
                {/* Hier kannst du weitere Informationen zum Kurs hinzufügen */}
                {/* Beispiel: */}
                {course === 'Pole Beginner' && <p>Informationen zu Pole Beginner...</p>}
                {course === 'Pole Intermediate' && <p>Informationen zu Pole Intermediate...</p>}
                {course === 'Pole Advanced' && <p>Informationen zu Pole Advanced...</p>}
                {course === 'Pole Conditioning' && <p>Informationen zu Pole Conditioning...</p>}
                {course === 'Floorwork' && <p>Informationen zu Floorwork...</p>}
                {course === 'Twerk It Out' && <p>Informationen zu Twerk It Out...</p>}
                {course === 'Lapdance' && <p>Informationen zu Lapdance...</p>}
                {course === 'Yoga & Flexibility' && <p>Informationen zu Yoga & Flexibility...</p>}
                {course === 'Playground' && <p>Informationen zu Playground...</p>}

                {/* Schließen-Button */}
                <button onClick={onClose} className={styles.button}>Schließen</button>
            </div>
        </div>
    );
};

export default CourseInfoModal;