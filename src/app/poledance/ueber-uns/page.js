


import styles from './AboutUs.module.css'

const AboutUs= () =>{


    return(
        <div>

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