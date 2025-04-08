
import Link from "next/link"
import styles from './MobileMenu.module.css'
import useScrollToSection from "../../custom hooks/useScrollToSection"
import { useRouter } from "next/navigation"

const MobileMenu = ({isOpen,  toggleMenu}) =>{

    const {scrollToSection} = useScrollToSection()



    return(
        <div className={`${styles.mobileLinksContainer} ${isOpen ? styles.open : ''}`}>
                   <div className={styles.closeMobileMenuButton}> 
                       <button onClick={toggleMenu}>
                           schließen
                           {/*<Image src="/iconpng/icons8-löschen-50.png" alt="close button image" width={50} height={50} />*/}
                       </button> 
                   </div>
                   <Link href="/" className={styles.mobileLink}> Startseite</Link>
                   <Link href="/poledance" className={styles.mobileLink}> ✨ POLEGROUND </Link>
                 
                   <br/>
            
                   <Link href="/poledance/kursplan" className={styles.mobileLink}>Kursplan </Link>
                   <Link href="/poledance/kursbeschreibungen" className={styles.mobileLink}>Kursbeschreibungen </Link>
                   <Link href="/poledance/preise" className={styles.mobileLink}>Preise </Link>
                   <Link href="/poledance/private-parties" className={styles.mobileLink}>Private Parties </Link>
                   
                   <br/>

                   <Link href="/helpdesk" className={styles.mobileLink}>FAQ </Link>
                   <Link href="/poledance/ueber-uns" className={styles.mobileLink}>ÜBER UNS</Link>
                   <Link href="/jobs" className={styles.mobileLink}> JOBS </Link>
                   <Link href="/poledance/events" className={styles.mobileLink}>EVENTS</Link>
                   <Link href="/poledance/cooperations" className={styles.mobileLink}>KOOPERATIONEN </Link>
               </div>
    )
}


export default MobileMenu