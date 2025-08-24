
import Link from "next/link"
import styles from './MobileMenu.module.css'
import useScrollToSection from "../../custom hooks/useScrollToSection"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MobileMenu = ({isOpen,  toggleMenu}) =>{

    const {scrollToSection} = useScrollToSection()



    return(
        <div className={`${styles.mobileLinksContainer} ${isOpen ? styles.open : ''}`} >
                   <div className={styles.closeMobileMenuButton}> 
                       <button onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faX} />
                           {/*<Image src="/iconpng/icons8-löschen-50.png" alt="close button image" width={50} height={50} />*/}
                       </button> 
                   </div>
                   <Link href="/" className={styles.mobileLink} onClick={toggleMenu}> ✨ POLEGROUND </Link>
                 
                   <br/>
            
                   <Link href="/kursplan" onClick={toggleMenu}  className={styles.mobileLink}>KURSPLAN </Link>
                   <Link href="/kursbeschreibungen"  onClick={toggleMenu} className={styles.mobileLink}>KURSBESCHREIBUNGEN </Link>
                   <Link href="/preise" className={styles.mobileLink} onClick={toggleMenu} >PREISE </Link>
                   <Link href="/private-parties" className={styles.mobileLink} onClick={toggleMenu} >PRIVATE PARTIES </Link>
                   
                   <br/>

                   <Link href="/helpdesk" className={styles.mobileLink} onClick={toggleMenu} >FAQ </Link>
                   <Link href="/ueber-uns" className={styles.mobileLink} onClick={toggleMenu} >ÜBER UNS</Link>
                   <Link href="/jobs" className={styles.mobileLink} onClick={toggleMenu} > JOBS </Link>
                   <Link href="/events" className={styles.mobileLink} onClick={toggleMenu} >EVENTS</Link>
                   <Link href="/cooperations" className={styles.mobileLink} onClick={toggleMenu} >KOOPERATIONEN </Link>
               </div>
    )
}


export default MobileMenu