import useScrollToSection from '../../custom hooks/useScrollToSection';
import usePricetableData from '../../custom hooks/usePriceTableData';
import { useState } from 'react';
import styles from './PriceTable.module.css'
import CheckOutModal from '../Modals/CheckOutModal';

const PriceTable = () => {

    const {scrollToSection} = useScrollToSection();
    const {priceTable} = usePricetableData();


    const handlePurchase = (item) => {
        // Hier kannst du die Logik zum Kauf des Artikels implementieren
        alert(`Du hast ${item} gekauft!`);
        // Zum Beispiel könntest du hier eine Funktion aufrufen,
        // um den Artikel in den Warenkorb zu legen oder zur Kaufseite weiterzuleiten.
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkoutData, setCheckoutData] = useState(null)

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleButtonClick = (item) => {
        //const selectedCourse = courses.find(course => course.title === title);
       // setCourseInfo(selectedCourse);
        setCheckoutData(item)
        setIsModalOpen(true);
    };
    return (
        <div className={styles.container} id="priceTable">
            <h2>PREISE</h2>

            {isModalOpen && <CheckOutModal onClose={closeModal} checkoutData={checkoutData} />}

            {Object.entries(priceTable).map(([category, items]) => (
                <div key={category} className='flex-col'>
                    <h3>{category}:</h3>
                    {items.map((item, index) => (
                        <ul key={index}>
                            {Object.entries(item).map(([subCategory, subItems]) => (
                                <li key={subCategory} className='flex-col'>
                                    <h4 className={styles.subCategoryTitle}>{subCategory}</h4>
                                    {subItems.length > 0 ? (
                                        <ul className="flex">
                                            {subItems.map((subItem, idx) => (
                                                <li key={idx} className={styles.item}>
                                                    <div className='mb-2'>
                                                        <h4 className={styles.itemTitle}>{subItem.title}</h4>
                                                        <p className={styles.itemPrice}>{subItem.price}</p>
                                                        {subItem.info && <p className={styles.itemInfo}>{subItem.info}</p>}
                                                    </div>
                                                    <button className={styles.button} onClick={() => handleButtonClick(subItem)}>Kaufen</button>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p> Keine Angebote verfügbar.</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PriceTable;