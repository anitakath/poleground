import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import styles from './Filtercourses.module.css'
import { useState } from 'react'


const FilterCourses = ({selectedWeek, handleChange, handleFilterChange, selectedInstructor, selectedSport, weeklyGroups}) =>{


  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  }



    return(
        <div className={styles.container} id="filterCoursesComponent">
            <select 
            value={selectedWeek} 
            onChange={handleChange}
            id="select_week"
            name="select_week"
            required
            className={styles.select}
          >
            <option value="">Wähle eine Woche</option>
            {weeklyGroups.map((week, index) => {
              const weekStart = week.weekStart

              return(
              <option 
                key={index} 
                value={weekStart} 
              >
                {formatDate(week.weekStart)}
              </option>
            )})}
          </select>
          <select 
            value={selectedInstructor} 
            onChange={handleFilterChange}
            id="select_trainer"
            name="select_trainer"
            required
            className={styles.select}
          >
            <option value=""> Alle Instruktoren ausgewählt</option>
            <option key="Anne" value="Anne">Anne</option>
            <option key="Diana" value="Diana">Diana</option>
            <option key="Isabel" value="Isabel">Isabel</option>
            <option key="Max" value="Max">Max</option>
            <option key="Natalia" value="Natalia">Natalia</option>
            <option key="Stella" value="Stella">Stella</option>
           
       
          </select>

          <select 
            value={selectedSport} 
            onChange={handleFilterChange}
            id="select_sport"
            name="select_sport"
            required
            className={styles.select}
          >
            <option value="">Alle Sportarten ausgewählt</option>
            <option key="POLE" value="POLE">Pole </option>
            {/*<option key="HOOP" value="HOOP">Hoop</option>*/}
            <option key="ARIALSILK" value="ARIALSILK">Arial Silk</option>
            <option key="DANCE" value="DANCE">Dance</option>
            <option key="FLEXIBILITY" value="FLEXIBILITY">Flexibility</option>
            <option key="SPECIALS" value="SPECIALS">Specials</option>
            <option key="PLAYGROUND" value="PLAYGROUND">Playground</option>
            <option key="KIDS" value="KIDS">Kids</option>
       
          </select>

        </div>
    )
}

export default FilterCourses