import PriceTable from './PriceTable';
import styles from './CourseDescription.module.css'

const CourseDescription = () =>{

    return (
        <div>
            <div className={styles.courseDescriptionDiv}>
                <button className={styles.button}>Pole Beginner</button>
                <button className={styles.button}>Pole Intermediate</button>
                <button className={styles.button}>Pole Advanced</button>
                <button className={styles.button}>Pole Conditioning</button>
                <button className={styles.button}>Floorwork</button>
                <button className={styles.button}>Twerk It Out</button>
                <button className={styles.button}>Lapdance</button>
                <button className={styles.button}>Yoga & Flexibility</button>
                <button className={styles.button}>Playground</button>
            </div>

            <div className={styles.pricesContainer}> 

            <PriceTable />

            </div>
        </div>
    );
}

export default CourseDescription;