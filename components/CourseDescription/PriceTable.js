import useScrollToSection from '../../custom hooks/useScrollToSection';
import usePricetableData from '../../custom hooks/usePriceTableData';
import { useState, useEffect } from 'react';
import styles from './PriceTable.module.css'
import CheckOutModal from '../Modals/CheckOutModal';

const PriceTable = () => {

    const {scrollToSection} = useScrollToSection();
    const {priceTable} = usePricetableData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkoutData, setCheckoutData] = useState(null)
    const [openSubCategories, setOpenSubCategories] = useState({});



    const handlePurchase = (item) => {
        // Hier kannst du die Logik zum Kauf des Artikels implementieren
        alert(`Du hast ${item} gekauft!`);
        // Zum Beispiel könntest du hier eine Funktion aufrufen,
        // um den Artikel in den Warenkorb zu legen oder zur Kaufseite weiterzuleiten.
    };

   
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleButtonClick = (item) => {
        // Erstelle eine Kopie des item-Objekts und füge die neue Eigenschaft hinzu
        const updatedItem = {
            ...item,
            isCheckedOut: "tickets"
        };
    
        // setze die aktualisierten Daten
        setCheckoutData(updatedItem);
    
        // Optional: Wenn du auch den selectedCourse setzen möchtest
        // const selectedCourse = courses.find(course => course.title === title);
        // setCourseInfo(selectedCourse);
    
        console.log(updatedItem); // Zeigt das aktualisierte Objekt an
        setIsModalOpen(true);
    };
    const toggleSubCategory = (category, subCategory) => {
        setOpenSubCategories((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [subCategory]: !prev[category]?.[subCategory], // Toggle den Zustand nur für die spezifische Subkategorie
            },
        }));
    };


    useEffect(() => {
        const initialOpenStates = {};
    
        Object.entries(priceTable).forEach(([category, items]) => {
          if (items.length > 0) {
            // Initialisiere ein Objekt für jede Kategorie
            initialOpenStates[category] = {};
    
            // Gehe durch alle Subkategorien und setze sie auf true
            items.forEach(item => {
              const subCategoryKeys = Object.keys(item);
              subCategoryKeys.forEach(subCategory => {
                initialOpenStates[category][subCategory] = true; // Setze jede Subkategorie auf true
              });
            });
          }
        });
    
        setOpenSubCategories(initialOpenStates); // Setze den initialen Zustand
      }, []); // Abhängigkeit hinzufügen
    

    /*
    useEffect(() => {
        const initialOpenStates = {};
        Object.entries(priceTable).forEach(([category, items]) => {
            if (items.length > 0) {
                const firstSubCategory = Object.keys(items[0])[0]; // Nimm die erste Subkategorie
                initialOpenStates[category] = {
                    [firstSubCategory]: true, // Setze die erste Subkategorie auf true
                };
            }
        });
        setOpenSubCategories(initialOpenStates); // Setze den initialen Zustand
    }, []);*/


    return (
        <div className={styles.container} id="priceTable">

            {/*} <div className={styles.titleContainer}>
                <h1 className='text-xl'> PREISE </h1>
                <div className={styles.buttonsContainers}>
                    <button onClick={() => scrollToSection('table')} className={styles.buttons}> KURSPLAN</button>
                    <button onClick={() => scrollToSection('descriptions')}  className={styles.buttons}> KURSBESCHREIBUNGEN </button>
                    <button onClick={() => scrollToSection('privateParties')}  className={styles.buttons}> PRIVATE PARTIES </button>
                    <button onClick={() => scrollToSection('workshops')}  className={styles.buttons}> EVENTS </button>
                </div>
            </div>*/}

            {isModalOpen && <CheckOutModal onClose={closeModal} checkoutData={checkoutData} />}

            {Object.entries(priceTable).map(([category, items]) => (
                <div key={category} className='flex-col'>
                    <h3>{category}:</h3>
                    {items.map((item, index) => (
                        <ul key={index} >
                            {Object.entries(item).map(([subCategory, subItems]) => (
                                <li key={subCategory} className='flex-col'>
                                    <button
                                        className={styles.subCategoryButton}
                                        onClick={() => toggleSubCategory(category, subCategory)} 
                                    >{subCategory}</button>
                                    {openSubCategories[category]?.[subCategory] && ( // Überprüfe den Zustand nur für diese Kategorie und Subkategorie
                                        subItems.length > 0 ? (
                                            <ul className={styles.itemContainer}>
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
                                            <p>Keine Angebote verfügbar.</p>
                                        )
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