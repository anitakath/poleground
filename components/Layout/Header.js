"use client";
import Link from "next/link";
import styles from './Layout.module.css';
import Image from "next/image";
import { useTitle } from "../../context/TitleContext";


const Header = () => {

    const { title, setTitle } = useTitle();



  
  
    return (
        <div className={`min-h-20 flex relative items-center justify-center px-4 ${styles.container}`}>
            <nav className="flex w-full my-2 justify-center items-center space-x-4">
                <Link href="/about" className={styles.link}> FAQ </Link>
                <Link href="/about" className={styles.link}> ÜBER UNS </Link>
                <div className="text-lg px-4 relative font-bold">
                    <Link href="/"> {title} </Link>
                </div>
                <Link href="/events" className={styles.link}> EVENTS </Link>
                <Link href="/kooperationen" className={styles.link}> KOOPERATIONEN </Link>
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