"use client"
import styles from './RetreatInfos.module.css';
import Image from 'next/image';
import useRetreatData from '../../../../custom hooks/useRetreatData';
import Link from 'next/link';

const RetreatInfos = () => {
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
            {EVENTS_DUMMY.map((event) => (
                <div key={event.id} className={styles.eventContainer}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={event.imagePath} 
                            width={1000} 
                            height={1000} 
                            className={styles.image} 
                            alt={event.title}
                        />

                        <div className={styles.descriptionContainer}>
                            <h1 className={styles.title}>{event.descriptionsTitle}</h1>
                            <p className={styles.description}>{event.subDescription}</p>
                            <h3 className={styles.subTitle}>Was ist im Preis enthalten?</h3>
                            <ul className={styles.descriptionsTable}>
                                {event.descriptionsTable.map((item, index) => (
                                    <li key={index}> - {item.title}</li>
                                ))}
                            </ul>
                            <p className='my-2 mb-6'><strong>Preis:</strong> {event.price}</p>

                            <Link href="/poledance/retreat/booking" className={styles.bookingLink}>Jetzt buchen!</Link>
                        </div>

                        <div className={styles.buttonDiv}> 
                            <button 
                                onClick={() => scrollToSection("exampleImages")}
                                className={styles.button}
                            
                            > fotos </button>
                        </div>

                        <div className={styles.exampleImagesContainer} id="exampleImages"> 
                            <div className={styles.exampleImageDiv}>
                                <Image 
                                    src="/Start/itzel-gonzalez-lara-0UMG5xHkiXU-unsplash.jpg" 
                                    width={300} height={300}
                                    className={styles.exampleImage}
                                    alt="retreat example pic"
                                />
                            </div>
                            <br/>
                            <div className={styles.exampleImageDiv}>
                                <Image 
                                    src="/Start/itzel-gonzalez-lara-0UMG5xHkiXU-unsplash.jpg" 
                                    width={300} height={300}
                                    className={styles.exampleImage}
                                    alt="retreat example pic"
                                />
                            </div>
                            <br/>
                            <div className={styles.exampleImageDiv}>
                                <Image 
                                    src="/Start/itzel-gonzalez-lara-0UMG5xHkiXU-unsplash.jpg" 
                                    width={300} height={300}
                                    className={styles.exampleImage}
                                    alt="retreat example pic"
                                />
                            </div>
                        
                        </div>

                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default RetreatInfos;