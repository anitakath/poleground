"use client";
import Link from "next/link";
import styles from './Layout.module.css';
import Image from "next/image";
import { useTitle } from "../../context/TitleContext";
import { useState } from "react";

const Header = () => {

    const { title, setTitle } = useTitle();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


  
  
    return (
        <div className={`min-h-20 flex relative items-center justify-center px-4 ${styles.container}`}>
           
            <nav className={styles.navigation}>
                <div className={styles.titleContainer}>
                    <Link href="/"> {title} </Link>
                </div>

                <div>
                    <Link href="/about" className={styles.link}> FAQ </Link>
                    <Link href="/about" className={styles.link}> ÜBER UNS </Link>
                    <Link href="/events" className={styles.link}> EVENTS </Link>
                    <Link href="/kooperationen" className={styles.link}> KOOPERATIONEN </Link>
                </div>

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
                <div className={`${styles.mobileLinksContainer} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.closeMobileMenuButton}> 
                        <button onClick={toggleMenu}>
                            schließen
                            {/*<Image src="/iconpng/icons8-löschen-50.png" alt="close button image" width={50} height={50} />*/}
                        </button> 
                    </div>
                    <Link href="/" className={styles.mobileLink}> STARTSEITE </Link>
                    <Link href="/poledance" className={styles.mobileLink}> POLEGROUND </Link>
                    <Link href="/figureskating" className={styles.mobileLink}> SKATEGROUND </Link>
                    <br/>
                    <br/>
                    <Link href="/about" className={styles.mobileLink}>FAQ</Link>
                    <Link href="/about" className={styles.mobileLink}>ÜBER UNS</Link>
                    <Link href="/events" className={styles.mobileLink}>EVENTS</Link>
                    <Link href="/kooperationen" className={styles.mobileLink}>KOOPERATIONEN</Link>
                </div>

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
            </div>
        </div>
    );
};

export default Header;