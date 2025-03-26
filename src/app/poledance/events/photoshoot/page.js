
import Image from 'next/image';
import useRetreatData from "../../../../../custom hooks/useRetreatData"
import Link from 'next/link';
import styles from './Photoshoot.module.css'


const Photoshoot =() =>{

    const { EVENTS_DUMMY } = useRetreatData();

    return(
        <div className='border-2'>
             {EVENTS_DUMMY.filter(event => event.group === "PHOTOSHOOT").map((event) => (
                <div key={event.id} className={styles.eventContainer}>
                    <Image 
                            src={event.imagePath} 
                            width={1000} 
                            height={1000} 
                            className={styles.image} 
                            alt={event.title}
                    />


                    <div className={styles.callToActionContainer}> 
                        <div className='w-6/12 my-10 p-2'>
                            <h1> {event.descriptionsTitle}</h1>
                            <p> {event.subDescription}</p>
                        </div>

                        <div className={styles.cardsContainer}>
                            <div className={styles.card}> 
                                KARTE 1
                            </div>
                            <div className={styles.card}> 
                                KARTE 1
                            </div>
                            <div className={styles.card}> 
                                KARTE 1
                            </div>
                        </div>

                    </div>
                </div>
            ))}
      
        </div>
    )
}

export default Photoshoot