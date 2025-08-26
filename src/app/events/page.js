"use client"
import Link from "next/link";
import styles from './Events.module.css'
import { useRef, useEffect, useState } from "react";
import useRetreatData from "../../../custom hooks/useRetreatData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import useScrollToSection from "../../../custom hooks/useScrollToSection";


const Events = () => {
  const { EVENTS_DUMMY } = useRetreatData();

  const elementRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const {scrollToSection} = useScrollToSection();

  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(()=>{
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filterEventsHandler = (filter) =>{
    setActiveFilter(filter);
  }

  const filteredEvents = activeFilter === "all" 
    ? EVENTS_DUMMY 
    : EVENTS_DUMMY.filter(event => event.filter === activeFilter);

  return (
    <div className="my-2 ">
      <div className='w-full min-h-13 relative flex justify-center'>
        <div 
          className={`${styles.navButtonsContainer} ${scrollY >= 20 ? styles.moveNavBar : ''}`} 
          ref={elementRef}
        >
          <button 
            className={`${scrollY >= 20 ? styles.chevronUpButton : styles.noChevronUpButton}`}
            onClick={()=> scrollToSection("ueberuns")}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>

          <button 
            className={`
              ${styles.navButton} 
              primaryFontFamily 
              ${scrollY >= 20 ? styles.buttonFontMini : ''} 
              ${activeFilter === "workshop" ? styles.active_button : ''}
            `}
            onClick={() => filterEventsHandler("workshop")}
          > WORKSHOPS & SHOOTINGS </button>

          <button 
            className={`
              ${styles.navButton} 
              primaryFontFamily 
              ${scrollY >= 20 ? styles.buttonFontMini : ''} 
              ${activeFilter === "gettogether" ? styles.active_button : ''}
            `}
            onClick={() => filterEventsHandler("gettogether")}
          > GET TOGETHERS </button>

          <button  
            className={`
              ${styles.navButton} 
              primaryFontFamily 
              ${scrollY >= 20 ? styles.buttonFontMini : ''} 
              ${activeFilter === "retreat" ? styles.active_button : ''}
            `}
            onClick={() => filterEventsHandler("retreat")}
          > RETREATS </button>

          <button  
            className={`
              ${styles.navButton} 
              primaryFontFamily 
              ${scrollY >= 20 ? styles.buttonFontMini : ''} 
              ${activeFilter === "all" ? styles.active_button : ''}
            `}
            onClick={() => filterEventsHandler("all")}
          > ALLE </button>
        </div>
      </div>

      <div className={styles.gridContainer}>
        {filteredEvents.map((event) => (
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
