// ../Modals/CourseRequestModal.js
import React, { useState } from 'react';

import styles from './CourseRequest.module.css'


const CourseRequestModal = ({ isOpen, onClose }) => {
  
    const [requests, setRequests] = useState([{ courseType: '', date: '', time: '', email: '' }])
    const [success,setSuccess] = useState({});
    const [isAgreed, setIsAgreed] = useState(false);
    const [errors, setErrors] = useState({});



     // Dummy-Daten für bereits gesendete Anfragen (hier solltest du deine Logik zur Überprüfung implementieren)
     const sentRequests = [
        { email: 'user@example.com', date: new Date('2023-10-01') },
        // Weitere Anfragen...
    ];


    //VALIDATE AND SEND COURSE REQUEST TO MEEEEE
    const handleSubmit = (e) => {
        e.preventDefault();

        /*
        if (validateEmailInLast14Days()) {
            setErrors({ email: 'Sie haben in den letzten 14 Tagen bereits Wünsche abgeschickt.' });
            return;
        } */

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Hier kannst du die Logik zum Senden der Anfrage hinzufügen
        const emailList = requests.map(request => request.email).join(', ');
        alert('Eine Benachrichtigung wird innerhalb der nächsten Woche an ' + emailList + ' gesendet.');    
        
        setRequests([{ courseType: '', date: '', time: '', email: '' }]);
        
        onClose(); // Schließe das Modal nach dem Absenden
    };

  
    const addRequestField = () => {
        const lastRequest = requests[requests.length - 1];

        // Überprüfen, ob das letzte Feld ausgefüllt ist und ob weniger als 5 Wünsche vorhanden sind
        if (lastRequest.courseType && lastRequest.date && lastRequest.email) {
            if (requests.length < 5) {
                setRequests([...requests, { courseType: '', date: '', time: '', email: '' }]);
                setErrors({}); // Fehler zurücksetzen
            } else {
                setErrors({ addRequest: 'Es sind maximal 5 Wünsche erlaubt.'});
            }
        } else {
            setErrors({ addRequest: 'Bitte fülle alle Felder im aktuellen Wunsch aus, ehe du einen neuen hinzufügst.' });
        }
    };

    const deleteRequestField = (index) => {
        // Erstelle eine Kopie des aktuellen Requests-Arrays
        const updatedRequests = requests.filter((_, i) => i !== index);
        setRequests(updatedRequests);
    };

    const handleInputChange = (index, field, value) => {
        const updatedRequests = [...requests];
        updatedRequests[index][field] = value;
        setRequests(updatedRequests);

        // Fehler zurücksetzen, wenn der Benutzer etwas eingibt
        if (errors.addRequest) {
            setErrors((prevErrors) => ({ ...prevErrors, addRequest: undefined }));
        }
    };

    const isWithinOpeningHours = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const selectedTime = new Date();
        selectedTime.setHours(hours, minutes);
    
        const openingTime = new Date();
        openingTime.setHours(10, 0); // 10:00 Uhr
    
        const closingTime = new Date();
        closingTime.setHours(21, 0); // 21:00 Uhr
    
        return selectedTime >= openingTime && selectedTime <= closingTime;
    };

    const isDateWithinRange = (date) => {
        const today = new Date();
        const oneMonthFromNow = new Date(today);
        oneMonthFromNow.setMonth(today.getMonth() + 1); // Ein Monat in die Zukunft
    
        const fiveMonthsFromNow = new Date(today);
        fiveMonthsFromNow.setMonth(today.getMonth() + 5); // Fünf Monate in die Zukunft
    
        const selectedDate = new Date(date);
    
        return selectedDate >= oneMonthFromNow && selectedDate <= fiveMonthsFromNow;
    };

    const validateForm = () => {
        const errors = {};

        requests.forEach((request, index) => {
            if (!request.courseType) {
                errors[`courseType${index}`] = "Bitte wähle einen Kurs aus.";
            }
            if (!request.date) {
                errors[`date${index}`] = "Bitte wähle ein Datum aus.";
            }else if (!isDateWithinRange(request.date)) {
                errors[`date${index}`] = "Das Datum muss mindestens einen Monat und höchstens fünf Monate in der Zukunft liegen.";
            }
            if (!request.time) {
                errors[`time${index}`] = "Bitte gib eine Uhrzeit ein.";
            } else if (!isWithinOpeningHours(request.time)) {
                errors[`time${index}`] = "Die Uhrzeit muss innerhalb unserer Öffnungszeiten liegen, also zwischen 10:00 und 21:00 Uhr.";
            }
            if (!request.email) {
                errors[`email${index}`] = "Bitte gib eine E-Mail-Adresse ein.";
            } else if (!/\S+@\S+\.\S+/.test(request.email)) {
                errors[`email${index}`] = "Bitte gib eine gültige E-Mail-Adresse ein.";
            }
        });

        return errors;
    };


    if (!isOpen) return null; // Wenn das Modal nicht geöffnet ist, nichts rendern

    console.log(errors)

    console.log(requests)

    return (
        <div className={styles.container}>
            <div className={styles.modalContent}>
              
            <div className='my-2 w-10/12'>
                <h2 style={{color: "var(--title)"}}><strong>Wichtige Informationen: Bitte lesen und am Ende das Kästchen anklicken, um deine Wünsche eingeben zu können.</strong></h2>

                <p>- Wir nehmen lediglich Wünsche von bereits bestehenden Kunden an, die unsere Kurse regelmäßig und länger als 6 Monate besuchen. (Bitte die E-Mail Adresse verwenden, mit der du dich bei uns registriert hast!) </p>
                <p>- Es sind pro Kunde maximal 5 Wünsche möglich, welche mindestens einen Monat, maximal 4 im Voraus angegeben werden können.  </p>
                <p>- Nach dem erfolgreichen Absenden deiner Wünsche solltest du eine automatisch generierte E-Mail erhalten, die den Eingang deiner Anfrage bestätigt.</p>
                <p>- Es kann vorkommen, dass nicht jeder Wunsch erfüllt werden kann.</p>
                <p>- die Bearbeitung deiner Wünsche kann einige Zeit in Anspruch nehmen. Wir bemühen uns, dir jedoch so schnell wie möglich (i.d.R innerhalb von 14 Werktagen) zu antworten.</p>
                <p>- Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.</p>
                <p>- Falls du deine Wünsche nach dem Absenden ändern oder stornieren möchtest, kontaktiere uns bitte zeitnah und direkt.</p>

               {/* Checkbox zur Bestätigung */}
                <div className={styles.checkboxContainer}>
                    <input 
                        type="checkbox" 
                        id="agreement" 
                        checked={isAgreed} 
                        onChange={() => setIsAgreed(!isAgreed)} 
                        className={styles.checkboxInput}
                    />
                    <label htmlFor="agreement" className={styles.checkboxLabel}>Ich habe die Informationen gelesen und bin einverstanden.</label>
                </div>
            </div>


            {isAgreed && (

                <form onSubmit={handleSubmit} className={styles.form}>

                    {requests.map((request, index) => (
                            <div key={index} className='w-full flex  items-center'>
                                <div className={styles.inputDiv}>
                                    <label>Kursart:</label>
                                    <select 
                                        className={styles.formInput} 
                                        value={request.courseType} 
                                        onChange={(e) => handleInputChange(index, 'courseType', e.target.value)} 
                                        required
                                    >
                                        <option value="" disabled>Bitte wählen...</option>
                                        <option value="Pole 0-1">Pole 0-1</option>
                                        <option value="Pole 1-2">Pole 1-2</option>
                                        <option value="Pole 3">Pole 3</option>
                                        <option value="Pole Choreo 2">Pole Choreo 2</option>
                                        <option value="Pole Choreo 3">Pole Choreo 3</option>
                                        <option value="Pole Conditioning">Pole Conditioning</option>
                                        <option value="Heels Essentials">Heels Essentials</option>
                                        <option value="Heels Flow">Heels Flow</option>
                                        <option value="Sexy Floorwork">Sexy Floorwork</option>
                                        <option value="Sensual Floorwork">Sensual Floorwork</option>
                                        <option value="Floorwork Plastique">Floorwork Plastique</option>
                                        <option value="Floor Yoga X Flexi">Floor Yoga X Flexi</option>
                                        <option value="Flexi Frontsplits">Flexi Frontsplits</option>
                                    </select>
                                </div>

                                <div className={styles.inputDiv}>
                                    <label>Datum:</label>
                                    <input 
                                        className={styles.formInput} 
                                        type="date" 
                                        value={request.date} 
                                        onChange={(e) => handleInputChange(index, 'date', e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className={styles.inputDiv}>
                                    <label>Uhrzeit:</label>
                                    <input 
                                        className={styles.formInput} 
                                        type="time" 
                                        value={request.time} 
                                        onChange={(e) => handleInputChange(index, 'time', e.target.value)} 
                                        required 
                                    />
                                </div>

                                <div className={styles.inputDiv}>
                                    <label>E-Mail:</label>
                                    <input 
                                        className={styles.formInput} 
                                        type="email" 
                                        value={request.email} 
                                        placeholder="deineEmail@beispiel.de" 
                                        onChange={(e) => handleInputChange(index, 'email', e.target.value)} 
                                    />
                                    {/* Fehleranzeige für E-Mail */}
                                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                                </div>

                                {index > 0 && (
                                    <button className={styles.deleteRequestButton} onClick={() => deleteRequestField(index)}> 🚮 </button>
                                )}
                            </div>
                        ))}



                    
    
                        <div className='w-full'>
                            <button type="button" className={styles.addRequestsButton} onClick={addRequestField}>+ füge weitere Wünsche hinzu</button>
                        </div>


                        <div className=' w-full flex justify-center'>
                            <button type="submit" className={styles.submitButton}>Anfrage senden</button>
                            <button className={styles.closeButton} onClick={onClose}>schließen</button>

                        </div>
                    
                   

  

                 
                    </form>
                )}

                <div className={styles.errorContainer}>
                    {Object.keys(errors).length > 0 && (
                        <div className={styles.errorsDiv} >
                            {Object.values(errors).map((error, index) => (
                                <p key={index} className={styles.error}>- {error}</p>
                            ))}
                        </div>
                    )}

                    </div>
            </div>

           
        </div>
    );
};

export default CourseRequestModal;



  /*
    const validateEmailInLast14Days = () => {
        // Dummy-Daten für bereits gesendete Anfragen
        const sentRequests = [
            { email: 'user@example.com', date: new Date('2023-10-01') },
            // Weitere Anfragen...
        ];

        const userEmail = 'user@example.com'; // Hier solltest du die tatsächliche Benutzer-E-Mail verwenden
        const fourteenDaysAgo = new Date();
        fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

        return sentRequests.some(request => 
            request.email === userEmail && request.date >= fourteenDaysAgo
        );
    };*/



 {/*} <div className={styles.inputDiv}>
                            <label>Uhrzeit:</label>
                            <input 
                                className={styles.formInput} 
                                type="time" 
                                value={request.time} 
                                onChange={(e) => handleInputChange(index, 'date', e.target.value)} 
                                required 
                            />
                    
                        </div>*/}