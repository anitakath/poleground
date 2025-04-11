
import Link from "next/link"
import styles from './MobileMenu.module.css'
import useScrollToSection from "../../custom hooks/useScrollToSection"
import { useRouter } from "next/navigation"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MobileMenu = ({isOpen,  toggleMenu}) =>{

    const {scrollToSection} = useScrollToSection()



    return(
        <div className={`${styles.mobileLinksContainer} ${isOpen ? styles.open : ''}`}>
                   <div className={styles.closeMobileMenuButton}> 
                       <button onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faX} />
                           {/*<Image src="/iconpng/icons8-löschen-50.png" alt="close button image" width={50} height={50} />*/}
                       </button> 
                   </div>
                   <Link href="/" className={styles.mobileLink}> ✨ POLEGROUND </Link>
                 
                   <br/>
            
                   <Link href="/poledance/kursplan" className={styles.mobileLink}>KURSPLAN </Link>
                   <Link href="/poledance/kursbeschreibungen" className={styles.mobileLink}>KURSBESCHREIBUNGEN </Link>
                   <Link href="/poledance/preise" className={styles.mobileLink}>PREISE </Link>
                   <Link href="/poledance/private-parties" className={styles.mobileLink}>PRIVATE PARTIES </Link>
                   
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