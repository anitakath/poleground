

import styles from './PriceTable.module.css'
const PriceTable = () => {



    const handlePurchase = (item) => {
        // Hier kannst du die Logik zum Kauf des Artikels implementieren
        alert(`Du hast ${item} gekauft!`);
        // Zum Beispiel könntest du hier eine Funktion aufrufen,
        // um den Artikel in den Warenkorb zu legen oder zur Kaufseite weiterzuleiten.
    };



    return (
        <div className={styles.container}>
            <h2> PREISE </h2>

            <h3> Für Neukund:innen:</h3>

            <ul>
                <li>
                   <div className='mb-2'>
                        <h4 className={styles.itemTitle}> Probetraining für Neukundinnen</h4>
                        <p className={styles.itemPrice}> 10 Euro </p>
                    
                   </div>
                  
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>

                <li>
                    <div className=' mb-2'>
                        <h4 className={styles.itemTitle}> Starterpaket 5er Karte: </h4>
                        <p className={styles.itemPrice}> ... Euro </p>
                        <p className={styles.itemInfo}> (nach Kauf 2 Monate gültig)</p>
                    </div>

                    <button className={styles.button} onClick={() => handlePurchase('Starterpaket')}>Kaufen</button>
                </li>
            </ul>


            <h4>Pole & Arial Silk:</h4>

            <ul>
                <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> Einzelstunde </h4>
                        <p className={styles.itemPrice}> 25 Euro </p>
                   </div>
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 5er Karte </h4>
                        <p className={styles.itemPrice}> 100 Euro  </p>
                        <p className={styles.itemInfo}> (nach Kauf 4 Monate gültig) </p>


                    </div>
                    <p>
                      

                    </p>
                   
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>
                    <p>
                        10er Karte: 
                        <br/> 
                        <span className={styles.span}> 150 Euro </span> 
                        <br/>
                        <span className={styles.subSpan}>(nach Kauf 6 Monate gültig)</span>
                    </p>
                   
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>
                    <p>
                        Unlimited Monthly Pass:
                        <br/>
                        <span className={styles.span}> 150 Euro </span> <br/>
                        <span className={styles.subSpan}> 
                            (besuche innerhalb eines Monats so viele Pole & Arial Silk Classes wie du möchtest und Platz im Kurs ist)
                        </span>
                    </p>
                   
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
            </ul>

            <h4> Dance / Yoga / Flexibility / Workout: </h4>
            
            <ul>
                <li>Einzelstunde: 15 Euro</li>
                <li>
                    <p>
                         5er Karte: 
                         <br/>
                        <span className={styles.span}> 60 Euro </span>
                        <br/>
                       <span className={styles.subSpan}>  (nach Kauf 4 Monate gültig)</span>
                    </p> 
                </li>
                <li>
                    <p>
                        <strong>10er Karte: 100 Euro </strong>
                        <br/>
                        <span className={styles.subSpan}> (nach Kauf 6 Monate gültig)</span>
                    </p>
                </li>
                <li>Unlimited Monthly Pass: 100 Euro (besuche innerhalb eines Monats so viele Dance, Yoga und Flexibility Kurse wie du möchtest und Platz im Kurs ist)</li>
            </ul>
            <br/>


            <h3> Kids & Teens (bis 15. Lj.): </h3>

            <h4> Pole & Arial: </h4>

            <ul>
                <li>Pole & Arial Probestunde: 5 Euro</li>
                <li>Pole & Arial Starterpaket für Neukund:innen: 5er Karte für 30 Euro</li>
                <li>Pole & Arial Einzelstunde: 15 Euro</li>
                <li>Pole & Arial 5er / 10er Karte: 60 Euro / 120 Euro (nach Kauf 4 / 6 Monate gültig)</li>
            </ul>   

          
            <h4> Dance / Yoga / Flexibility / Workout: </h4>

            <ul>
                <ul>
                    <li>Einzelstunde: 12 Euro</li>
                    <li>5er Karte: 50 Euro</li>
                    <li>10er Karte: 80 Euro</li>
                </ul>
            </ul>

            <h4>Sonderkonditionen Schüler:innen, Auszubildende und Student:innen:</h4>

            <ul>
                <li>- 15% Rabatt auf die regulären Preise.</li>
                <li>- Anfrage / Nachweis per E-Mail.</li>
            </ul>
           

        </div>
    );
}

export default PriceTable;