import styles from './Retreat.module.css';
import Image from "next/image";
import Link from 'next/link';
import useRetreatData from '../../custom hooks/useRetreatData';
import { useState, useEffect} from 'react';

const Retreat = () => {
    const { EVENTS_DUMMY } = useRetreatData();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

     // Funktion zum Setzen des Intervalls
     const startAutoSlide = () => {
        const id = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % EVENTS_DUMMY.length);
        }, 5000);
        setIntervalId(id);
    };

    // Automatisches Wechseln der Bilder alle 5 Sekunden
    useEffect(() => {
        startAutoSlide();

        return () => clearInterval(intervalId); // Aufräumen des Intervalls bei Unmount
    }, [EVENTS_DUMMY.length]);

    // Funktion zum manuellen Wechseln der Bilder
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % EVENTS_DUMMY.length);
        resetAutoSlide();
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + EVENTS_DUMMY.length) % EVENTS_DUMMY.length);
        resetAutoSlide();
    };

    // Funktion zum Zurücksetzen des Auto-Slides
    const resetAutoSlide = () => {
        clearInterval(intervalId); // Vorheriges Intervall löschen
        startAutoSlide(); // Neues Intervall starten
    };

    //@ Link:
    // href={EVENTS_DUMMY[currentIndex].websitespath}
    return ( 
        <div >
             <h1 className={styles.title}> WORKSHOPS, EVENTS & RETREATS </h1>
             <div className={styles.container}> 
        
                <div className={styles.eventsContainer}>
                    <Image alt="retreats image" src={EVENTS_DUMMY[currentIndex].imagePath} width={1000} height={500} className={styles.image} /> 
                    <div className={styles.linkContainer}> 
                        <button onClick={handlePrev} className={styles.arrowButton}>←</button>
                        <Link className={styles.link} href="/events"> 
                            {EVENTS_DUMMY[currentIndex].title} 
                        </Link> 
                        <button onClick={handleNext} className={styles.arrowButton}>→</button>
                    </div>
                </div>
            </div> 
        </div>
       
    ); 
};

export default Retreat;