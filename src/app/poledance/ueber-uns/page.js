


import styles from './AboutUs.module.css'
import PolegroundInfo from '../../../../components/PolegroundInfo'

const AboutUs= () =>{


    return(
        <div className='flex flex-col items-center justify-center'>
            <PolegroundInfo/>

            <h1 className={styles.title}> UNSER STUDIO </h1>

            <div className={styles.gridContainer}>
                <div className={styles.gridItem}> Eingangstür </div>
                <div className={styles.gridItem}> Empfang / Rezeption </div>
                <div className={styles.gridItem}> Studio 1 </div>
                <div className={styles.gridItem}> Studio 2 </div>
                <div className={styles.gridItem}> Studio 1 - andere Perspektive </div>
                <div className={styles.gridItem}> Studio 2 - andere Perspektive </div>
                <div className={styles.gridItem}> Equipment </div>
                <div className={styles.gridItem}> Shop - Pole-Kleidung </div>
                <div className={styles.gridItem}> Umkleidekabine </div>
                <div className={styles.gridItem}> Wartebereich </div>
                <div className={styles.gridItem}> Yogi Tea </div>
                <div className={styles.gridItem}> Snacks (Obstschale) </div>
                <div className={styles.gridItem}> sanitäre Anlagen </div>
                <div className={styles.gridItem}> Flur </div>

            </div>
           

            <h1 className={styles.title}> UNSER TEAM </h1>

            <div className={styles.teamContainer}>
                TEAM
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}> Anne </div>
                <div className={styles.gridItem}> Natalia</div>
                <div className={styles.gridItem}> Loona </div>
                <div className={styles.gridItem}> Marlin </div>

                <div className={styles.gridItem}> vielleicht ja bald du? </div>
            </div>
        </div>
    )
}

export default AboutUs