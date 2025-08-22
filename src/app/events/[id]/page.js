import useRetreatData from "../../../../custom hooks/useRetreatData";
import Link from "next/link";
import styles from "./EventsDetailsPage.module.css";

const EventDetailPage = ({ params }) => {
  const { EVENTS_DUMMY } = useRetreatData();
  const event = EVENTS_DUMMY.find((e) => e.id.toString() === params.id);

  if (!event) {
    return (
      <div className={styles.notFound}>
        <p>❌ Event wurde nicht gefunden </p>
        <Link href="/events" className={styles.backButton}>
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Zurück-Link */}
      <Link href="/events" className={styles.backLink}>
        ← Zurück zu den anderen Events
      </Link>

      {/* Titel & Untertitel */}
      <div className={styles.header}>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.descriptionTitle}>{event.descriptionsTitle}</p>
        <p className={styles.subDescription}>{event.subDescription}</p>
      </div>

      {/* Bild */}
      <img
        src={event.imagePath}
        alt={event.title}
        className={styles.image}
      />

      {/* Preis */}
      <div className={styles.priceBox}>
        <p>
          💰 Preis: <span className={styles.price}>{event.price}</span>
        </p>
      </div>

      {/* Liste */}
      <div>
        <h2 className={styles.listTitle}>Was dich erwartet:</h2>
        <ul className={styles.list}>
          {event.descriptionsTable.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item.title}
              <div className={styles.listItemImageContainer}>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventDetailPage;
