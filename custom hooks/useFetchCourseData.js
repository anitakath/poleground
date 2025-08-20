
import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

const useFetchCourseData = () =>{

    const [courses, setCourses] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(true);
    const [coursesObject, setCoursesObject] = useState({
      DANCE: [],
      POLE: [],
      FLEXIBILITY: [],
      PLAYGROUND: [],
      SPECIALS: []
    });
  
    useEffect(() => {
      const fetchData = async () => {
        const { data: fetchedData, error } = await supabase
          .from('poleground_courses') // Tabelle anpassen
          .select('*');
  
        if (error) {

          console.log(error)
          console.error('Fehler beim Abrufen der Daten:', error);
        } else {

          console.log(fetchData)
          setCourses(fetchedData);
          // Transformiere die Kurse nach Gruppen
          setCoursesObject(transformCourses(fetchedData));
        }
        setLoadingCourses(false);
      };
  
      fetchData();
    }, []);

    // Funktion zum Transformieren der Kurse in Gruppen
  const transformCourses = (courses) => {
    const coursesObj = {
      DANCE: [],
      POLE: [],
      FLEXIBILITY: [],
      PLAYGROUND: [],
      SPECIALS: []
    };

    courses.forEach((course) => {
      if (coursesObj[course.group]) {
        coursesObj[course.group].push(course);
      }
    });

    return coursesObj;
  };
  

  return { courses, loadingCourses, coursesObject };

}

export default useFetchCourseData