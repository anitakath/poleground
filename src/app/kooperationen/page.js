"use client"
import styles from './Kooperationen.module.css';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import useScrollToSection from '../../../custom hooks/useScrollToSection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Cooperations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("clubs"); 
  const { scrollToSection } = useScrollToSection();
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cooperations = {
    sportpartners: [
      { name: 'Urban Sports Club', link: "https://urbansportsclub.com/de" },
      { name: 'Hochschulsport', link: 'https://www.hochschulsport.uni-hamburg.de/sportcampus/flexicard.html' }
    ],
    polewear: [
      { name: 'Leva Polewear', link: "https://www.instagram.com/levawear/?hl=de", image: '/images/partners/levawear.jpg' },
      { name: 'Fanna Polewear', link: 'https://fannapolewear.com', image: '/images/partners/fanna.jpg' },
      { name: 'Dragonfly Polewear', link: 'https://dragonflybrand.de', image: '/images/partners/dragonfly.jpg' },
      { name: 'Mila Krasna', link: 'https://dragonflybrand.de', image: '/images/partners/mila.jpg' },
      { name: 'Cristall Polewear', link: 'https://www.instagram.com/cristall_polewear/?hl=de', image: '/images/partners/cristall.jpg' },
      { name: 'Hella Heels', link: 'https://uk.hellaheels.com/', image: '/images/partners/hellaheels.jpg' },
      { name: 'Sorte Store', link: 'https://www.sorte.store/en-de', image: '/images/partners/sorte.jpg' },
    ],
    equipment: [
      { name: 'Monkey Hands', link: 'https://monkeyhands.eu', image: '/images/partners/monkeyhands.jpg' },
    ]
  };

  return (
    <div className={styles.container}>
      {/* Nav-Bar */}
      <div className="w-full min-h-13 relative flex justify-center">
        <div
          className={`${styles.navButtonsContainer} ${
            scrollY >= 20 ? styles.moveNavBar : ""
          }`}
          ref={elementRef}
        >
          <button
            className={`${scrollY >= 20 ? styles.chevronUpButton : styles.noChevronUpButton}`}
            onClick={() => scrollToSection("kooperationen")}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>

          <button
            className={`${styles.navButton} ${scrollY >= 20 ? styles.buttonFontMini : ""} ${activeSection === "clubs" ? styles.active_button : ""}`}
            onClick={() => {
              scrollToSection("clubs");
              setActiveSection("clubs");
            }}
          >
            CLUBS
          </button>

          <button
            className={`${styles.navButton} ${scrollY >= 20 ? styles.buttonFontMini : ""} ${activeSection === "polewear" ? styles.active_button : ""}`}
            onClick={() => {
              scrollToSection("polewear");
              setActiveSection("polewear");
            }}
          >
            POLEWEAR
          </button>

          <button
            className={`${styles.navButton} ${scrollY >= 20 ? styles.buttonFontMini : ""} ${activeSection === "equipment" ? styles.active_button : ""}`}
            onClick={() => {
              scrollToSection("equipment");
              setActiveSection("equipment");
            }}
          >
            EQUIPMENT
          </button>
        </div>
      </div>

      {/* Clubs */}
      <div className={styles.gridContainer} id="clubs">
        {cooperations.sportpartners.map((partner) => (
          <div key={partner.name} className={styles.gridItem}>
            <div className={styles.partnerCard}>
              <Link href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {partner.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Polewear */}
      <div className={`${styles.gridContainer} ${scrollY >= 20 ? styles.morePadding : ""}`} id="polewear">
        {cooperations.polewear.map((partner) => (
          <div key={partner.name} className={styles.gridItem}>
            <div
              className={styles.partnerCard}
              style={{ backgroundImage: `url(${partner.image})` }}
            >
              <Link href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {partner.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Equipment */}
      <div className={`${styles.gridContainer} ${scrollY >= 20 ? styles.morePadding : ""}`} id="equipment">
        {cooperations.equipment.map((partner) => (
          <div key={partner.name} className={styles.gridItem}>
            <div
              className={styles.partnerCard}
              style={{ backgroundImage: `url(${partner.image})` }}
            >
              <Link href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {partner.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cooperations;


 {/* <div className={styles.grid}>
                {cooperations.map((category) => (
                    <div key={category.sport} className={styles.category}>
                            
                        
                        <h1 className={styles.title}> Clubs: </h1>

                        <ul className={styles.partnerGrid}>
                        {category.sportpartners.map((partner) => (
                                <li 
                                key={partner.name} 
                                className={styles.partnerCard} 
                                style={{ backgroundImage: `url(${partner.image})` }}
                                >
                                <Link href={partner.link} className={styles.link} target="_blank" rel="noopener noreferrer" >
                                    {partner.name}
                                </Link>
                                </li>
                            ))}
                        </ul>

                        <h1 className={styles.title}> Polewear & Equipment: </h1>
                        <ul className={styles.partnerGrid}>
                            
                            {category.shoppartners.map((partner) => (
                                <li 
                                    key={partner.name} 
                                    className={styles.partnerCard} 
                                    style={{ backgroundImage: `url(${partner.image})` }}
                                >
                                    <Link href={partner.link} className={styles.link} target="_blank" rel="noopener noreferrer" >
                                        {partner.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>*/}