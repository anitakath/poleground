import useScrollToSection from '../../custom hooks/useScrollToSection';
import usePricetableData from '../../custom hooks/usePriceTableData';
import { useState, useEffect } from 'react';
import styles from './PriceTable.module.css'
import CheckOutModal from '../Modals/CheckOutModal';
import Guidelines from './prices_guidelines/Guidelines';

const PriceTable = () => {

    const {scrollToSection} = useScrollToSection();
    const {priceTable} = usePricetableData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkoutData, setCheckoutData] = useState(null)
    const [openSubCategories, setOpenSubCategories] = useState({});
    const [activeSection, setActiveSection] = useState("prices")



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
    

 

    const scrollToSectionHandler = (section) => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.container} id="priceTable">
            {isModalOpen && <CheckOutModal onClose={closeModal} checkoutData={checkoutData} />}

            <div>
                <div className='flex justify-center'>
                    <h1 className=' text-center text-xl mb-2 mx-2'> 
                        <button className={`${styles.section_button} ${activeSection === "prices" ? styles.section_button_active : ""}`} onClick={()=> setActiveSection("prices")}>
                         PREISLISTE
                        </button>
                    </h1> 
                    <h1 className=' text-center text-xl mb-2 mx-2'> 
                        <button className={`${styles.section_button} ${activeSection === "guidelines" ? styles.section_button_active : ""}`} onClick={() => setActiveSection("guidelines")}>
                         RICHTLINIEN 
                        </button>
                    </h1>
                </div>
                {activeSection === "prices" &&(
                    <div className='flex justify-center p-2'>
                        <button className={styles.navigationBtn} onClick={() => scrollToSection('Erwachsene')}> Erwachsene </button>
                        <button className={styles.navigationBtn} onClick={() => scrollToSection('Kids and Teens')}> Kids & Teens </button>
                    </div>
                )}
            </div>

            {activeSection === "guidelines" && (
                <div>
                    <Guidelines />
                    
                </div>
            )}

            {activeSection === "prices" && (
            <>
                {Object.entries(priceTable).map(([category, items]) => (
                <div key={category} className='flex-col'>
                    {items.map((item, index) => (
                    <ul key={index}>
                        <h2 id={category}></h2>
                        {Object.entries(item).map(([subCategory, subItems]) => (
                        <li key={subCategory} className='flex-col'>
                            <button
                            className={styles.subCategoryButton}
                            onClick={() => toggleSubCategory(category, subCategory)}
                            >
                            {subCategory}
                            </button>
                            {openSubCategories[category]?.[subCategory] && (
                            subItems.length > 0 ? (
                                <ul className={styles.itemContainer}>
                                {subItems.map((subItem, idx) => (
                                    <li key={idx} className={styles.item}>
                                    <div className='mb-2'>
                                        <h4 className={styles.itemTitle}>{subItem.title}</h4>
                                        <h4 className={styles.itemsubTitle}>{subItem.termofcontract}</h4>
                                        <p className={styles.itemPrice}>{subItem.price}</p>
                                        {subItem.info && <p className={styles.itemInfo}>{subItem.info}</p>}
                                    </div>
                                    <button
                                        className={styles.button}
                                        onClick={() => handleButtonClick(subItem)}
                                    >
                                        Kaufen
                                    </button>
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
            </>
            )}
            
        </div>
    );
};

export default PriceTable;