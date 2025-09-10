// ../Modals/CourseRequestModal.js
import React, { useState } from 'react';

import styles from './CourseRequest.module.css'
import useValidateCourseRequests from '../../custom hooks/validations/useValidateCourseRequests';

import { supabase } from '../../services/supabaseClient';


const CourseRequestModal = ({ isOpen, onClose }) => {
  
    const [requests, setRequests] = useState([{ courseType: '', date: '', time: '', email: '' }])
    const [success,setSuccess] = useState({});
    const [isAgreed, setIsAgreed] = useState(false);
    const [inputError, setInputError] = useState(null)

    // Dummy-Daten für bereits gesendete Anfragen (hier solltest du deine Logik zur Überprüfung implementieren)
     const sentRequests = [
        { email: 'user@example.com', date: new Date('2023-10-01') },
        // Weitere Anfragen...
    ];

    const { errors, validateForm } = useValidateCourseRequests(requests);


    //VALIDATE AND SEND COURSE REQUEST TO MEEEEE

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            // Daten an Supabase senden
            const { data, error } = await supabase
                .from('poleground_wishes')
                .insert(requests.map(request => ({
                    wish_group: request.courseType,
                    wish_scheduled_at: request.date,
                    wish_time: request.time,
                    email: request.email
                })));

            if (error) {
                console.error('Fehler beim Speichern:', error.message);
                alert('Beim Absenden der Anfrage ist ein Fehler aufgetreten. Bitte versuche es später erneut.');
                return;
            }

            alert('Deine Kurswünsche wurden erfolgreich übermittelt!');
            setRequests([{ courseType: '', date: '', time: '', email: '' }]);
            onClose();
        } catch (err) {
            console.error('Fehler beim Absenden:', err);
            alert('Beim Absenden der Anfrage ist ein Fehler aufgetreten.');
        }
    };
    /*
    const handleSubmit = (e) => {
        e.preventDefault();

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
    };*/

  
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
 


    if (!isOpen) return null; 

    const courseOptions = [
        "Arial Silk",


        "Flexi Backbends",
        "Full Body Stretch",
        "Flexi Splits",

        "Hammock",
        "Hoop",

        "Heels Essentials",
        "Heels Exotic",
        "Heels Sensual",

        "Pole 0-1",
        "Pole 1-2",
        "Pole 3",
        "Pole Choreo 1-2",
        "Pole Choreo 2-3",
        "Pole Conditioning",
       
        "Sexy Floorwork",
        "Sensual Floorwork",
       
        
        
      ];
      


    return (
        <div className={styles.container}>
            <div className={styles.modalContent}>
              
            <div className='my-2 w-11/12'>
                <h2 style={{color: "var(--title)"}}><strong>Wichtige Informationen: Bitte lesen und am Ende das Kästchen anklicken, um deine Wünsche eingeben zu können.</strong></h2>

                <ul>
                    <li>- Wir nehmen lediglich Wünsche <strong>von bereits bestehenden Kunden</strong> entgegen, die unsere Kurse regelmäßig und länger als 3 Monate besuchen. </li>
                    <li>- Pro Kunde sind <strong>maximal 5 Wünsche</strong> möglich. Diese können <strong>mindestens einen und maximal 4 Monate</strong> im Voraus angegeben werden.</li>
                    <li>- Nach dem erfolgreichen Absenden deiner Wünsche solltest du eine automatisch generierte <strong>Bestätigungs-E-Mail</strong> erhalten, die den Eingang deiner Anfrage bestätigt.</li>
                    <li>- Es kann vorkommen, dass nicht jeder Wunsch erfüllt werden kann.</li>
                    <li>- <strong>Die Bearbeitung deiner Wünsche kann einige Zeit in Anspruch nehmen.</strong> Wir bemühen uns jedoch, dir so schnell wie möglich (in der Regel innerhalb von 14 Werktagen) zu antworten.</li>
                    <li><strong>Deine Daten</strong> werden vertraulich behandelt und <strong>nicht an Dritte</strong> weitergegeben.</li>
                    <li> Falls du deine <strong>Wünsche</strong> nach dem Absenden <strong>ändern</strong> oder <strong>stornieren</strong> möchtest, kannst du dies über dein Profil tun.</li>
                </ul>
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
                            <div key={index} className={styles.inputContainer}>
                                <div className={styles.inputDiv}>
                                    <label>Kursart:</label>
                                    <select 
                                        className={`${styles.formInput} ${errors[`date${index}`] ? styles.inputError : ""} `}
                                        value={request.courseType} 
                                        onChange={(e) => handleInputChange(index, 'courseType', e.target.value)} 
                                        required
                                    >
                                        <option value="" disabled>Bitte wählen...</option>
                                        {courseOptions.map((course) => (
                                            <option key={course} value={course}>{course}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className={styles.inputDiv}>
                                    <label>Datum:</label>
                                    <input 
                                        className={`${styles.formInput} ${errors[`date${index}`] ? styles.inputError : ""} `}
                                        type="date" 
                                        value={request.date} 
                                        onChange={(e) => handleInputChange(index, 'date', e.target.value)} 
                                        required 
                                    />
                               
                                </div>
                                <div className={styles.inputDiv}>
                                    <label>Uhrzeit:</label>
                                    <input 
                                       className={`${styles.formInput} ${errors[`date${index}`] ? styles.inputError : ""} `} 
                                        type="time" 
                                        value={request.time} 
                                        onChange={(e) => handleInputChange(index, 'time', e.target.value)} 
                                        required 
                                    />
                                </div>

                                <div className={styles.inputDiv}>
                                    <label>E-Mail:</label>
                                    <input 
                                        className={`${styles.formInput} ${errors[`date${index}`] ? styles.inputError : ""} `}
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
                    <div className={styles.errorsDiv}>
                    {Array.from(new Set(Object.values(errors))).map((error, index) => (
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

