"use client" 
import Image from "next/image"; 
/*import styles from './Start.module.css';*/
import Link from "next/link";
import { useTitle } from "../../context/TitleContext";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { supabase } from "../../services/supabaseClient";
import styles from './poledance/Poledance.module.css'
//COMPONENTS

import CoursePlan from "../../components/CoursePlan/CoursePlan";
import CourseDescription from "../../components/CourseDescription/CourseDescription";
import PrivateParties from "../../components/CoursePlan/PrivateParties";
import Retreat from "../../components/Events/Retreat";
import PriceTable from "../../components/CourseDescription/PriceTable";


//CUSTOM COMPONENTS
import useScrollToSection from "../../custom hooks/useScrollToSection";
import React, { useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import useFetchCourseData from "../../custom-hooks/useFetchCourseData";


export default function Home() {

  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: fetchedData, error } = await supabase
        .from('poleground_courses') // Ersetze 'deine_tabelle' durch den Namen deiner Tabelle
        .select('*');

      if (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      } else {
        setCourses(fetchedData);
      }
      setLoadingCourses(false);
    };

    fetchData();
  }, []);


  console.log(courses)

  const transformCourses = (courses) => {
    // Initialisiere das Ergebnisobjekt mit leeren Arrays für jede Gruppe
    const coursesObject = {
      DANCE: [],
      POLE: [],
      FLEXIBILITY: [],
      PLAYGROUND: [],
      SPECIALS: []
    };
  
    // Durchlaufe das Array der Kurse
    courses.forEach(course => {
      // Überprüfe die Gruppe des Kurses und füge ihn dem entsprechenden Array hinzu
      if (coursesObject[course.group]) {
        coursesObject[course.group].push(course);
      }
    });
  
    return coursesObject;
  };
  
  const coursesObject = transformCourses(courses);

  console.log(coursesObject)

  
  const {scrollToSection} = useScrollToSection();


  return (
    <div className={styles.container}>
    
      <button className={styles.chevronUp} onClick={()=> scrollToSection("top")}> 
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <div className={styles.headerContainer}>
       

        <div className={styles.buttonsContainer}>
   
            <div className={styles.buttonDiv} id="top">
              <button className={styles.button} onClick={() => scrollToSection('table')}> KURSPLAN </button>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button} onClick={() => scrollToSection('descriptions')}> KURSBESCHREIBUNGEN  </button>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button} onClick={() => scrollToSection('priceTable')}> PREISE </button>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button} onClick={() => scrollToSection('privateParties')}> PRIVATE PARTIES </button>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button} onClick={() => scrollToSection('workshops')}> EVENTS </button>
            </div>

          
         
        </div>

        <div className={styles.headerImageContainer}> 
          <Image 
            alt=" picture of polegrounds studio "
              src="/Start/poledance.jpg" 
              width={800} 
              height={800}
              className={styles.headerImage}
          />
        </div>
      

      </div>

      


      <div className={styles.subContainer} id="table">
        <div className={styles.subContainerDiv} id="courseplanHeader"> 
           {!loadingCourses &&  <CoursePlan courses={coursesObject}/> }

            {loadingCourses && <p> lädt Kursplan ...</p>}
        </div>
      </div>
      <div className={styles.subContainer} id="descriptions">
        <div className={styles.subContainerDiv}>
        <CourseDescription/>
        </div>

        <div className={styles.subContainerDiv}>
        <PriceTable />
         
        </div>
      </div>
      <div className={styles.subContainer} id="privateParties">
        <div className={styles.subContainerDiv}>
          <PrivateParties/>

        </div>
      </div>
      <div className={styles.subContainer} id="workshops">
        <div className={styles.subContainerDiv}> 
          <Retreat/>
        </div>
      </div>

      <div className='flex justify-center h-20'> 
            <button className={styles.socialButton}> 
              <Image alt="button to connect with us via instagram" src="/iconpng/icons8-instagram-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>

            <button className={styles.socialButton}> 
              <Image  alt="button to connect with us via tiktok" src="/iconpng/icons8-tick-tack-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>

            <button className={styles.socialButton}> 
              <Image   alt="button to connect with us via telephone" src="/iconpng/icons8-telefon-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>

            <button className={styles.socialButton}> 
              <Image  alt="button to connect with us via email" src="/iconpng/icons8-mail-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>
          </div>
    </div>
  );
}

