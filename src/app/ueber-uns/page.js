"use client"
import Image from 'next/image'
import styles from './AboutUs.module.css'
import PolegroundInfo from '../../../components/PolegroundInfo'
import useScrollToSection from '../../../custom hooks/useScrollToSection'
import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollToSection } = useScrollToSection();
  const [showTrainerInfo, setShowTrainerInfo] = useState(null);
  const elementRef = useRef(null);

  // 👇 neuer State für aktiven Button
  const [activeSection, setActiveSection] = useState("studio");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trainers = [
    { name: "ANNE", roles: "STUDIOLEITUNG | POLE | ADAPTIVE POLE | ARIAL SILK | HEELS | KIDS & TEENS", img: "/Start/damian-barczak-nISmT9XXL98-unsplash.jpg", info: "Genauere Information über Anne...." },
    { name: "NATALIA", roles: "POLE |ADAPTIVE POLE | FLOORWORK | FLEXIBILITY | BALLETT ", img: "/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg", info: "Details über Natalia..." },
    { name: "STELLA", roles: "HOOP | HAMMOCK | YOGA", img: "/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg", info: "Details über Stella..." },
    { name: "DIANA", roles: "HEELS | FLOORWORK | FLEXIBILITY", img: "/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg", info: "Details über Diana..." },
    { name: "MAX", roles: "POLE | YOGA", img: "/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg", info: "Details über Max..." },
    { name: "ISABEL", roles: "POLE | ARIAL SILK | HAMMOCK", img: "/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg", info: "Details über Isabel..." },
    { name: "MARLIN", roles: "STUDIOFELLNASE | SCHMUSEN | SNACKEN | SCHLAFEN", img: "/Start/pexels-steshkawillems-1390361.jpg", info: "" },
  ];

  const showTrainerInfoHandler = (trainer) => {
    setShowTrainerInfo(trainer)
  }

  return (
    <div className='flex my-2 flex-col items-center justify-center' id="ueberuns">

      <div className='w-full min-h-13 relative flex justify-center'>
        <div className={`${styles.navButtonsContainer} ${scrollY >= 20 ? styles.moveNavBar : ''}`} ref={elementRef}>
          <button 
            className={`${scrollY >= 20 ? styles.chevronUpButton : styles.noChevronUpButton}`}
            onClick={() => scrollToSection("ueberuns")}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>

          <button 
            className={`
              ${styles.navButton} 
              primaryFontFamily 
              ${scrollY >= 20 ? styles.buttonFontMini : ''} 
              ${activeSection === "studio" ? styles.active_button : ''}
            `}
            onClick={() => { 
              scrollToSection("studio");
              setActiveSection("studio");
            }}
          > UNSER STUDIO </button>

          <button 
            className={`
              ${styles.navButton} 
              primaryFontFamily 
              ${scrollY >= 20 ? styles.buttonFontMini : ''} 
              ${activeSection === "team" ? styles.active_button : ''}
            `}
            onClick={() => { 
              scrollToSection("team");
              setActiveSection("team");
            }}
          > MEET THE TEAM </button>

          <button  
            className={`
              ${styles.navButton} 
              primaryFontFamily 
              ${scrollY >= 20 ? styles.buttonFontMini : ''} 
              ${activeSection === "leitbild" ? styles.active_button : ''}
            `}
            onClick={() => { 
              scrollToSection("leitbild");
              setActiveSection("leitbild");
            }}
          > UNSER LEITBILD </button>
        </div>
      </div>

      {/* Studio Grid */}
      <div className={`${styles.gridContainer} ${scrollY >= 20 ? styles.morePadding : ''}`} id="studio">
        {["Eingangstür","Empfang / Rezeption","Studio 1","Studio 2","Studio 1 - andere Perspektive","Studio 2 - andere Perspektive","Equipment","Shop - Pole-Kleidung","Umkleidekabine","Wartebereich","Yogi Tea","Snacks (Obstschale)","sanitäre Anlagen","Flur"].map((item, idx) => (
          <div key={idx} className={styles.gridItem}>{item}</div>
        ))}
      </div>

      {/* Team Grid */}
      <div className={`${styles.gridContainer} ${scrollY >= 20 ? styles.morePadding : ''}`} id="team">
        {trainers.map((trainer, idx) => (
          <div key={idx} className={styles.gridItem}>
            <p className={styles.trainerName} onClick={() => showTrainerInfoHandler(trainer.name)}>
              <strong>{trainer.name}</strong> {trainer.roles}
            </p>
            {showTrainerInfo === trainer.name && (
              <p className={styles.trainerInfo}>{trainer.info}</p>
            )}
            <Image src={trainer.img} width={600} height={600} alt={trainer.name} className={styles.image}/>
          </div>
        ))}
      </div>

      <PolegroundInfo/>
    </div>
  )
}

export default AboutUs
