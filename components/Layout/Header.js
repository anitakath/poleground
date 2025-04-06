"use client";
import Link from "next/link";
import styles from './Layout.module.css';
import Image from "next/image";
import { useTitle } from "../../context/TitleContext";
import { useState } from "react";
import Sponsorings from "./Sponsoring";
import MobileMenu from "./MobileMenu";

const Header = () => {

    const { title, setTitle } = useTitle();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


  
  
    return (
        <div>
            <div className={`min-h-20 flex relative items-center justify-center px-4 ${styles.container}`}>
           
            <nav className={styles.navigation}>
               <div className={styles.titleContainer}>
                   <Link href="/"> {title} </Link>
               </div>

               <div className={styles.linksContainer}>
                   <Link href="/helpdesk" className={styles.link}> FAQ  </Link>
                  
                  <div className={styles.dropdownContent}>
                    <Link href="/poledance/ueber-uns" className={styles.dropdownLink}> Poledance </Link>
                    <Link href="/figureskating/ueber-uns" className={styles.dropdownLink}> Figure Skating </Link>
       
                  </div>

                  <div className={styles.linkAboutUs}>
                        <Link  href="/poledance/ueber-uns" className={styles.link}> ÜBER POLEGROUND </Link>
                        {/*<div className={styles.dropdownContent}>
                        <Link href="/poledance/ueber-uns" className={styles.dropdownLink}> Poleground </Link>
                        <Link href="/figureskating/ueber-uns" className={styles.dropdownLink}> Figure Skating Club **in Bearbeitung** </Link>
                        </div>*/}
                    </div>
               
                   <Link href="/jobs" className={styles.link}> JOBS </Link>
                   <Link href="/poledance/events" className={styles.link}> EVENTS </Link>
                   <Link href="/poledance/cooperations" className={styles.link}> KOOPERATIONEN </Link>
               </div>
               {/*}
               <div className={styles.mobileMenu}>
                   <button onClick={toggleMenu} className={styles.menuButton}> 
                       <Image 
                           src="/iconpng/icons8-menü-50.png" 
                           alt="menu button" 
                           width={30} 
                           height={30}
                       />    
                   </button>
                  
               </div>
               */} 
              <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu}/>

           </nav>

           <div className={styles.socialContainer}>
               <button className={styles.socialButton}>
                   <Image alt="button to connect with us via instagram" src="/iconpng/icons8-instagram-50.png" width={40} height={40} className={styles.socialIcon}/>
               </button>
               <button className={styles.socialButton}>
                   <Image alt="button to connect with us via tiktok" src="/iconpng/icons8-tick-tack-50.png" width={40} height={40} className={styles.socialIcon}/>
               </button>
               <button className={styles.socialButton}>
                   <Image alt="button to connect with us via telephone" src="/iconpng/icons8-telefon-50.png" width={40} height={40} className={styles.socialIcon}/>
               </button>
               <button className={styles.socialButton}>
                   <Image alt="button to connect with us via email" src="/iconpng/icons8-mail-50.png" width={40} height={40} className={styles.socialIcon}/>
               </button>

               <button onClick={toggleMenu} className={styles.socialButton}> 
                       <Image 
                           src="/iconpng/icons8-menü-50.png" 
                           alt="menu button" 
                           width={30} 
                           height={30}
                           className={styles.socialIcon}
                       />    
                   </button>
           </div>
       
        </div>

 
        
        </div>
       
    );
};

export default Header;