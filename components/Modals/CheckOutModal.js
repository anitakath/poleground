
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
            <h2 className='mb-10'>Checkout Details</h2>

            <h3> Überischt deiner Produktauswahl:</h3>
                {checkoutData ? (
                    <div className=' flex-col items-center justify-center mt-4 mb-8'>
                        <h3 className={styles.modalTitle}>{checkoutData.title}</h3>
                        <p><strong>Preis:</strong> {checkoutData.price}</p>
                        {checkoutData.info && checkoutData.info !== "" && (
                            <p><strong>Info:</strong> {checkoutData.info}</p>
                        )}
                        {checkoutData.detailedInfo && (
                            <p><strong>Detaillierte Info:</strong> {checkoutData.detailedInfo}</p>
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