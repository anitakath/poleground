import Image from 'next/image'
import styles from './AboutUs.module.css'
import PolegroundInfo from '../../../../components/PolegroundInfo'

const AboutUs= () =>{


    return(
        <div className='flex flex-col items-center justify-center'>
            <PolegroundInfo/>

            <h1 className={styles.title} id="studio"> UNSER STUDIO </h1>

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

            {/*}
            <div className={styles.teamContainer}>
                TEAM
            </div>*/}
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}> 
                    <p className='absolute top-2 left-4 text-xl text-red-600'> Anne </p>
                    <Image src="/Start/damian-barczak-nISmT9XXL98-unsplash.jpg" width={600} height={600} alt="Anne"  className={styles.image}/>
                </div>
                <div className={styles.gridItem}>     
                <p className='absolute top-2 left-4 text-xl text-red-600'> Natalia </p>
                    <Image src="/Start/damian-barczak-SCoZX8yrLig-unsplash.jpg" width={600} height={600} alt="Natalia"  className={styles.image}/>
                </div>
                <div className={styles.gridItem}> 
                <p className='absolute top-2 left-4 text-xl text-red-600'> Marlin </p>
                    <Image src="/Start/pexels-steshkawillems-1390361.jpg" width={600} height={600}  className={styles.image}/>
                </div>
                <div className={styles.gridItem}> 

                    <p className='absolute top-2 left-4 text-xl text-red-600'> vielleicht ja bald du? 💜</p>
                    <Image src="/Start/pexels-mart-production-7319717.jpg"width={600} height={600}  className={styles.image}/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs