import React, { useState } from 'react';
import PriceTable from './PriceTable';
import styles from './CourseDescription.module.css';
import CourseInfoModal from '../Modals/CourseInfoModal';

const CourseDescription = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courseInfo, setCourseInfo] = useState('');

    const handleButtonClick = (course) => {
        setCourseInfo(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className={styles.courseDescriptionDiv}>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Pole Beginner')}>Pole Beginner</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Pole Intermediate')}>Pole Intermediate</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Pole Advanced')}>Pole Advanced</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Pole Conditioning')}>Pole Conditioning</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Floorwork')}>Floorwork</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Twerk It Out')}>Twerk It Out</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Lapdance')}>Lapdance</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Yoga & Flexibility')}>Yoga & Flexibility</button>
                <button className={`${styles.button} beVietnamProFont`} onClick={() => handleButtonClick('Playground')}>Playground</button>
            </div>

            {isModalOpen && (
                <CourseInfoModal course={courseInfo} onClose={closeModal} />
            )}
        </div>
    );
};

export default CourseDescription;