import { useState } from 'react'
import styles from './PrivateParties.module.css'

const PrivateParties = () =>{


    const [showInfo, setShowInfo] = useState({parties: false, training: false})

    const showInfoHandler = (about) =>{

        if (about === "parties") {
            setShowInfo(prevState => ({ ...prevState, parties: !prevState.parties, training: false }));
          } else if (about === "training") {
            setShowInfo(prevState => ({ ...prevState, training: !prevState.training, parties: false }));
          }
    }


    let infoBtnText;

    

    return(
        <div>
            <div className="w-full"> 
                <div className={styles.headerContainer}>
                    <div className={styles.titleContainer}> 
                        <h1 className={styles.title}> PRIVATE PARTIES & PERSONAL TRAINING </h1>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p className={`m-2  flex items-center text-justify ${styles.paragraph}`}>Interessierst du dich für ein intensives Einzel-Coaching, um an ganz persönlichen Themen zu arbeiten? Oder seid ihr eine kleine Gruppe, die gemeinsam in einer geschlossenen Einheit trainieren möchte? Auch private Feiern wie Geburtstage oder Junggesell*innenabschiede können bei uns gebucht werden! Kontaktiert uns einfach per Telefon oder E-Mail – wir erstellen euch gerne ein individuelles Angebot.</p>
                        <div className='flex my-2 justify-evenly '>
                            <p className={styles.contactLink}> +01234567890</p>
                            <p className={styles.contactLink}> info@poleground.de</p>
                        </div>
                       
                    </div>
                   
                </div>
                
                <div className={styles.privateInfoContainer}>
                    <div className={`w-full flex-col overflow-scroll  m-2 ${styles.privateInfo}`}> 
                        <h1 className={styles.title}> PARTIES </h1>
                        <p className={styles.infoParagraph}> AB 200 Euro </p>
                        <button className={styles.button} onClick={() => showInfoHandler('parties')}>  {showInfo.parties ? 'WENIGER' : 'MEHR ...'} </button>
                        {showInfo.parties && (
                            <p className={styles.infoParagraph}>
                                Unsere Pole Party ist genau das Richtige, wenn du nach einem besonderen und sportlichen Event für dich, deinen Freund:innen, oder auch Arbeitskolleg:innen suchst. 
                                Nach einem Sektempfang lernt ihr in 90 Minuten einige grundlegende Techniken an der Stange, welche wir gern in eine kleine sinnliche Choreo zusammenfügen. 
                                Neben Poledance bieten wir auch Flexibility/Yoga und Aerial Silk an. 
                                <br/> 
                                <br/>
                                <strong>Die maximale Teilnehmeranzahl für Poledance beträgt 14, Arial Silk 10, Yoga, Dance und Flexibility 20.</strong><br/><br/>
                                Individuelle Wünsche können gerne besprochen werden! Schreibt uns einfach eine <strong>E-Mail</strong> , oder ruft uns an!<strong> +01234567890 </strong></p> 
                        )}
                    </div>
                    <div className={`w-full flex-col h-96 overflow-scroll m-2 ${styles.privateInfo}`}> 
                        <h1 className={styles.title}>PERSONAL / GROUP TRAINING </h1>
                        <p className={styles.infoParagraph}> ab 60 Euro/Stunde </p>
                        <button className={styles.button} onClick={() => showInfoHandler('training')}> {showInfo.training ? 'WENIGER' : 'MEHR ...'} </button>
                        {showInfo.training && (
                            <p className={styles.infoParagraph}>
                                Möchtest du allein, oder in geschlossener Gesellschaft an einer bestimmten Technik arbeiten und/oder eine eigene Choreo einstudieren? Dich/euch auf einen Wettkampf vorbereiten, oder einfach außerhalb der regulären Trainingszeiten in deinem/eurem Tempo trainieren?
                                <br/>
                                <br/>
                                <strong>Die maximale Teilnehmeranzahl für Poledance beträgt 6, Arial Silk 6, Yoga, Dance und Flexibility 10.</strong><br/><br/>
                                Schreibe uns gern per <strong>E-Mail</strong> deine Ideen und Wünsche und wir arbeiten ein individuelles Trainingsprogramm für dich aus.
                            </p> 
                        )}
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default PrivateParties