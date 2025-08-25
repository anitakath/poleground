import React, { useState } from 'react';
import PriceTable from './PriceTable';
import styles from './CourseDescription.module.css';
import CourseInfoModal from '../Modals/CourseInfoModal';
import Image from 'next/image';
import Link from 'next/link';
import useScrollToSection from '../../custom hooks/useScrollToSection';

const CourseDescription = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courseInfo, setCourseInfo] = useState(null);
    const {scrollToSection} = useScrollToSection();

    function slugify(title) {
        return title
          .toLowerCase() // In Kleinbuchstaben umwandeln
          .replace(/\s+/g, '-') // Leerzeichen durch Bindestriche ersetzen
          .replace(/[^\w\-]+/g, '') // Alle nicht-alphanumerischen Zeichen entfernen
          .replace(/\-\-+/g, '-') // Doppelte Bindestriche entfernen
          .trim(); // Überflüssige Bindestriche am Anfang und Ende entfernen
      }

    const courses = [

        //POLEDANCE TECHNIK & CHOREO 
        {
            title: "Poledance Beginner - Advanced, Technik & Choreo",
            group: "POLE",
            path: "poledance-beginner",
            subTitle: "Pole 0-1 &  Pole 1-2 & Pole 3 & Pole 4 & Pole 5",
            descriptionTable: {
                "Pole 0-1: Beginner": {
                    description: "In diesem Kurs sind keinerlei Vorkenntnisse erforderlich! Du lernst die Grundlagen des Poledance, einschließlich einfacher Spins und Tricks. Unsere erfahrenen Trainer zeigen dir Schritt für Schritt, wie du sicher mit der Pole umgehst und deine Kraft sowie Flexibilität aufbaust. Der Kurs bietet eine freundliche und unterstützende Atmosphäre, in der du dich wohlfühlen und deinen eigenen Stil entwickeln kannst. Mach den ersten Schritt in die aufregende Welt des Poledance!",
                    info: ""
                },
                "Pole 1-2: Early intermediate": {
                    description: "",
                    info: ""
                },
                "Pole 3: Intermediate": {
                    description: "In diesem Kurs vertiefen wir die Grundlagen des Poledance und kombinieren verschiedene Spins, Tricks und Figuren. Du wirst auch deine ersten Inverts erlernen! Dieser Kurs bietet die ideale Vorbereitung für den Übergang zum Intermediate-Kurs.",
                    info: ""
                },
                "Pole 4: Advanced": {
                    description: "Dieser Kurs richtet sich an Teilnehmer mit grundlegenden Poledance-Kenntnissen und sicheren Inverts. Du wirst deine Technik verfeinern und komplexere Spins sowie Übergänge erlernen. Der Fokus liegt auf der Verbesserung deiner Kraft und Flexibilität, während du neue Tricks in einer motivierenden Umgebung ausprobierst.",
                    info: ""
                },
                "Pole 5: Expert": {
                    description: "Im Advanced-Kurs wirst du herausfordernde Tricks und Kombinationen erlernen, die sowohl Kraft als auch Geschicklichkeit erfordern. Dieser Kurs ist ideal für erfahrene Tänzerinnen, die ihre Fähigkeiten weiterentwickeln und Technik verbessern möchten.",
                    info: ""
                },
                "Pole Choreo 1-2":{
                    description: "In diesem Kurs kombinieren wir die Grundlagen des Poledance mit kreativen Choreografien zu ausgewählter Musik. Du wirst lernen, wie du einfache Spins, Tricks und Figuren in fließende Bewegungsabläufe integrierst. Der Fokus liegt darauf, deinen persönlichen Ausdruck zu entwickeln und deine Musikalität zu verbessern. Dieser Kurs ist ideal für alle, die ihre Technik vertiefen und gleichzeitig Spaß an der Choreografie haben möchten. **Voraussetzung:** Du solltest mit den Inhalten aus dem Beginner-Kurs vertraut sein und sicher einfache Spins beherrschen.",
                },
                "Pole Choreo 3-4": {
                    description: "In diesem Kurs erweitern wir deine Fähigkeiten, indem wir komplexere Spins und Tricks in kreative Choreografien zu ausgewählter Musik integrieren. Du wirst lernen, wie du Übergänge zwischen verschiedenen Bewegungen fließend gestaltest und deinen persönlichen Stil weiterentwickelst. Der Fokus liegt auf der Verbesserung deiner Technik sowie deiner Musikalität. **Voraussetzung:** Du solltest mit den Inhalten aus den Beginner- und Intermediate-Kursen vertraut sein und sicher inverts beherrschen.",
                }
            },
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
            isActive: true,
            imagePath: "/coursedescription/pexels-dihandrea-5843498.jpg"
        }, /** weitere Idee: Pole Conditioning & Vertical Barre */

        {
            title: "Adaptive Pole Dance & Hammock",
            path: "adaptive-pole-dance",
            group: "ADAPTIVE",
            subTitle: "für Menschen mit unterschiedlichen Fähigkeiten",
            descriptionTable: {
                "Adaptive Einführung": {
                    description: "In diesem Kurs passen wir Übungen individuell an die körperlichen Voraussetzungen der Teilnehmer:innen an. Du lernst sichere Spins, Haltepositionen und grundlegende Tricks an der Pole und mit dem Hammock – einzeln oder kombiniert. Fokus liegt auf Kraftaufbau, Flexibilität, Stabilität und Freude an Bewegung. Übungen werden so angepasst, dass sie für jede:n zugänglich sind.",
                    info: "Bitte bringe bequeme Kleidung mit. Adaptive Hilfsmittel wie Schaumstoffrollen, Gurte oder zusätzliche Unterstützungen stehen vor Ort zur Verfügung. Trainer:innen stehen unterstützend zur Seite.Bring gern 1–2 Begleitpersonen mit oder kontaktiere uns vorab für individuelle Anliegen. Lieblingslieder und kreative Ideen sind willkommen!"
                },
                "Adaptive Fortgeschrittene": {
                    description: "Für Teilnehmer:innen mit etwas Erfahrung: Wir kombinieren Pole- und Hammock-Übungen zu fließenden Bewegungsabläufen, angepasst an die individuellen Fähigkeiten. Fokus auf Koordination, Kraft, Beweglichkeit, Gleichgewicht und Selbstvertrauen. Übergänge zwischen Pole und Hammock können je nach Bedürfnis individuell gestaltet werden.",
                    info: "Individuelle Anpassungen jederzeit möglich, Trainer:innen beraten zu sicheren Varianten und unterstützenden Hilfsmitteln. Auch die Kombination von Hammock mit der Pole kann optional genutzt werden. Bring gern 1–2 Begleitpersonen mit oder kontaktiere uns vorab für individuelle Anliegen. Lieblingslieder sind willkommen!"
                }
            },
            info: "Dieser Kurs ist inklusiv, die Übungen werden an die körperlichen Voraussetzungen der Teilnehmer:innen angepasst. Adaptive Hilfsmittel vorhanden.",
            isActive: true,
            imagePath: "/coursedescription/adaptive-pole-dance.jpg"
        },

        //DANCE


        //POLEDANCE TECHNIK & CHOREO 
        
        {
            title: "Heels Flow",
            path: "heels-flow",
            group: "HEELS",
            subTitle: "mixed level",
            descriptionTable: {
                "Heels Essentials": {
                    description: "In diesem Kurs lernst du die Grundlagen des Heels Dance – vom sicheren Gehen in High Heels bis zu ersten fließenden Bewegungen und leichten Combos. Perfekt für Anfänger:innen, die ein sicheres Fundament aufbauen möchten.",
                    info: ""
                },
                "Heels Exotic": {
                    description: "Hier stehen ausdrucksstarke, kraftvolle Bewegungen und Floorwork im Mittelpunkt. Wir verbinden Eleganz mit Akrobatik und entwickeln eine energiegeladene, selbstbewusste Ausstrahlung.",
                    info: ""
                },
                "Heels Sensual": {
                    description: "Sanfte, elegante Lines und geschmeidige Übergänge prägen diesen Kurs. Du lernst, Emotionen durch Bewegung auszudrücken und eine sinnlich, verführerische Präsenz auf der Pole zu entfalten.",
                    info: ""
                }
            },
             info: "Bringe gern ein paar High Heels mit und trage Kleidung, in denen du dich wohlfühlst. Sexy Outfits sind 💜-lich willkommen.",
            isActive: true,
            imagePath: "/coursedescription/pexels-poleplace-online-poledance-studio-610999695-17286900.jpg"
        },
        
        {
            title: "Floorwork & Dance",
            path: "floorwork",
            group: "DANCE",
            subTitle: "",
            descriptionTable: {
                "Basic Floorwork": {
                    description: "Einsteigerfreundlicher Kurs, in dem du sichere Basics am Boden lernst – von Bodywaves über elegante Übergänge bis hin zu einfachen Combos. Ideal, um Vertrauen und Beweglichkeit aufzubauen.",
                    info: ""
                },
                "Sensual Floorwork": {
                    description: "Hier stehen weiche, sinnliche Bewegungen, Waves und fließende Übergänge im Vordergrund. Perfekt, um deine feminine Ausdruckskraft zu betonen und Eleganz in deine Choreos zu bringen.",
                    info: ""
                },
                "Exotic Floorwork": {
                    description: "Dynamisches Floorwork mit Drops, Kicks und ausdrucksstarken Bewegungen. Kraftvoll, verspielt und sexy – für alle, die Energie und Showfeeling lieben.",
                    info: ""
                },
                "Contemporary Floorwork": {
                    description: "Eine kreative Mischung aus Floorwork und zeitgenössischem Tanz. Fokus auf Ausdruck, Emotionalität und ungewöhnliche Bewegungsmuster.",
                    info: ""
                },
                "Special Floorwork": {
                    description: "In diesem Workshop bieten wir je nach Instructor:in spezielle Formen des Floorworks an. Dazu gehört beispielsweise unser Spezial FCK THE FLOOR, mit Twerking-Elementen.",
                    info: ""
                }
               
            },
            info: "Bitte trage Kleidung in der du dich wohlfühlst undbring  Knee Pads mit. High Heels sind vollkommen in Ordnung, aber kein Muss.",
            isActive: true,
            imagePath: "/coursedescription/pexels-lazarus-ziridis-351891426-30496741.jpg"
      
        },/* weitere Dance Ideen: Twerk, Schair & Lapdance, Striptease*/
        {
            title: "Yoga & Flexibility",
            path: "yoga-flexibility",
            group: "FLEXIBILITY",
            subTitle: "verschiedene Stile",
            descriptionTable: {
                "Flexibility Backbends": {
                    description: "Gezielte Übungen, um den Rücken zu öffnen und die Beweglichkeit in der Wirbelsäule zu erhöhen. Ideal, um deine Haltung zu verbessern und Flexibilität aufzubauen.",
                    info: ""
                },
                "Flexibility Splits": {
                    description: "Spezielle Dehnübungen für die Spagat-Varianten (Front- und Side-Splits). Schrittweise Steigerung, um sicher und effektiv deine Beinflexibilität zu verbessern.",
                    info: ""
                },
                "Full Body Stretch": {
                    description: "Ganzkörper-Dehnung zur Lockerung von Verspannungen und Förderung der Beweglichkeit. Perfekt als Ergänzung zu Pole, Dance oder Sport allgemein.",
                    info: ""
                },
                "Vinyasa Yoga": {
                    description: "Dynamischer Yoga-Stil, bei dem Atem und Bewegung fließend verbunden werden. Fördert Kraft, Ausdauer und Körperkontrolle.",
                    info: ""
                },
                "Yin Yoga": {
                    description: "Langsame, passive Dehnungen, die tief in das Bindegewebe wirken. Ideal zur Entspannung, Regeneration und inneren Ruhe.",
                    info: ""
                }
            },
            info: "Bitte trage Kleidung, in der du dich wohlfühlst.",
            isActive: true,
            imagePath: "/coursedescription/pexels-elly-fairytale-3823039.jpg"
        },
        
        {
            title: "Playground",
            path: "playground",
            group: "PLAYGROUND",
            subTitle: "Freies Training",
            descriptionTable: {
                "Freies Training": {
                    description: "Der Playground ist dein kreativer Raum für freies Training und Experimentieren. Hier kannst du dich ohne Druck entfalten, neue Ideen ausprobieren und deinen eigenen Stil entwickeln. Nutze die Zeit, um an deinen individuellen Fähigkeiten zu arbeiten und deine Kreativität auszuleben.",
                    info: ""
                }
            },
            info: "Bitte beachte, dass der Playground nicht vom Trainer geleitet wird! Du entscheidest selbst, was du trainieren möchtest und leitest dein eigenes Training. Achte darauf, die passende Kleidung für deine Übungen zu tragen.",
            isActive: true,
            imagePath: "/coursedescription/pexels-dihandrea-5843498.jpg"
        },        
        
        {
            title: "Arial Silk",
            path: "arial-silk",
            group: "ARIALSILK",
            subTitle: "Levels 1-3",
            descriptionTable: {
                "Arial Silk 1: Beginner": {
                    description: " für Arial Silk. Du lernst sichere Griffe, grundlegende Knoten und einfache Abgänge. Perfekt, um Vertrauen in die Tücher aufzubauen und die ersten Tricks zu üben.",
                    info: ""
                },
                "Arial Silk 2: Intermediate": {
                    description: " Du kombinierst Spins, Climb-Techniken und einfache Übergänge. Fokus liegt auf Kraftaufbau, Körperspannung und flüssigen Bewegungen im Tuch.",
                    info: ""
                },
                "Arial Silk 3: Advanced": {
                    description: "Anspruchsvolle Tricks, Inversions und dynamische Kombinationen. Hier geht es um Technik-Perfektion, Ausdruck und kreative Choreos in der Höhe.",
                    info: ""
                }
            },
            info: "Bitte bringe bequeme Kleidung mit, in der du dich gut bewegen kannst. Haare hochgebunden und keine Schmuckstücke.",
            isActive: true,
            imagePath: "/coursedescription/pexels-ketut-subiyanto-5000461.jpg"
        },        
        {
            title: "Arial Hoop",
            path: "arial-hoop",
            group: "HOOP",
            subTitle: "Levels 1-3",
            descriptionTable: {
                "Arial Hoop 1: Beginner": {
                    description: " Du lernst sichere Griffe, grundlegende Spins und einfache Übergänge am Hoop. Perfekt, um Vertrauen in das Gerät aufzubauen und die ersten Tricks zu üben.",
                    info: ""
                },
                "Arial Hoop 2: Intermediate": {
                    description: " Kombiniere Spins, Inversions und fließende Übergänge. Fokus liegt auf Kraft, Körperspannung und geschmeidigen Bewegungen im Hoop.",
                    info: ""
                },
                "Arial Hoop 3: Advanced": {
                    description: " Anspruchsvolle Tricks, dynamische Kombinationen und kreative Choreos. Hier geht es um Technik-Perfektion, Ausdruck und fließende Bewegungen in der Höhe.",
                    info: ""
                }
            },
            info: "Bitte bringe bequeme Kleidung mit, in der du dich gut bewegen kannst. Haare hochgebunden und keine Schmuckstücke.",
            isActive: true,
            imagePath: "/coursedescription/pexels-taylor-monahan-3440481-6197551.jpg"
        },        
        {
            title: "Luftakrobatik für Kinder und Jugendliche",
            path: "luftakrobatik-kids-teens",
            subTitle: "Altersgruppen 5-17",
            headerDescription: "In diesem Kurs können Kinder und Jugendliche zwischen 5 und 17 Jahren verschiedene Luft- und Bodendisziplinen ausprobieren – darunter Pole, Hammock, Hoop und Arial Silk. Je nach Absprache und Interessen der Kinder gestalten wir das Training individuell. Alle Disziplinen werden als Sport und Akrobatik vermittelt: Die Kinder trainieren an einem sicheren Ort, lernen Beweglichkeit, Kraft und Koordination und erleben Spaß und Erfolgserlebnisse – ohne jegliche Sexualisierung. Pole wird dabei als spannendes Spiel- und Sportgerät genutzt, das Klettern, Drehen und kreative Bewegungen ermöglicht.",
            group: "KIDS",
            descriptionTable: {
                "5-7 Jahre": {
                    description: "Ein spielerischer Einstieg in die Luftakrobatik. Die Kinder lernen sichere Griffe, einfache Übungen und Bewegungsabläufe, die Koordination, Spaß und Vertrauen fördern.",
                    info: ""
                },
                "8-12 Jahre": {
                    description: "Fortgeschrittene Grundlagen für Kinder, die ihre Kraft, Beweglichkeit und Körperkontrolle weiterentwickeln möchten. Spielerische Kombinationen und erste kleine Tricks stehen im Fokus.",
                    info: ""
                },
                "13-17 Jahre": {
                    description: "Kurs für Jugendliche, die Technik, Kraft und Ausdruck vertiefen wollen. Anspruchsvollere Tricks, Inversions und kreative Sequenzen werden altersgerecht vermittelt.",
                    info: ""
                }
            },
            info: "Bitte bringe bequeme Kleidung mit, in der du dich gut bewegen kannst. Haare hochgebunden und keine Schmuckstücke.",
            isActive: true,
            imagePath: "/coursedescription/pexels-elly-fairytale-3823039.jpg"
        }
        
        
    ];

    const handleButtonClick = (title) => {
        const selectedCourse = courses.find(course => course.title === title);
        setCourseInfo(selectedCourse);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    //@Button:
    /**onClick={() => handleButtonClick(course.title)}*/

    /*
        <Link href={`/poledance/kursbeschreibung/${course.path}`}>
                {course.title} <br/>
                {!course.isActive ? '**in Planung**' : ' '}
                {course.imagePath && ( <Image src={course.imagePath} height={400} width={400} className={styles.image} alt={course.subTitle} />)}        
        </Link>
    */
    

    return (
        <div className={styles.container}>
           {/*} <div className={styles.titleContainer}>
                <h1 className='text-xl'> KURSBESCHREIBUNGEN</h1>
                <div className='flex w-full justify-evenly'>
                    <button onClick={() => scrollToSection('table')} className={styles.buttons}> KURSPLAN</button>
                    <button onClick={() => scrollToSection('priceTable')}  className={styles.buttons}> PREISE </button>
                    <button onClick={() => scrollToSection('privateParties')}  className={styles.buttons}> PRIVATE PARTIES </button>
                    <button onClick={() => scrollToSection('workshops')}  className={styles.buttons}> EVENTS </button>
                </div>
            </div>*/}
            
            <div className={styles.courseDescriptionDiv}>
            
                {courses.map(course => (
                    <div className={`${styles.courseItemDescription} ${styles[course.group] } `} key={course.title}>
                        <button 
                            key={course.title} 
                            className={`${styles.button} ${!course.isActive ? styles.inactive : ' '} beVietnamProFont`} 
                            onClick={() => handleButtonClick(course.title)}
                        >
                
                            {course.title} <br/>
    
                        
                            {/*{course.imagePath && ( <Image src={course.imagePath} height={400} width={400} className={styles.image} alt={course.subTitle} />)} */ }
                      
                        </button>

                            {!course.isActive && (
                            <div className={styles.courseIsPending}>
                                   In Planung: {course.title} 
                            </div>
                            )}

                        {/*{course.imagePath && ( <Image src={course.imagePath} height={400} width={400} className={styles.image} alt={course.subTitle} />)}*/}
                        {isModalOpen && (
                            <CourseInfoModal course={courseInfo} onClose={closeModal} />
                        )}  
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default CourseDescription;