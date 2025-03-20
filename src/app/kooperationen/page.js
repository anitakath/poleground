import styles from './Kooperationen.module.css';
import Link from 'next/link';


const Cooperations = () => {
    const cooperations = [
        {
            sport: 'Eiskunstlauf',
            partners: [
                { name: 'Chiquesport', link: 'https://www.chiquesport.com' },
                { name: 'Eisprinzessin.at', link: 'https://www.eisprinzessin.at' },
                { name: 'HSV Eiskunstlauf', link: 'https://www.hsv-eiskunstlauf.de' }
            ]
        },
        {
            sport: 'Poledance',
            partners: [
                { name: 'PoleSportShop.de', link: 'https://www.polesportshop.de' },
                { name: 'Fanta Polewear', link: 'https://www.fantapolewear.com' },
                { name: 'Dragonfly Polewear', link: 'https://www.dragonflypolewear.com' }
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Kooperationspartner</h2>
            <div className={styles.grid}>
                {cooperations.map((category) => (
                    <div key={category.sport} className={styles.category}>
                        <h3>{category.sport}</h3>
                        <ul>
                            {category.partners.map((partner) => (
                                <li key={partner.name}>
                                    <Link href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        {partner.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cooperations;
