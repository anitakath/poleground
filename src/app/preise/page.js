"use client"

import styles from '../CoursePlanPage.module.css'
import PriceTable from '../../../components/CourseDescription/PriceTable'
const Prices = () =>{


    return(
        <div className={styles.container}>
           <PriceTable/>

        </div>
    )
}

export default Prices