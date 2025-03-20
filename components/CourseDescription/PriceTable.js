import useScrollToSection from '../../custom hooks/useScrollToSection';

import styles from './PriceTable.module.css'
const PriceTable = () => {


    const {scrollToSection} = useScrollToSection();


    const handlePurchase = (item) => {
        // Hier kannst du die Logik zum Kauf des Artikels implementieren
        alert(`Du hast ${item} gekauft!`);
        // Zum Beispiel könntest du hier eine Funktion aufrufen,
        // um den Artikel in den Warenkorb zu legen oder zur Kaufseite weiterzuleiten.
    };



    return (
        <div className={styles.container} id="priceTable">
            <h2 onClick={() => scrollToSection('priceTable')}> PREISE </h2>

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
                   
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>

                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 10er Karte </h4>
                        <p className={styles.itemPrice}> 150 Euro  </p>
                        <p className={styles.itemInfo}> (nach Kauf 6 Monate gültig) </p>
                    </div>
        
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>
                   <div className='mb-2'>
                        <h4 className={styles.itemTitle}> Unlimited Monthly Pass: </h4>
                        <p className={styles.itemPrice}> 150 Euro  </p>
                        <p className={styles.itemInfo}> (besuche innerhalb eines Monats so viele Pole & Arial Silk Classes wie du möchtest und Platz im Kurs ist) </p>
                    </div>
                 
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
            </ul>

            <h4> Dance / Yoga / Flexibility / Workout: </h4>
            
            <ul>

                <li>
                   <div className='mb-2'>
                        <h4 className={styles.itemTitle}> Einzelstunde: </h4>
                        <p className={styles.itemPrice}> 15 Euro  </p>
                    </div>
                 
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>

                <li>
                   <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 5er Karte: </h4>
                        <p className={styles.itemPrice}> 60 Euro  </p>
                        <p className={styles.itemInfo}> (nach Kauf 4 Monate gültig) </p>
                    </div>
                 
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>


                
                <li>
                   <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 10er Karte: </h4>
                        <p className={styles.itemPrice}> 100 Euro  </p>
                        <p className={styles.itemInfo}> (nach Kauf 6 Monate gültig) </p>
                    </div>
                 
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>
                   <div className='mb-2'>
                        <h4 className={styles.itemTitle}> Unlimited Monthly Pass: </h4>
                        <p className={styles.itemPrice}> 100 Euro  </p>
                        <p className={styles.itemInfo}> (besuche innerhalb eines Monats so viele Dance, Yoga und Flexibility Kurse wie du möchtest und Platz im Kurs ist) </p>
                    </div>
                 
                    <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
    
            </ul>
            <br/>


            <h3> Kids & Teens (bis 15. Lj.): </h3>

            <h4> Pole & Arial: </h4>

            <ul>
                <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> Probestunde:  </h4>
                        <p className={styles.itemPrice}> 5 Euro  </p>
                    </div>
                    
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> für Neukund:innen:  </h4>
                        <p className={styles.itemPrice}> 30 Euro  </p>
                    </div>
                    
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
    
                <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> Einzelstunde:  </h4>
                        <p className={styles.itemPrice}> 15 Euro  </p>
                    </div>
                    
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>

                <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 5er  </h4>
                        <p className={styles.itemPrice}> 60 Euro  </p>
                        <p className={styles.itemInfo}> (nach Kauf 4 Monate gültig) </p>
                    </div>
                    
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
                <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 10er Karte:  </h4>
                        <p className={styles.itemPrice}> 110 Euro </p>
                        <p className={styles.itemInfo}> (nach Kauf 6 Monate gültig) </p>
                    </div>
                    
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                </li>
            </ul>   

          
            <h4> Dance / Yoga / Flexibility / Workout: </h4>

            <ul>
                <ul>
                    <li>
                        <div className='mb-2'>
                            <h4 className={styles.itemTitle}> Einzelstunde: </h4>
                            <p className={styles.itemPrice}> 12 Euro </p>
                            
                        </div>
                        
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                    </li>
                    <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 5er Karte:  </h4>
                        <p className={styles.itemPrice}> 50 Euro </p>
                        <p className={styles.itemInfo}> (nach Kauf 4 Monate gültig) </p>
                    </div>
                    
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                    </li>
                    <li>
                    <div className='mb-2'>
                        <h4 className={styles.itemTitle}> 10er Karte:  </h4>
                        <p className={styles.itemPrice}> 80 Euro </p>
                        <p className={styles.itemInfo}> (nach Kauf 6 Monate gültig) </p>
                    </div>
                    
                        <button className={styles.button} onClick={() => handlePurchase('Probetraining')}>Kaufen</button>
                    </li>
                   
                </ul>
            </ul>

            <h4>Sonderkonditionen Schüler:innen, Auszubildende und Student:innen:</h4>

            <ul>
                <li>
                    <div className='mb-2'>
                        <h4 className={`${styles.itemTitle} relative top-4`}> 15% </h4>
                        <h4 className={`${styles.itemTitle} relative top-4`}> Rabatt auf die regulären Preise </h4>
                        <p className={`{styles.itemInfo} relative top-4 my-2 `}> schicke uns deinen Nachweis per E-Mail </p>
                
                    </div>
                    
                </li>

            </ul>
           

        </div>
    );
}

export default PriceTable;