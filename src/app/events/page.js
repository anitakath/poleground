"use client"
import Link from "next/link";
import styles from './Events.module.css'
import useRetreatData from "../../../custom hooks/useRetreatData"

const Events = () => {
  const { EVENTS_DUMMY } = useRetreatData();

  return (
    <div className="my-2 lg:mx-4">
      <div className={styles.gridContainer}>
        {EVENTS_DUMMY.map((event) => (
          <Link 
            key={event.id} 
            href={`/events/${event.id}`} 
            className={styles.gridItem}
          >
            <div className={styles.header_container}>
              <h2 className={styles.title}>{event.title}</h2>
              <p>{event.descriptionsTitle}</p>
              <p><strong>Preis:</strong> {event.price}</p>
            </div>
            <img 
              src={event.imagePath} 
              alt={event.title} 
              className={styles.eventImage} 
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Events
