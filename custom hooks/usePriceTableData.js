

const usePricetableData = () =>{

    const priceTable = {
        "Erwachsene": [
            {
                "Probetraining": [
                    { title: "Probetraining für Neukundinnen", price: "10 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "Starterpaket 5er Karte", price: "60 Euro", info: "(nach Kauf 2 Monate gültig)", detailedInfo:"detailed info"}
                ],
                "Pole & Arial Silk": [
                    { title: "Einzelstunde", price: "25 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "100 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "150 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "Unlimited Monthly Pass", price: "150 Euro", info: "(besuche innerhalb eines Monats so viele Pole & Arial Silk Classes wie du möchtest und Platz im Kurs ist)", detailedInfo:"detailed info" }
                ],
                "Dance / Yoga / Flexibility / Workout": [
                    { title: "Einzelstunde", price: "15 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "60 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "100 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "Unlimited Monthly Pass", price: "100 Euro", info: "(besuche innerhalb eines Monats so viele Dance, Yoga und Flexibility Kurse wie du möchtest und Platz im Kurs ist)", detailedInfo:"detailed info"}
                ]
            }
        ],
        "Kids and Teens": [
            {
                "Probetraining": [
                    { title: "Probestunde", price: "5 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "für Neukund:innen", price: "30 Euro", info: "" , detailedInfo:"detailed info"}
                ],
                "Pole & Arial Silk": [
                    { title: "Einzelstunde", price: "15 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "60 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info"},
                    { title: "10er Karte", price: "110 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info"}
                ],
                "Dance / Yoga / Flexibility / Workout": [
                    { title: "Einzelstunde", price: "12 Euro", info: "", detailedInfo:"detailed info" },
                    { title: "5er Karte", price: "50 Euro", info: "(nach Kauf 4 Monate gültig)", detailedInfo:"detailed info" },
                    { title: "10er Karte", price: "80 Euro", info: "(nach Kauf 6 Monate gültig)", detailedInfo:"detailed info" },
                ]
            }
        ],
        "Sonderkonditionen": [
            {
                "Schüler:innen, Auszubildende, Student:innen und Arbeitslose": [
                    {
                        title:
                            '15% Rabatt auf die regulären Preise',
                       info:
                            'Schicke uns deinen Nachweis per E-Mail',
                        detailedInfo:"detailed info"
                    }
                ]
            }
        ]
    };



    return{priceTable}

}

export default usePricetableData


/*<h4> Dance / Yoga / Flexibility / Workout: </h4>

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
            </ul>*/




            