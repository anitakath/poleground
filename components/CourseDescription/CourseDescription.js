import React, { useState } from 'react';
import PriceTable from './PriceTable';
import styles from './CourseDescription.module.css';
import CourseInfoModal from '../Modals/CourseInfoModal';

const CourseDescription = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courseInfo, setCourseInfo] = useState(null);

    const courses = [
        {
            title: "Poledance Beginner",
            description: "In diesem Kurs sind keinerlei Vorkenntnisse erforderlich! Du lernst die Grundlagen des Poledance, einschließlich einfacher Spins und Tricks. Unsere erfahrenen Trainer zeigen dir Schritt für Schritt, wie du sicher mit der Pole umgehst und deine Kraft sowie Flexibilität aufbaust. Der Kurs bietet eine freundliche und unterstützende Atmosphäre, in der du dich wohlfühlen und deinen eigenen Stil entwickeln kannst. Mach den ersten Schritt in die aufregende Welt des Poledance!",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
        }, 
        {
            title: "Poledance Beginner+",
            description: "In diesem Kurs vertiefen wir die Grundlagen des Poledance und kombinieren verschiedene Spins, Tricks und Figuren. Du wirst auch deine ersten Inverts erlernen! Dieser Kurs bietet die ideale Vorbereitung für den Übergang zum Intermediate-Kurs.",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich.",
        
        }, 
        {
            title: "Pole Intermediate",
            description: "Dieser Kurs richtet sich an Teilnehmer mit grundlegenden Poledance-Kenntnissen und sicheren Inverts. Du wirst deine Technik verfeinern und komplexere Spins sowie Übergänge erlernen. Der Fokus liegt auf der Verbesserung deiner Kraft und Flexibilität, während du neue Tricks in einer motivierenden Umgebung ausprobierst."
        },
        {
            title: "Pole Advanced",
            description: "Im Advanced-Kurs wirst du herausfordernde Tricks und Kombinationen erlernen, die sowohl Kraft als auch Geschicklichkeit erfordern. Dieser Kurs ist ideal für erfahrene Tänzerinnen, die ihre Fähigkeiten weiterentwickeln und Technik verbessern möchten."
        },
        {
            title: "Pole Choreo Beginner",
            description: "In diesem Kurs kombinieren wir die Grundlagen des Poledance mit kreativen Choreografien zu ausgewählter Musik. Du wirst lernen, wie du einfache Spins, Tricks und Figuren in fließende Bewegungsabläufe integrierst. Der Fokus liegt darauf, deinen persönlichen Ausdruck zu entwickeln und deine Musikalität zu verbessern. Dieser Kurs ist ideal für alle, die ihre Technik vertiefen und gleichzeitig Spaß an der Choreografie haben möchten. **Voraussetzung:** Du solltest mit den Inhalten aus dem Beginner-Kurs vertraut sein und sicher einfache Spins beherrschen.",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich."
        },
        {
            title: "Pole Choreo Intermediate",
            description: "In diesem Kurs erweitern wir deine Fähigkeiten, indem wir komplexere Spins und Tricks in kreative Choreografien zu ausgewählter Musik integrieren. Du wirst lernen, wie du Übergänge zwischen verschiedenen Bewegungen fließend gestaltest und deinen persönlichen Stil weiterentwickelst. Der Fokus liegt auf der Verbesserung deiner Technik sowie deiner Musikalität. **Voraussetzung:** Du solltest mit den Inhalten aus den Beginner- und Intermediate-Kursen vertraut sein und sicher inverts beherrschen.",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich."
        },
        {
            title: "Pole Choreo Intermediate-Advanced",
            description: "In diesem fortgeschrittenen Kurs kombinieren wir anspruchsvolle Spins, Tricks und Figuren in dynamische Choreografien zu ausgewählter Musik. Du wirst lernen, komplexe Bewegungsabläufe zu kreieren und deine Performance durch Ausdrucksstärke zu bereichern. Der Fokus liegt darauf, sowohl technische Fähigkeiten als auch kreative Elemente zu verfeinern. **Voraussetzung:** Du solltest mit den Inhalten aus den Beginner- und Intermediate-Kursen vertraut sein sowie sicher inverts und fortgeschrittene Tricks beherrschen.",
            info: "Bitte bringe eine kurze Trainingshose mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich."
        },
        {
            title: "Pole Conditioning",
            description: "In diesem Kurs liegt der Schwerpunkt auf dem Aufbau von Kraft und Ausdauer speziell für Poledance. Durch gezielte Übungen wirst du deine Muskulatur stärken und Verletzungen vorbeugen. Ideal für alle, die ihre Leistung im Poledance und ihre Fitness verbessern möchten.",
            info: "Bitte bringe eine kurze Trainingshose und ein kleines Handtuch mit, da diese das Halten an der Pole erheblich verbessert. Verzichte außerdem auf Schmuck wie Ringe und Halsketten, da diese nicht nur dich verletzen können, sondern auch die Pole beschädigen. Gripmittel sind im Studio erhältlich."
      
        },
        {
            title: "Floorwork",
            description: "Der Floorwork-Kurs kombiniert Elemente aus Tanz und Poledance am Boden. Du lernst fließende Bewegungen und Übergänge, die deinem Tanzstil mehr Ausdruck verleihen. Dieser Kurs fördert nicht nur deine Kreativität, sondern auch deine Körperbeherrschung.",
            info: "Bitte trage Kleidung in der du dich wohlfühlst undbring  Knee Pads mit. High Heels sind vollkommen in Ordnung, aber kein Muss."
      
        },
        {
            title: "Chair & Lapdance",
            description: "Lerne die Kunst des Lapdance in einem sicheren und unterstützenden Umfeld! In diesem Kurs erfährst du, wie du Selbstbewusstsein ausstrahlst und sinnliche Bewegungen einsetzt. Ideal für alle, die ihren Ausdruck im Tanz erweitern möchten.",
            info: "Bitte trage Kleidung in der du dich wohlfühlst und bring Knee Pads mit. High Heels sind vollkommen in Ordnung, aber kein Muss."
        },
        {
            title: "Yoga & Flexibility",
            description: "Dieser Kurs kombiniert Yoga-Elemente mit speziellen Dehnübungen zur Verbesserung deiner Flexibilität. Perfekt für Poledancer aller Niveaus, um Verspannungen zu lösen und die Beweglichkeit zu erhöhen. Finde innere Ruhe und Stärke durch gezielte Atemtechniken.",
            info: "Bitte trage Kleidung in der du dich wohlfühlst."
        },
        {
            title: "Playground",
            description: "Der Playground ist dein ganz eigener kreativer Raum für freies Training und Experimentieren. Hier kannst du dich ohne Druck entfalten, neue Ideen ausprobieren und deinen eigenen Stil entwickeln. Nutze die Zeit, um an deinen individuellen Fähigkeiten zu arbeiten und deine Kreativität auszuleben!",
            info: "Bitte beachte, dass der Playground nicht vom Trainer geleitet wird! Du entscheidest selbst, was du trainieren möchtest und leitest dein eigenes Training. Achte darauf, die passende Kleidung für deine Übungen zu tragen."
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

    return (
        <div>
            <h1 className=' text-xl  mb-2'> KURSBESCHREIBUNGEN </h1>
            <div className={styles.courseDescriptionDiv}>
            
                {courses.map(course => (
                    <button 
                        key={course.title} 
                        className={`${styles.button} beVietnamProFont`} 
                        onClick={() => handleButtonClick(course.title)}
                    >
                        {course.title}
                    </button>
                ))}
            </div>

            {isModalOpen && (
                <CourseInfoModal course={courseInfo} onClose={closeModal} />
            )}
        </div>
    );
};

export default CourseDescription;