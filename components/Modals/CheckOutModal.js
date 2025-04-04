
import styles from './CheckOutModal.module.css'
import { useState } from 'react'
const CheckOutModal = ({checkoutData, onClose }) =>{

    console.log(checkoutData)
    //RENDERE ZWEI UNTERSCHIEDLICHE INHALTE, 
    // JE NACHDEM, OB CHECKOUTDATA.ISCHECKEDOUT == TICKETS  || COURSE
    // DA DER USER ENTWEDER EIN TICKET, ODER EINEN KURS DIREKT BUCHEN MÖCHTE. 


    const buyProductHandler = (checkoutData) =>{

        console.log(checkoutData)
        alert(`"${checkoutData.title}" erfolgreich gekauft`)
    }

    return(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent}>
            <h2 className='mb-2'> Übersicht deiner Produktauswahl:</h2>
                {checkoutData ? (
                    <div className=' flex-col items-center justify-center mt-4 mb-8'>
                        <h3 className={styles.modalTitle}>{checkoutData.termofcontract && "Mitgliedschaft"} {checkoutData.title}</h3>
                        
                        <p><strong>Preis:</strong> {checkoutData.price}</p>
                        {checkoutData.termofcontract && <p> <strong>Vertragslaufzeit:</strong> {checkoutData.termofcontract}</p>}
                        {checkoutData.info && checkoutData.info !== "" && (
                            <p><strong>Info:</strong> {checkoutData.info}</p>
                        )}
                        <p><strong>Detaillierte Info:</strong> {checkoutData.detailedInfo}</p>

                        {checkoutData.detailedInfo && (
                            <div className='my-2 '>
                               

                        
                                
                                {checkoutData.termofcontract && (
                                    <div>
                                        <h3> Wichtige Informationen </h3>

                                        <div className='my-2'>
                                        
                                            <p><strong>Widerrufsrecht</strong></p>
                                            <p>Du hast das Recht, innerhalb von 14 Tagen nach Vertragsabschluss ohne Angabe von Gründen von deinem Vertrag zurückzutreten. Bitte beachte, dass das Studio in diesem Fall die Vertragsgebühr des ersten Monats einbehält.</p>
                                        </div>

                                        <div className='my-2'>
                                            <p><strong> Kündigungsfristen</strong></p>
                                            <p>- Der Vertrag endet automatisch nach Ablauf der vereinbarten Laufzeit. Eine aktive Verlängerung muss spätestens 3 Tage vor Ablauf des Vertrages beantragt werden.</p>
                                            <p>- Kündigungen müssen schriftlich erfolgen und an info@polegrund.de gesendet werden.</p>
                                        </div>

                                        <div className='my-2'>
                                           <p> <strong> Mitgliedschaft pausieren</strong></p>
                                            <p>- Natürlich besteht die Möglichkeit, deine Mitgliedschaft zu pausieren.</p>
                                            <p>
                                                - Bei einer 6-monatigen Mitgliedschaft kannst du einmal ohne Angabe von Gründen für 1 bis 3 Monate pausieren.
                                            </p>
                                            <p>
                                                - Bei einer 12-monatigen Mitgliedschaft hast du die Möglichkeit, zweimal für jeweils 1 bis 3 Monate zu pausieren.
                                            </p>
                                            <p>
                                                - Bitte kontaktiere uns rechtzeitig, um deine Pausierung zu beantragen und weitere Details zu besprechen.
                                            </p>

                                        </div>


                                        <div className='my-2'>
                                            <p><strong> Mitgliedschaft übertragen</strong></p>
                                            <p>Falls du jemanden findest, der deinen Vertrag übernehmen möchte, lässt sich dies durchführen. Auch hier muss die Übertragung jedoch spätestens 3 Tage vor dem Ende der Vertragslaufzeit angekündigt werden.</p>
                                        </div>

                                        <div className='my-2'>
                                    
                                            <p><strong>Änderungen der Vertragsbedingungen</strong></p>
                                            <p>Abgeschlossene Verträge sind für die gesamte Laufzeit fix. Bei Vertragsverlängerungen behält sich das Studio das Recht vor, die Vertragskosten zu erhöhen.</p>
                                        </div>

                                        <div className='my-2'>
                                        <h4 className={styles.subTitle}>Kontaktinformationen</h4>
                                        <p>POLEGROUND<br />
                                        Poleground Straße 19<br />
                                        21335 Lüneburg<br />
                                        Tel: 04131-32951307<br />
                                        E-Mail: info@polegrund.de<br />
                                        Instagram: @poleground_studio</p>
                                    </div>

                                      
                                    </div>
                                )}






                               
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Keine Checkout-Daten verfügbar.</p>
                )}

                <p> Klicke auf "Kaufen", sobald du dir sicher bist, dass du dieses Produkt erwerben möchtest. Du wirst **zukünftig** automatisch zur Zahlungsabwicklung weitergeleitet. </p>
                <div className='flex justify-end my-2 '>
                    <button className={styles.buyButton} onClick={() => buyProductHandler(checkoutData)}> Kaufen </button>
                    <button className={styles.closeButton} onClick={onClose}>Schließen</button>
                </div>
            
            


            </div>
        </div>
    )
}

export default CheckOutModal