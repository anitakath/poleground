import styles from './Layout.module.css'
import Link from 'next/link'


const Footer = () =>{



    return(
        <div className={`${styles.container} min-h-20 p-2 flex justify-between`}>
            
            <ul className='flex mt-4'>
                <li className={` ${styles.link} mx-4`}> 
                    <Link href="/impressum"> IMPRESSUM</Link>
                </li>
                <li className={` ${styles.link} mx-4`}> 
                <Link href="/contact"> KONTAKT </Link>
                </li>
                <li className={` ${styles.link} mx-4`}> 
                    <Link href="/helpdesk"> FAQ</Link>
                 </li>
                <li className={` ${styles.link} mx-4`}> 
                    <Link href="/privacy-policy"> DATENSCHUTZERKLÄRUNG </Link>
                </li>
                <li className={` ${styles.link} mx-4`}>
                    <Link href="/login"> LOGIN</Link>
                </li>
            </ul>

            <p className='mx-4 mt-4 '> @2025 POLEGROUND (ANNE-KATHRIN WAGNER)</p>
        </div>
    )
}

export default Footer