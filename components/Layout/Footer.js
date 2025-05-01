import styles from './Layout.module.css'
import Link from 'next/link'


const Footer = () =>{



    return(
        <div className={`${styles.container} min-h-20 p-2 flex justify-between`}>
            
            <ul className='flex mt-4'>
                <li className={` ${styles.link} mx-4`}> IMPRESSUM </li>
                <li className={` ${styles.link} mx-4`}> KONTAKT</li>
                <li className={` ${styles.link} mx-4`}> FAQ </li>
                <li className={` ${styles.link} mx-4`}> DATENSCHUTZERKLÄRUNG</li>
                <li className={` ${styles.link} mx-4`}>
                    <Link href="/poledance/login"> LOGIN</Link>
                </li>
            </ul>

            <p className='mx-4 mt-4 '> @2025 POLEGROUND (ANNE-KATHRIN WAGNER)</p>
        </div>
    )
}

export default Footer