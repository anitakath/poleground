



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
                PREISE Für Neukund:innen:
                - Probetraining für Neukund:innen 10 Euro 
                - Starterpaket für Neukund:innen: 5er Karte für .... Euro (nach Kauf 2 Monate gültig)

                Pole & Arial Silk:
                - Einzelstunde: 25 Euro
                - 5er Karte: 100 Euro (nach Kauf 4 Monate gültig)
                - 10er Karte: 150 Euro (nach Kauf 6 Monate gültig)
                - Unlimited Monthly Pass: 150 Euro (besuche innerhalb eines Monats so viele Pole & Arial Silk Classes wie du möchtest und Platz im Kurs ist)

                Dance / Yoga / Flexibility / Workout:
                - Einzelstunde: 15 Euro
                - 5er Karte:  60 Euro (nach Kauf 4 Monate gültig)
                - 10er Karte: 100 Euro (nach Kauf 6 Monate gültig)
                - Unlimited Monthly Pass: 100 Euro (besuche innerhalb eines Monats so viele Dance, Yoga und Flexibility Kurse wie du möchtest und Platz im Kurs ist)

                Sonderkonditionen Kids & Teens (bis 15. Lj.):
                - Pole & Arial Probestunde: 5 Euro
                - Pole & Arial Starterpaket für Neukund:innen: 5er Karte für 30 Euro
                - Pole & Arial Einzelstunde: 15 Euro
                - Pole & Arial 5er / 10er Karte: 60 Euro / 120 Euro (nach Kauf 4 / 6 Monate gültig)

                - Dance / Yoga / Flexibility / Workout:
                - Einzelstunde: 12 Euro
                - 5er Karte: 50 Euro
                - 10er Karte: 80 Euro

                Sonderkonditionen Schüler:innen, Auszubildende und Student:innen:
                - 15% Rabatt auf die regulären Preise.
                - Anfrage / Nachweis per E-Mail

            </div>
        </div>
    );
}

export default CourseDescription;