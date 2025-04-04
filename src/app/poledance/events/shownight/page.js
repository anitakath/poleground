"use client"
import styles from './ShowNight.module.css'
import Image from 'next/image';
import useRetreatData from '../../../../../custom hooks/useRetreatData';
import Link from 'next/link';

const ShowNight = () => {
    const { EVENTS_DUMMY } = useRetreatData();
    console.log(EVENTS_DUMMY);



    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div className={styles.container}>
            {EVENTS_DUMMY.filter(event => event.group === "SHOWNIGHT").map((event) => (
                <div key={event.id} className={styles.eventContainer}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={event.imagePath} 
                            width={1000} 
                            height={1000} 
                            className={styles.image} 
                            alt={event.title}
                        />

                    </div>


                    <div className={styles.infoContainer}>
                    <h1> {event.title} </h1>
                    <h2> {event.descriptionsTitle} </h2>
                    <p> {event.subDescription} </p>


                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default ShowNight;