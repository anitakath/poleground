import React, { useState } from 'react';
import PriceTable from './PriceTable';
import styles from './CourseDescription.module.css';
import CourseInfoModal from '../Modals/CourseInfoModal';
import Image from 'next/image';
import Link from 'next/link';


const CourseDescription = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courseInfo, setCourseInfo] = useState(null);

    function slugify(title) {
        return title
          .toLowerCase() // In Kleinbuchstaben umwandeln
          .replace(/\s+/g, '-') // Leerzeichen durch Bindestriche ersetzen
          .replace(/[^\w\-]+/g, '') // Alle nicht-alphanumerischen Zeichen entfernen
          .replace(/\-\-+/g, '-') // Doppelte Bindestriche entfernen
          .trim(); // Überflüssige Bindestriche am Anfang und Ende entfernen
      }

    const courses = [

        //POLEDANCE
        {
            title: "Poledance Beginner",
            path: "poledance-beginner",
            subTitle: "Pole 0-1 &  Pole 1-2",
            description: "In diesem Kurs sind keinerlei Vorkenntnisse erforderlich! Du lernst die Grundlagen des Poledance, einschließlich einfacher Spins und Tricks. Unsere erfahrenen Trainer zeigen dir Schritt für Schritt, wie du sicher mit der Pole umgehst und deine Kraft sowie Flexibilität aufbaust. Der Kurs bietet eine freundliche und unterstützende Atmosphäre, in der du dich wohlfühlen und deinen eigenen Stil entwickeln kannst. Mach den ersten Schritt in die aufregende Welt des Poledance!",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
            isActive: true,
            imagePath: "/coursedescription/pexels-dihandrea-5843498.jpg"
        }, 
        
        {
            title: "Poledance Early Intermediate",
            path: "poledance-early-intermediate",
            subTitle: "Pole 3",
            description: "In diesem Kurs vertiefen wir die Grundlagen des Poledance und kombinieren verschiedene Spins, Tricks und Figuren. Du wirst auch deine ersten Inverts erlernen! Dieser Kurs bietet die ideale Vorbereitung für den Übergang zum Intermediate-Kurs.",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
            isActive: true,
            imagePath: "/coursedescription/pexels-dihandrea-5843498.jpg"
            
        }, 
        {
            title: "Pole Intermediate",
            path: "poledance-intermediate",
            subTitle: "Pole 4",
            description: "Dieser Kurs richtet sich an Teilnehmer mit grundlegenden Poledance-Kenntnissen und sicheren Inverts. Du wirst deine Technik verfeinern und komplexere Spins sowie Übergänge erlernen. Der Fokus liegt auf der Verbesserung deiner Kraft und Flexibilität, während du neue Tricks in einer motivierenden Umgebung ausprobierst.",
            isActive: true,
            imagePath: "/coursedescription/pexels-dihandrea-5843498.jpg"
        },
        {
            title: "Pole Advanced",
            path: "poledance-advanced",
            subTitle: "Pole 5",
            description: "Im Advanced-Kurs wirst du herausfordernde Tricks und Kombinationen erlernen, die sowohl Kraft als auch Geschicklichkeit erfordern. Dieser Kurs ist ideal für erfahrene Tänzerinnen, die ihre Fähigkeiten weiterentwickeln und Technik verbessern möchten.",
            isActive: false,
            imagePath: "/coursedescription/pexels-dihandrea-5843498.jpg"
        },
        {
            title: "Pole Choreo",
            path: "poledance-choreo",
            subTitle: "Pole Choreo 1-2",
            description: "In diesem Kurs kombinieren wir die Grundlagen des Poledance mit kreativen Choreografien zu ausgewählter Musik. Du wirst lernen, wie du einfache Spins, Tricks und Figuren in fließende Bewegungsabläufe integrierst. Der Fokus liegt darauf, deinen persönlichen Ausdruck zu entwickeln und deine Musikalität zu verbessern. Dieser Kurs ist ideal für alle, die ihre Technik vertiefen und gleichzeitig Spaß an der Choreografie haben möchten. **Voraussetzung:** Du solltest mit den Inhalten aus dem Beginner-Kurs vertraut sein und sicher einfache Spins beherrschen.",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
            isActive: true,
            imagePath: "/coursedescription/pexels-frendsmans-6100299 (1).jpg"
        },
        {
            title: "Pole Choreo Intermediate-Advanced",
            path: "poledance-choreo-intermediate-advanced",
            subTitle: "Pole Choreo 3-4",
            description: "In diesem Kurs erweitern wir deine Fähigkeiten, indem wir komplexere Spins und Tricks in kreative Choreografien zu ausgewählter Musik integrieren. Du wirst lernen, wie du Übergänge zwischen verschiedenen Bewegungen fließend gestaltest und deinen persönlichen Stil weiterentwickelst. Der Fokus liegt auf der Verbesserung deiner Technik sowie deiner Musikalität. **Voraussetzung:** Du solltest mit den Inhalten aus den Beginner- und Intermediate-Kursen vertraut sein und sicher inverts beherrschen.",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
            isActive: false,
            imagePath: "/coursedescription/pexels-frendsmans-6100299 (1).jpg"
        },
       
        {
            title: "Pole Conditioning",
            path: "poledance-conditioning",
            subTitle: "Pole Conditioning 0-5",
            description: "In diesem Kurs liegt der Schwerpunkt auf dem Aufbau von Kraft und Ausdauer speziell für Poledance. Durch gezielte Übungen wirst du deine Muskulatur stärken und Verletzungen vorbeugen. Ideal für alle, die ihre Leistung im Poledance und ihre Fitness verbessern möchten.",
            info: "Bitte bringe eine kurze Trainingshose und ein kleines Handtuch mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
            isActive: false,
             imagePath: "/coursedescription/pexels-frendsmans-6100295 (1).jpg"
        },
     

        //DANCE

        
        {
            title: "Heels Essentials",
            path: "heels-essentials",
            subTitle: "beginner",
            description: "Entdecke die verführerische Diva in dir! In diesem Kurs erlernen wir auf spielerische und humorvolle Art Grundlegende Techniken, anmutige Bewegungen und fließende Übergänge mit unseren High Heels an der Pole. Am Ende bauen wir das Erlernte zu einer kleinen feinen Choreo zusammen. Du brauchst keinerlei Vorkenntnisse für diesen Kurs.",
            info: "Bringe gern ein paar High Heels mit und trage Kleidung, in denen du dich wohlfühlst. Sexy Outfits sind 💜-lich willkommen",
            isActive: false,
            imagePath: "/coursedescription/timur-garifov-e8ZpvJV2rEs-unsplash.jpg"
        },
        
        {
            title: "Heels Flow",
            path: "heels-flow",
            subTitle: "mixed level",
            description: "In diesem Kurs kombinieren wir dynamische sowie sinnlich-verführerische Bewegungen und Übergänge mit unseren high Heels an der Pole. Am Ende studieren wir eine kleine feine Choreo. Für diesen Kurs werden Vorerfahrungen empfohlen, da wir anspruchsvollere Bewegungen und schnellere Übergänge ausführen. ",
            info: "Bringe gern ein paar High Heels mit und trage Kleidung, in denen du dich wohlfühlst. Sexy Outfits sind 💜-lich willkommen.",
            isActive: false,
            imagePath: "/coursedescription/timur-garifov-e8ZpvJV2rEs-unsplash.jpg"
        },
        
        {
            title: "Floorwork",
            path: "floorwork",
            subTitle: "",
            description: "Der Floorwork-Kurs kombiniert Elemente aus Tanz und Poledance am Boden. Du lernst fließende Bewegungen und Übergänge, die deinem Tanzstil mehr Ausdruck verleihen. Dieser Kurs fördert nicht nur deine Kreativität, sondern auch deine Körperbeherrschung.",
            info: "Bitte trage Kleidung in der du dich wohlfühlst undbring  Knee Pads mit. High Heels sind vollkommen in Ordnung, aber kein Muss.",
            isActive: false,
            imagePath: "/coursedescription/pexels-lazarus-ziridis-351891426-30496741.jpg"
      
        },
        {
            title: "Chair & Lapdance",
            path: "chair-lapdance",
            subTitle: "",
            description: "Lerne die Kunst des Lapdance in einem sicheren und unterstützenden Umfeld! In diesem Kurs erfährst du, wie du Selbstbewusstsein ausstrahlst und sinnliche Bewegungen einsetzt. Ideal für alle, die ihren Ausdruck im Tanz erweitern möchten.",
            info: "Bitte trage Kleidung in der du dich wohlfühlst und bring Knee Pads mit. High Heels sind vollkommen in Ordnung, aber kein Muss.",
            isActive: false,
            imagePath: "/coursedescription/pexels-lazarus-ziridis-351891426-30496741.jpg"
        },
        {
            title: "Yoga & Flexibility",
            path: "yoga-flexibility",
            subTitle: "",
            description: "Dieser Kurs kombiniert Yoga-Elemente mit speziellen Dehnübungen zur Verbesserung deiner Flexibilität. Perfekt für Poledancer aller Niveaus, um Verspannungen zu lösen und die Beweglichkeit zu erhöhen. Finde innere Ruhe und Stärke durch gezielte Atemtechniken.",
            info: "Bitte trage Kleidung in der du dich wohlfühlst.",
            isActive: true,
            imagePath: "/coursedescription/pexels-elly-fairytale-3823039.jpg"
        },
        {
            title: "Playground",
            path: "playground",
            subTitle: "",
            description: "Der Playground ist dein ganz eigener kreativer Raum für freies Training und Experimentieren. Hier kannst du dich ohne Druck entfalten, neue Ideen ausprobieren und deinen eigenen Stil entwickeln. Nutze die Zeit, um an deinen individuellen Fähigkeiten zu arbeiten und deine Kreativität auszuleben!",
            info: "Bitte beachte, dass der Playground nicht vom Trainer geleitet wird! Du entscheidest selbst, was du trainieren möchtest und leitest dein eigenes Training. Achte darauf, die passende Kleidung für deine Übungen zu tragen.",
            isActive: true,
            imagePath: "/coursedescription/pexels-dihandrea-5843498.jpg"
        },
        {
            title: "Arial Silk",
            path: "arial-silk",
            subTitle: "",
            description: "Der Playground ist dein ganz eigener kreativer Raum für freies Training und Experimentieren. Hier kannst du dich ohne Druck entfalten, neue Ideen ausprobieren und deinen eigenen Stil entwickeln. Nutze die Zeit, um an deinen individuellen Fähigkeiten zu arbeiten und deine Kreativität auszuleben!",
            info: "Bitte beachte, dass der Playground nicht vom Trainer geleitet wird! Du entscheidest selbst, was du trainieren möchtest und leitest dein eigenes Training. Achte darauf, die passende Kleidung für deine Übungen zu tragen.",
            isActive: false,
             imagePath: "/coursedescription/pexels-ketut-subiyanto-5000461.jpg"
            
        },
        {
            title: "Arial Hoop",
            path: "arial-hoop",
            subTitle: "",
            description: "Der Playground ist dein ganz eigener kreativer Raum für freies Training und Experimentieren. Hier kannst du dich ohne Druck entfalten, neue Ideen ausprobieren und deinen eigenen Stil entwickeln. Nutze die Zeit, um an deinen individuellen Fähigkeiten zu arbeiten und deine Kreativität auszuleben!",
            info: "Bitte beachte, dass der Playground nicht vom Trainer geleitet wird! Du entscheidest selbst, was du trainieren möchtest und leitest dein eigenes Training. Achte darauf, die passende Kleidung für deine Übungen zu tragen.",
            isActive: false,
            imagePath: "/coursedescription/pexels-taylor-monahan-3440481-6197551.jpg",
            

        },
        {
            title: "Luftakrobatik für Kinder und Jugendliche",
            path: "luftakrobatik-kids-teens",
            subTitle: "",
            description: "Der Playground ist dein ganz eigener kreativer Raum für freies Training und Experimentieren. Hier kannst du dich ohne Druck entfalten, neue Ideen ausprobieren und deinen eigenen Stil entwickeln. Nutze die Zeit, um an deinen individuellen Fähigkeiten zu arbeiten und deine Kreativität auszuleben!",
            info: "Bitte beachte, dass der Playground nicht vom Trainer geleitet wird! Du entscheidest selbst, was du trainieren möchtest und leitest dein eigenes Training. Achte darauf, die passende Kleidung für deine Übungen zu tragen.",
            isActive: false,
             imagePath: "/coursedescription/pexels-elly-fairytale-3823039.jpg"
        },
        
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
            <h1 className=' text-xl  mb-2'> KURSBESCHREIBUNGEN </h1>
            <div className={styles.courseDescriptionDiv}>
            
                {courses.map(course => (
                    <div className='relative' key={course.title}>
                        <button 
                            key={course.title} 
                            className={`${styles.button} ${!course.isActive ? styles.inactive : ' '} beVietnamProFont`} 
                            onClick={() => handleButtonClick(course.title)}
                        >
                
                            {course.title} <br/>
                            {!course.isActive ? '**in Planung**' : ' '}
                            {course.imagePath && ( <Image src={course.imagePath} height={400} width={400} className={styles.image} alt={course.subTitle} />)}  
                      
                            </button>

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