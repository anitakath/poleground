import Link from "next/link";
import styles from './Layout.module.css'

const Header = () => {
    return (
        <div className={`min-h-14 flex  items-center justify-center px-4 ${styles.container}`}>
            
            <nav className="flex w-full my-2  justify-center items-center space-x-4">
                <Link href="/about" className={styles.link}>
                  About
                </Link>
                <Link href="/kursplaene" className={styles.link}>
                   Kurspläne
                </Link>
                <div className="text-lg px-4 relative font-bold">
                    <Link href="/">
                        POLEGROUND
                    </Link>
                    
                </div>
                <Link href="/events" className={styles.link}>
                    Events
                </Link>
                <Link href="/shop" className={styles.link}>
                    Preise
                </Link>
            </nav>
        </div>
    );
};

export default Header;