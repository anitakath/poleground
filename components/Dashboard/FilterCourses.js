import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import styles from './Filtercourses.module.css'
import { useState } from 'react'


const FilterCourses = ({coursesObject,setCoursesObject, setCourseData,  courseData,  }) =>{

    const [isFilterActive, setIsFilterActive] = useState(false)
    const [selectedTrainer, setSelectedTrainer] = useState("ALL")
    const [selectedSport, setSelectedSport] = useState("ALL")
  
    

    /*
    console.log(courseData)
    console.log(coursesObject)

    console.log(setCoursesObject)
    console.log(setCourseData)*/


    const trainerFilterHandler = (who) =>{
      setSelectedTrainer(who)
    }


    const filterCourses = () =>{

        if(selectedTrainer != "ALL"){
            // filtere die Kurse nach selectedTrainer === courseData.instructor
            // und zeige dann dementsprechend nur diese Kurse an
        } 

        if(selectedSport != "ALL"){
            // filtere die Kurse nach selectedSport === courseData.group
            // und zeige dann dementsprechend nur diese Kurse an
        }



    }

    //console.log(selectedTrainer)
    //console.log(selectedSport)


    return(
        <div className={styles.container}>
           <button 
           className={styles.filterButton}
            onClick={() => setIsFilterActive(!isFilterActive)}
            > 
            Kurse filtern
            <FontAwesomeIcon icon={faFilter} className={styles.icon} />
           </button>

           {isFilterActive &&  (
            <div className={styles.filter_modal}>
                <div className='w-full  mb-6 relative flex jusitfy-end px-2'>
                    <button 
                        onClick={() => setIsFilterActive(!isFilterActive)}
                        className={styles.closeButton}
                    
                    > schließen </button>
                </div>

                <div className={styles.filterButton_container}>
                    <p> Filter nach Trainer:innen:</p>
                    <ul>
                        <li> <button onClick={() => trainerFilterHandler("Anne")}>Anne </button> </li>
                        <li> <button onClick={() => trainerFilterHandler("Malak")}>Malak </button> </li>
                        <li> <button onClick={() => trainerFilterHandler("Natalia")}>Natalia </button> </li>
                        <li> <button onClick={() => trainerFilterHandler("Stella")}>Stella </button> </li>

                    </ul>
                </div>
                <div className={styles.filterButton_container}>
                    <p> Filter nach Sportarten: </p>
                    <ul>
                    <li> <button onClick={() => setSelectedSport("POLE")}> Pole </button> </li>
                    <li> <button onClick={() => setSelectedSport("ARIALSILK")}> Arial Silk </button> </li>
                    <li> <button onClick={() => setSelectedSport("HOOP")}> Hoop </button> </li>
                    <li> <button onClick={() => setSelectedSport("DANCE")}> Dance </button> </li>
                    <li> <button onClick={() => setSelectedSport("FLEXIBILITY")}> Yoga & Stretching </button> </li>
                    <li> <button onClick={() => setSelectedSport("SPECIALS")}> Specials  </button> </li>
                    <li> <button onClick={() => setSelectedSport("PLAYGROUND")}> Playground </button> </li>
                    <li> <button onClick={() => setSelectedSport("KIDS")}> Kids & Teens </button> </li>
                    </ul>
                </div>
                <div>
                </div>
                <div className='w-full flex justify-center'>

                    <button className={styles.submit_button}> Filter anwenden </button>
                </div>
            </div>
           )}

        </div>
    )
}

export default FilterCourses