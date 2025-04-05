
import Link from "next/link"
import styles from './MobileMenu.module.css'


const MobileMenu = ({isOpen, setIsOpen, toggleMenu}) =>{


    return(
        <div className={`${styles.mobileLinksContainer} ${isOpen ? styles.open : ''}`}>
                   <div className={styles.closeMobileMenuButton}> 
                       <button onClick={toggleMenu}>
                           schließen
                           {/*<Image src="/iconpng/icons8-löschen-50.png" alt="close button image" width={50} height={50} />*/}
                       </button> 
                   </div>
                   <Link href="/" className={styles.mobileLink}> STARTSEITE </Link>
                   <Link href="/poledance" className={styles.mobileLink}> POLEGROUND </Link>
                   <Link href="/figureskating" className={styles.mobileLink}> SKATEGROUND **in Bearbeitung**</Link>
                   <br/>
                   <br/>
                   <Link href="/" className={styles.mobileLink}>FAQ **in Bearbeitung**</Link>
                   <Link href="/poledance/ueber-uns" className={styles.mobileLink}>ÜBER UNS</Link>
                   <Link href="/jobs" className={styles.mobileLink}> JOBS </Link>
                   <Link href="/events" className={styles.mobileLink}>EVENTS **in Bearbeitung**</Link>
                   <Link href="/" className={styles.mobileLink}>KOOPERATIONEN **in Bearbeitung**</Link>
               </div>
    )
}


export default MobileMenu