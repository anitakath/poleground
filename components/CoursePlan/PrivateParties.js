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
            <div className={styles.container}> 
                <div className={styles.headerContainer}>
                    <div className={styles.titleContainer}> 
                        <h1 className={styles.title}> PRIVATE PARTIES & PERSONAL TRAINING </h1>
                    </div>
                    
                    <div className={styles.descriptionContainer}>
                        <p className='my-2'>
                            Ob <strong>Einzel-, oder Gruppentraining</strong>, um an ganz individuellen Themen zu arbeiten,  
                             <strong> private Feiern</strong>, wie <strong>Geburtstage</strong>, oder <strong> Junggesell*innenabschiede </strong> abzuhalten
                            - wir sind für euch da!
                            Kontaktiert uns am Besten per WhatsApp oder E-Mail - wir erstellen euch gern ein individuelles Angebot, sobald wir eure Ideen und Wünsche besprochen haben.
                        </p>
                    </div>
                </div>
                
                <div className={styles.privateInfoContainer}>
                    <div className={`w-full flex-col overflow-scroll m-2 ${styles.privateInfo} ${showInfo.parties ? styles.privateInfo_active : ""}`}> 
                        <h1 className={styles.itemTitle}> PARTIES </h1>
                        <p className={styles.infoParagraph}> AB 150 Euro für 2 Stunden </p>
                        <button className={styles.button} onClick={() => showInfoHandler('parties')}>  {showInfo.parties ? 'WENIGER' : 'MEHR ...'} </button>
                        {showInfo.parties && (
                            <p className={styles.infoParagraph}>
                                Unsere Pole Party ist genau das Richtige, wenn du nach einem besonderen und sportlichen Event für dich, deinen Freund:innen, oder auch Arbeitskolleg:innen suchst. 
                                Nach einem Sektempfang lernt ihr in 90 Minuten einige grundlegende Techniken an der Stange, 
                                welche wir gern in eine kleine sinnliche, verführerische, oder einfach nur lustige Choreo zusammenfügen. 
                                Natürlich bleibt dann auch noch Zeit fürs Fotografieren und Filmen - ob privat, oder mit einem Aufpreis durch das Studio organisiert.
                                Neben Poledance bieten wir auch Floorwork (Dance) und Yoga an.
                                <br/> 
                                <br/>
                                <strong>Die maximale Teilnehmeranzahl für Poledance beträgt 10 und für Floorwork und Yoga 15.</strong><br/><br/>
                                Individuelle Wünsche können gerne besprochen werden! Schreibt uns am Besten eine <a href="mailto:wagner.annekathirn@gmx.de" className={styles.email}>E-Mail </a> , WhatsApp <strong> +01234567890 </strong>. Wir melden uns dann bei dir/euch zurück, um ein geeignetes Programm für euch zu entwickeln. </p> 
                        )}
                    </div>
                    <div className={`w-full flex-col h-96 overflow-scroll m-2 ${styles.privateInfo} ${showInfo.training ? styles.privateInfo_active : ""}`}> 
                        <h1 className={styles.itemTitle}>PERSONAL / GROUP TRAINING </h1>
                        <p className={styles.infoParagraph}> ab 60 Euro/Stunde </p>
                        <button className={styles.button} onClick={() => showInfoHandler('training')}> {showInfo.training ? 'WENIGER' : 'MEHR ...'} </button>
                        {showInfo.training && (
                            <div>
                                <p className={styles.infoParagraph}>
                                    Möchtest du allein, oder in geschlossener Gesellschaft an einer bestimmten Technik arbeiten und/oder eine eigene Choreo einstudieren? Dich/euch auf einen Wettkampf vorbereiten, oder einfach außerhalb der regulären Trainingszeiten in deinem/eurem Tempo trainieren?
                                    <br/>
                                    <br/>
                                    <strong>Die maximale Teilnehmeranzahl für Poledance beträgt 10, Arial Silk 5, Arial Hoop 5, Dance, Flexi, Yoga uÄ 15.</strong><br/><br/>
                                    Schreib(t) uns am Besten per  <a href="mailto:wagner.annekathirn@gmx.de" className={styles.email}>E-Mail </a>, oder WhatsApp <strong>+0234567890</strong>. Wir melden uns dann bei dir/euch zurück, um ein geeignetes Programm für dich/euch zu entwickeln.
                          
                        
                                </p> 

                                {/*}   
                                <p className={styles.infoParagraph}> *** FORM MIT KALENDER + UHRZEIT,  TEILNEHMERANZAHL, KONATKDATEN (NAME, EMAIL, TELEFONNUMMER), TRAINERWUNSCH, SCHONMAL IM STUDIO GEWESEN? UND  TEXTAREA einfügen ****  </p>
                                <p> *** Kunde soll sich hier einen Slot für sich / die Gruppe auswählen und anfragen können. Bestätigung erfolgt erst nach Anfrage ***</p>
                                */}


                            </div>

                        )}

                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default PrivateParties