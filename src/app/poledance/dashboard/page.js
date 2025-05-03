"use client"
import DashboardComponent from "../../../../components/Dashboard/Dashboard"
import { AuthContext } from "../../../../context/authContext";
import styles from './Dashboard.module.css'
import React, { useContext, useState, useEffect } from 'react';
import Link from "next/link";
import { supabase } from "../../../../services/supabaseClient";
//import { useDispatch, useSelector } from "react-redux";
//import { setCourses } from "../../../../store/coursesReducer";
import useCourseData from "../../../../custom hooks/useCourseData";
const Dashboard=  () =>{

    const { isLoggedIn, login, logout } = useContext(AuthContext);
    //const dispatch = useDispatch()

    const handleLogout = () => {
        logout();
    };

    const { coursess } = useCourseData();


    //const reduxCourses = useSelector((state) => state.courses.courses)

    //console.log(reduxCourses)

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
          //dispatch(setCourses(fetchData))
          setCourses(fetchedData);
        }
        setLoadingCourses(false);
      };
  
      fetchData();
    }, []);
  
  
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



    return(
        <div className={styles.container}>



        {!isLoggedIn ? (
        <div>
            <DashboardComponent coursesObject={coursesObject} />
          <button onClick={handleLogout}>Ausloggen</button>
        </div>
      ) : (
        <div className='w-full'>
            <Link href="/poledance/login"> zum Login </Link>
  
        </div>
      )}
   
        </div>
    )

    return(
        <div>
        Dashboard
        <DashboardComponent/>
        </div>
    )
}

export default Dashboard