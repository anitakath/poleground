
import React from 'react';
import { useState } from 'react';
import styles from './AddCourseModal.module.css'
const AddCourseModal = ({ onClose }) => {

  const [formData, setFormData] = useState([{
    group: "",
    title: "",
    description: "",
    scheduled_at: "",
    duration: null,
    instructor: "",
    level: "",
    room: "",
    spots: "",
    id: ""
  }])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik zum Hinzufügen des Kurses via API oder State
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = () =>{

    console.log('submit formData-array after creating an unique id + spots 15/15 @ dance & flexi, spots 8/8 @silk, spots  10/10 @else')
  }


  console.log(formData)
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Kurs hinzufügen</h2>


        <form onSubmit={handleSubmit} className={styles.form}>
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
            <option value="Anne">Anne</option>
            <option value="Natalia">Natalia</option>
            <option value="Malak">Malak</option>
            <option value="Stella">Stella</option>
            <option value="keiner"> Keiner </option>
          </select>
        </div>

        <div className={styles.selectContainer}>
        <label htmlFor="studio">Studio:</label><br />
        <select
          id="instructor"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          required
   
        >
          <option value="Anne">Studio 1</option>
          <option value="Natalia">Studio 2</option>

     
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
            <option value="POLE">POLE</option>
            <option value="DANCE">DANCE</option>
            <option value="FLEXIBILITY">FLEXIBILITY </option>
            <option value="SILK">SILK</option>
            <option value="SPECIAL">SPECIAL</option>
            <option value="KIDS">KIDS</option>
          </select>
          </div>
      </div>
    



{/* DATEN!!!!!! */}

      <div className={styles.schedulesContainer}>

        <div className='flex'>
          <div className={styles.selectContainer}>    
          <label htmlFor="date">Datum:</label><br />
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
              
          />
          </div>
          <div className={styles.selectContainer}>
            <label htmlFor="time">Uhrzeit:</label><br />
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
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
        

 

          <button type="submit" className={styles.addButton} onClick={() => submitHandler()}>Hinzufügen</button>
          <button type="button" onClick={onClose} className={styles.cancelButton}>Abbrechen</button>

        </form>



      </div>

  
    </div>
  );
};

export default AddCourseModal;