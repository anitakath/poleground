import styles from './Retreat.module.css';
import Image from "next/image";
import Link from 'next/link';
import useRetreatData from '../../custom hooks/useRetreatData';

const Retreat = () => {
    const { EVENTS_DUMMY } = useRetreatData();

    return (
        <div >
            {EVENTS_DUMMY.map((event) => (
                <div key={event.id} className={styles.eventsContainer}>
                    <Image 
                        alt="retreats image" 
                        src={event.imagePath} 
                        width={1000} 
                        height={500}
                        className={styles.image}
                    />
                    <div className={styles.linkContainer}>
                        <Link className={styles.link} href="/poledance/retreat">
                            {event.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Retreat;