// ../Modals/CourseRequestModal.js
import React, { useState } from 'react';

import styles from './CourseRequest.module.css'


const CourseRequestModal = ({ isOpen, onClose }) => {
    const [courseType, setCourseType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Hier kannst du die Logik zum Senden der Anfrage hinzufügen
        console.log({ courseType, date, email, message });
        alert('Eine Benachrichtigung wird innerhalb der nächsten Woche an ' + email + ' gesendet.');
        onClose(); // Schließe das Modal nach dem Absenden
    };

    const validateForm = () => {
        const errors = {};
        const today = new Date();
        const minDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
        const maxDate = new Date(today.getFullYear(), today.getMonth() + 5, today.getDate());

        if (!courseType) {
            errors.courseType = "Bitte wähle einen Kurs aus.";
        }

        if (!date) {
            errors.date = "Bitte wähle ein Datum aus.";
        } else if (new Date(date) < minDate || new Date(date) > maxDate) {
            // Formatierung der Daten
            const formattedMinDate = minDate.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
            const formattedMaxDate = maxDate.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
    
            errors.date = `Das Datum muss zwischen dem ${formattedMinDate} und ${formattedMaxDate} liegen.`;
        }
        if (!time) {
            errors.time = "Bitte wähle eine Uhrzeit aus.";
        } else {
            // Überprüfen der Öffnungszeiten
            const selectedTime = new Date(`1970-01-01T${time}:00`);
            const openingTime = new Date(`1970-01-01T10:00:00`);
            const closingTime = new Date(`1970-01-01T21:00:00`);

            if (selectedTime < openingTime || selectedTime > closingTime) {
                errors.time = "Die Uhrzeit muss zwischen 10:00 und 21:00 liegen.";
            }
        }


        if (!email) {
            errors.email = "Bitte gib eine E-Mail-Adresse ein.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
        }
        /*if (message.length < 10 || message.length > 200) {
            errors.message = "Die Nachricht muss zwischen 10 und 200 Wörtern lang sein.";
        }*/ 

        return errors;
    };



    if (!isOpen) return null; // Wenn das Modal nicht geöffnet ist, nichts rendern

    console.log(errors)

    return (
        <div className={styles.container}>
            <div className={styles.modalContent}>
              
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputDiv}>
                        <label> Kursart:</label>
                        <select 
                            className={styles.formInput} 
                            value={courseType} 
                            onChange={(e) => setCourseType(e.target.value)} 
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
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                            required 
                        />
                       {/*} {errors.date && <p className={styles.error}>{errors.date}</p>}*/}
                    </div>

                    <div className={styles.inputDiv}>
                        <label>Uhrzeit:</label>
                        <input 
                            className={styles.formInput} 
                            type="time" 
                            value={time} 
                            onChange={(e) => setTime(e.target.value)} 
                            required 
                        />
                 
                    </div>

                    <div className={styles.inputDiv}>
                        <label>E-Mail:</label>
                        <input 
                            className={styles.formInput} 
                            type="email" 
                            value={email} 
                            placeholder="deineEmail@beispiel.de" 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                       {/*} {errors.email && <p className={styles.error}>{errors.email}</p>}*/}
                    </div>
                
                    <button type="submit" className={styles.submitButton}>Anfrage senden</button>
                    <button className={styles.closeButton} onClick={onClose}>schließen</button>


                 
                </form>

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