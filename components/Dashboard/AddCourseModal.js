
import React from 'react';
import { useState } from 'react';
import styles from './AddCourseModal.module.css'
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../services/supabaseClient';


const AddCourseModal = ({ onClose }) => {

  const [submitting, setSubmitting] = useState(false)
  const [messages, setMessages] = useState({error: null, success: null})
  const [formData, setFormData] = useState({
    group: "",
    title: "",
    description: "",
    scheduled_at: "",
    duration: null,
    instructor: "",
    level: "",
    room: "",
    spots: "",
    //available_spots: 15,
    //token_spots: 3,
    isCancelled: false,
    uuid: ""
  })


  /*

  //later assign spots!
  const assignUUIDsToCourses = () => {
    const updatedCourses = courseData.map(course => ({
      ...course,
      uuid: uuidv4(), // Neue UUID generieren
    }));
    setCourseData(updatedCourses);
  };*/
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik zum Hinzufügen des Kurses via API oder State
    onClose();
  };*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const validateForm = () => {
    const errors = {};
  
    if (!formData.group || formData.group.trim() === "" || formData.group === "noValue") {
      errors.group = "Bitte wählen Sie eine Gruppe aus.";
    }
  
    if (!formData.title || formData.title.trim() === "") {
      errors.title = "Der Titel ist erforderlich.";
    }
  
    if (!formData.description || formData.description.trim() === "") {
      errors.description = "Die Beschreibung ist erforderlich.";
    }
  
    if (!formData.scheduled_at || formData.scheduled_at.trim() === "") {
      errors.scheduled_at = "Das Datum und die Uhrzeit sind erforderlich.";
    } else {
      // Optional: Überprüfen, ob das Datum im richtigen Format ist
      // z.B. mit einem Regex oder Date-Parsing
    }
  
    if (!formData.duration || isNaN(formData.duration) || formData.duration <= 0 || formData.duration === "noValue") {
      errors.duration = "Bitte geben Sie eine gültige Dauer in Minuten ein.";
    }
  
    if (!formData.instructor || formData.instructor.trim() === "" || formData.instructor === "noValue") {
      errors.instructor = "Der Instruktor ist erforderlich.";
    }
  
    if (!formData.level || formData.level.trim() === "" || formData.level === "noValue") {
      errors.level = "Bitte wählen Sie ein Level aus.";
    }
  
    if (!formData.room || formData.room.trim() === "" || formData.room === "noValue") {
      errors.room = "Der Raum ist erforderlich.";
    }
  
    // Weitere Validierungen nach Bedarf...
  
    return errors;
  };



  const submitHandler = async (e) => {
      e.preventDefault();
      setSubmitting(true);


      //VALIDIERUNG!
      const validationErrors = validateForm();

      if (Object.keys(validationErrors).length > 0) {

        setMessages({ error: "Bitte korrigiere deine Eingaben im Formular. Jedes Feld muss ausgeüllt werden.", success: null });

        // Optional: Fehler pro Feld speichern, um sie direkt an den Eingabefeldern anzuzeigen
        // setFieldErrors(validationErrors);

        setSubmitting(false);
        return; // Abbruch, wenn Fehler vorhanden sind
      }

      setSubmitting(true);


      // Da formData nur ein Objekt ist, in ein Array packen
      const dataToInsert = (() => {
        // Neue UUID generieren
        const newUuid = uuidv4();
    
        // Spots basierend auf group setzen
        let spotsValue = "10/10"; // Standardwert
        if (formData.group === "DANCE" || formData.group === "FLEXIBILITY") {
          spotsValue = "15/15";
        } else if (formData.group === "SILK" || formData.group === "KIDS") {
          spotsValue = "8/8";
        }
    
        return {
          ...formData,
          uuid: newUuid,
          spots: spotsValue,
          scheduled_at: formData.scheduled_at + ":00"
        };
      })();
    
      console.log('Daten zum Hochladen:', dataToInsert);
    
      // Daten in die Supabase Tabelle hochladen
      
      try {
        const { data, error } = await supabase
          .from('poleground_courses')
          .insert([dataToInsert]); // In eine Array packen
    
        if (error) {
          console.error('Fehler beim Hochladen:', error);
          setMessages({ error: 'Beim Hochladen ist ein Fehler aufgetreten.', success: null });
          setSubmitting(false)
        } else {
          console.log('Erfolgreich hochgeladen:', data);
          setMessages({ error: null, success: 'Der Kurs wurde erfolgreich gespeichert!' });
          setSubmitting(false)
    
          // Optional: Daten neu laden, um UI zu aktualisieren
          //fetchCourseData();
        }
      } catch (err) {
        console.error('Unbekannter Fehler beim Hochladen:', err);
        setMessages({ error: 'Ein unbekannter Fehler ist aufgetreten.', success: null });
        setSubmitting(false)
      }
    };



  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
      <button onClick={() => onClose()} className='absolute right-10 cursor-pointer'> schließen </button>
        <h2 className='mb-2'>Kurs hinzufügen</h2>


        <form className={styles.form} onSubmit={submitHandler}>
          {/* Formularfelder */}

         


        <div>
          {/*<label htmlFor="title">Titel:</label><br />*/}
          <input
            type="text"
            id="title"
            name="title"
            placeholder='Titel'
            value={formData.title}
            onChange={handleChange}
            className={styles.titleInput}
            required
     
          />
        </div>
       
        <div>
          {/*<label htmlFor="description">Beschreibung:</label><br />*/}
          <textarea
            id="description"
            name="description"
            value={formData.description}
            placeholder='Beschreibung'
            className={styles.descriptionInput}
            onChange={handleChange}
            rows={4}
            required

         />
        </div>

        <div  className={styles.subcontainer}>

        <div className={styles.selectContainer}>
          <label htmlFor="level">Level:</label><br />
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
    
          >
            <option value="noValue">  </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <div className={styles.selectContainer}>
          <label htmlFor="instructor">Instructor:</label><br />
          <select
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
          >
            <option value="noValue">  </option>
            <option value="Anne">Anne</option>
            <option value="Natalia">Natalia</option>
            <option value="Malak">Malak</option>
            <option value="Stella">Stella</option>
            <option value="keiner"> Keiner </option>
          </select>
        </div>

        <div className={styles.selectContainer}>
        <label htmlFor="room">Studio:</label><br />
        <select
          id="room"
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
        >
          <option value="noValue">  </option>
          <option value="studio 1">Studio 1</option>
          <option value="studio 2">Studio 2</option>

     
        </select>
      </div>

    

      <div className={styles.selectContainer}>
          <label htmlFor="studio">Gruppe:</label><br />
          <select
           id="group"
           name="group"
           value={formData.group}
           onChange={handleChange}
           required
           >
            <option value="noValue">  </option>
            <option value="POLE">POLE</option>
            <option value="DANCE">DANCE</option>
            <option value="FLEXIBILITY">FLEXIBILITY </option>
            <option value="ARIALSILK">SILK</option>
            <option value="SPECIALS">SPECIAL</option>
            <option value="KIDS">KIDS</option>
          </select>
          </div>
      </div>
    



{/* DATEN!!!!!! */}

      <div className={styles.schedulesContainer}>

        <div className='flex'>
          <div className={styles.selectContainer}>    
          <label htmlFor="scheduled_at">Datum:</label><br />
          <input
        
            type="datetime-local"
            id="scheduled_at"
            name="scheduled_at"
            value={formData.scheduled_at}
            onChange={handleChange}
            required
              
          />
          </div>
         

            <div className={styles.selectContainer}>
              <label htmlFor="duration">Dauer:</label><br />
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
        
              >
                <option value="noValue"></option>
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="120">120</option>
                <option value="180">180</option>
                <option value="180">240</option>

          
              </select>
            </div>
          </div>
        
          <button className={styles.addButton}> füge weitere Daten hinzu </button>

          

        </div>


        <div className={styles.buttonsContainer}>
          <button type="submit" className={styles.addButton} >Hinzufügen</button>
          <button type="button" onClick={onClose} className={styles.cancelButton}>Abbrechen</button>
        </div>

         
        </form>

        {messages.error && <div className={styles.error_message}>{messages.error}</div>}
        {messages.success && <div className={styles.success_message}>{messages.success}</div>}



      </div>

  
    </div>
  );
};

export default AddCourseModal;