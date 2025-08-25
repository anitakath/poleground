// components/Cooperations.js
import styles from './Kooperationen.module.css';
import Link from 'next/link';

// ERSTELLE NOCH DIE IMAGE PATHS!!!

const Cooperations = () => {
    const cooperations = [
        {
            sport: 'Poledance',
            shoppartners: [
                { name: 'Leva Polewear', link: "https://www.instagram.com/levawear/?hl=de", image: '/images/partners/levawear.jpg', },
                { name: 'Fanna Polewear', link: 'https://fannapolewear.com', image: '/images/partners/fanna.jpg' },
                { name: 'Dragonfly Polewear', link: 'https://dragonflybrand.de', image: '/images/partners/dragonfly.jpg' },
                { name: 'Mila Krasna', link: 'https://dragonflybrand.de', image: '/images/partners/mila.jpg'},
                { name: 'Cristall Polewear', link: 'https://www.instagram.com/cristall_polewear/?hl=de', image: '/images/partners/cristall.jpg'},
                { name: 'Monkey Hands', link: 'https://monkeyhands.eu', image: '/images/partners/monkeyhands.jpg'},
                { name: 'Hella Heels', link: 'https://uk.hellaheels.com/', image: '/images/partners/hellaheels.jpg'},
                { name: 'Sorte Store', link: 'https://www.sorte.store/en-de', image: '/images/partners/sorte.jpg'},
            ],
            sportpartners:[
                {name: 'Urban Sports Club', link:"https://urbansportsclub.com/de"},
                {name: 'Hochschulsport', link: 'https://www.hochschulsport.uni-hamburg.de/sportcampus/flexicard.html'}

            ]
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Kooperationspartner</h2>
            <div className={styles.grid}>
                {cooperations.map((category) => (
                    <div key={category.sport} className={styles.category}>
                            
                        
                        <h1 className={styles.title}> Clubs: </h1>

                        <ul className={styles.partnerGrid}>
                        {category.sportpartners.map((partner) => (
                                <li 
                                key={partner.name} 
                                className={styles.partnerCard} 
                                style={{ backgroundImage: `url(${partner.image})` }}
                                >
                                <Link href={partner.link} className={styles.link} target="_blank" rel="noopener noreferrer" >
                                    {partner.name}
                                </Link>
                                </li>
                            ))}
                        </ul>

                        <h1 className={styles.title}> Polewear & Equipment: </h1>
                        <ul className={styles.partnerGrid}>
                            
                            {category.shoppartners.map((partner) => (
                                <li 
                                    key={partner.name} 
                                    className={styles.partnerCard} 
                                    style={{ backgroundImage: `url(${partner.image})` }}
                                >
                                    <Link href={partner.link} className={styles.link} target="_blank" rel="noopener noreferrer" >
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
