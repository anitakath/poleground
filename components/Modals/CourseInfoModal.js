import React from 'react';
import styles from './CourseInfoModal.module.css'; 
import useScrollToSection from '../../custom hooks/useScrollToSection';

const CourseInfoModal = ({ course, onClose }) => {
    const { scrollToSection } = useScrollToSection();

    const coursePlanNavigator = (section) => {
        onClose();
        setTimeout(() => {
            scrollToSection(section); 
        }, 300); 
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerTitleContainer}>
                        <h2 className={styles.title}>{course.title}</h2>
                        <h3 className={styles.subTitle}>{course.subTitle}</h3>
                    </div>
                    

                    <div className={styles.buttonContainer}>
                        <button 
                            className={styles.coursePrices} 
                            onClick={() => coursePlanNavigator('priceTable')}
                        >
                            Preise
                        </button>
                        <button 
                            className={styles.coursePlanButton} 
                            onClick={() => coursePlanNavigator('table')}
                        >
                            Kursplan
                        </button>
                    </div>
                </div>

                {/* headerDescription rendern, falls vorhanden */}
                {course.headerDescription && (
                    <p className={styles.headerDescription}>{course.headerDescription}</p>
                )}

                <div className={styles.subContainer}>
                    {/* Falls descriptionTable existiert */}
                    {course.descriptionTable ? (
                        <div className={styles.descriptionTable}>
                            {Object.entries(course.descriptionTable).map(([level, data]) => (
                                <div key={level} className={styles.levelBlock}>
                                    <h4 className={styles.levelTitle}>{level}</h4>
                                    {data?.description && (
                                        <p className={styles.levelDescription}>{data.description}</p>
                                    )}
                                    {data?.info && data.info.trim() !== "" && (
                                        <p className={styles.levelInfo}>{data.info}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <p className={styles.description}>{course.description}</p>
                            <p className={styles.info}>{course.info}</p>
                        </>
                    )}
                </div>

                <button onClick={onClose} className={styles.button}>Schließen</button>
            </div>
        </div>
    );
};

export default CourseInfoModal;
