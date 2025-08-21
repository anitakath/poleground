"use client"
import Image from 'next/image'
import styles from './AboutUs.module.css'
import PolegroundInfo from '../../../components/PolegroundInfo'
import useScrollToSection from '../../../custom hooks/useScrollToSection'
import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
const AboutUs= () =>{

    const [scrollY, setScrollY] = useState(0);
    const {scrollToSection} = useScrollToSection();
    const [activeButton,setActiveButton] = useState(null)

    const elementRef = useRef(null);


      useEffect(()=>{

        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            console.log('Element Top:', rect.top); // Abstand vom Viewport oben
            console.log('Element Bottom:', rect.bottom);
        }

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        // Cleanup beim Unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

      }, [])

      console.log(scrollY)

    const handleButtonClick = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        console.log('Element Top:', rect.top); // Abstand vom Viewport oben
        console.log('Element Bottom:', rect.bottom);
      }
    };

    return(
        <div className='flex flex-col items-center justify-center' id="ueberuns">

            <div className=' w-full min-h-13 relative flex justify-center'>
                <div className={`${styles.navButtonsContainer} ${scrollY >= 20 ? styles.moveNavBar : ''}`} ref={elementRef}>
                    <button 
                        className={` ${scrollY >= 20 ? styles.chevronUpButton : styles.noChevronUpButton}`}
                        onClick={()=> scrollToSection("ueberuns")}
                    
                    >
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <button 
                        className={`${styles.navButton} primaryFontFamily ${scrollY >= 20 ? styles.buttonFontMini : ''}`}
                        onClick={() => scrollToSection("studio")}
                    > UNSER STUDIO </button>
                    <button 
                        className={`${styles.navButton} primaryFontFamily ${scrollY >= 20 ? styles.buttonFontMini : ''}`}
                        onClick={() => scrollToSection("team")}
                    > MEET THE TEAM </button>
                    <button  
                        className={`${styles.navButton} primaryFontFamily ${scrollY >= 20 ? styles.buttonFontMini : ''}`}
                        onClick={() => scrollToSection("leitbild")}
                    > UNSER LEITBILD 
                    </button>

                </div>
               
            </div>

            <div className={`${styles.gridContainer} ${scrollY >= 20 ? styles.morePadding : ''}`} id="studio">
                <div className={styles.gridItem}> Eingangstür </div>
                <div className={styles.gridItem}> Empfang / Rezeption </div>
                <div className={styles.gridItem}> Studio 1 </div>
                <div className={styles.gridItem}> Studio 2 </div>
                <div className={styles.gridItem}> Studio 1 - andere Perspektive </div>
                <div className={styles.gridItem}> Studio 2 - andere Perspektive </div>
                <div className={styles.gridItem}> Equipment </div>
                <div className={styles.gridItem}> Shop - Pole-Kleidung </div>
                <div className={styles.gridItem}> Umkleidekabine </div>
                <div className={styles.gridItem}> Wartebereich </div>
                <div className={styles.gridItem}> Yogi Tea </div>
                <div className={styles.gridItem}> Snacks (Obstschale) </div>
                <div className={styles.gridItem}> sanitäre Anlagen </div>
                <div className={styles.gridItem}> Flur </div>

            </div>
           

         
            <div className={`${styles.gridContainer} ${scrollY >= 20 ? styles.morePadding : ''}`} id="team">
                <div className={styles.gridItem}> 
                    <p className='absolute top-2 text-xl'> Anne </p>
                    <Image src="/Start/damian-barczak-nISmT9XXL98-unsplash.jpg" width={600} height={600} alt="Anne"  className={styles.image}/>
                </div>
                <div className={styles.gridItem}>     
                <p className='absolute top-2  text-xl '> Natalia </p>
                    <Image src="/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg" width={600} height={600} alt="Natalia"  className={styles.image}/>
                </div>
                <div className={styles.gridItem}> 
                <p className='absolute top-2  text-xl '> Marlin </p>
                    <Image src="/Start/pexels-steshkawillems-1390361.jpg" width={600} height={600}  className={styles.image} alt="Marlin, das liebe Hündchen des Studios!"/>
                </div>
                <div className={styles.gridItem}> 

                    <p className='absolute top-2  text-xl'> vielleicht ja bald du? 💜</p>
                    <Image src="/Start/pexels-mart-production-7319717.jpg"width={600} height={600}  className={styles.image} alt="call to action feld! bewirb dich bei uns!"/>
                </div>
            </div>
            <PolegroundInfo/>
        </div>
    )
}

export default AboutUs