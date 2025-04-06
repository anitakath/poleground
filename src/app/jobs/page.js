"use client"
import { useState } from 'react';
import styles from './Jobs.module.css'
const Jobs = () => {

    const [activeJobIndex, setActiveJobIndex] = useState(null);

    const jobOffers = [
        {
            title: "Poledance Trainer:Innen",
            description: "Werde Teil unseres dynamischen Teams als Poledance Trainer:In! Wir suchen engagierte Trainer:Innen, die unsere Polerinas von Beginner bis Advanced auf ihrem Weg begleiten und inspirieren. Du solltest über mehrjährige Erfahrung im Poledance verfügen und in der Lage sein, sowohl technische Fähigkeiten als auch kreative Ausdrucksformen zu vermitteln. Deine Leidenschaft für den Sport und dein Talent, eine unterstützende und motivierende Lernumgebung zu schaffen, sind entscheidend, um das Selbstvertrauen unserer Mitglieder zu stärken. Wenn du Freude daran hast, dein Wissen weiterzugeben und unsere Tänzerinnen zu ermutigen, ihre Grenzen zu überschreiten, freuen wir uns auf deine Bewerbung!"
        },
        {
            title: "Aerial Silk Trainer:Innen",
            description: "Wir suchen leidenschaftliche Aerial Silk Trainer:Innen, die unsere Polerinas in der Kunst des Schwebens unterstützen! Du solltest über umfangreiche Erfahrung im Aerial Silk verfügen und in der Lage sein, sowohl Anfängern als auch Fortgeschrittenen Techniken beizubringen. Deine Kreativität und dein Gespür für Ästhetik werden dazu beitragen, dass unsere Mitglieder ihre Fähigkeiten auf ein neues Level heben. Wenn du Freude daran hast, deine Leidenschaft für das Aerial Arts zu teilen und eine inspirierende Lernumgebung zu schaffen, dann freuen wir uns auf deine Bewerbung!"
        },
        {
            title: "Aerial Hoop Trainer:Innen",
            description: "Werde Teil unseres Teams als Aerial Hoop Trainer:In! Wir suchen talentierte Trainer:Innen, die unseren Polerinas helfen, ihre Technik und Ausdruckskraft im Aerial Hoop zu verbessern. Du solltest über fundierte Kenntnisse in dieser Disziplin verfügen und in der Lage sein, sowohl technische Grundlagen als auch kreative Choreografien zu vermitteln. Deine Fähigkeit, eine positive und motivierende Atmosphäre zu schaffen, wird entscheidend sein, um das Selbstvertrauen unserer Mitglieder zu stärken. Wenn du bereit bist, deine Expertise mit uns zu teilen und unsere Tänzerinnen auf ihrem Weg zu begleiten, freuen wir uns auf deine Bewerbung!"
        },
        {
            title: "Yoga Lehrer:Innen",
            description: "Wir suchen inspirierende Yoga Lehrer:Innen, die unsere Mitglieder auf ihrer Reise zu mehr Flexibilität und Körperbewusstsein begleiten. Du bringst Erfahrung in verschiedenen Yoga-Stilen mit und hast das Talent, eine harmonische Atmosphäre zu schaffen, in der sich jeder wohlfühlt. Deine Leidenschaft für Yoga und dein Engagement, anderen zu helfen, werden entscheidend sein, um das Wohlbefinden unserer Community zu fördern."
        },
        {
            title: "Stretching Trainer:Innen",
            description: "Als Stretching Trainer:In spielst du eine wichtige Rolle dabei, unseren Tänzerinnen zu helfen, ihre Beweglichkeit und Körperkontrolle zu verbessern. Du solltest über fundierte Kenntnisse in verschiedenen Dehntechniken verfügen und ein feines Gespür für die individuellen Bedürfnisse der Teilnehmer haben. Deine Fähigkeit, gezielte Anleitungen zu geben und eine unterstützende Umgebung zu schaffen, wird dazu beitragen, dass unsere Mitglieder ihre Ziele erreichen."
        },
        {
            title: "Floorwork Trainer:Innen",
            description: "Wir suchen kreative Floorwork Trainer:Innen, die unseren Mitgliedern helfen, ihre Bewegungen am Boden elegant und ausdrucksstark zu gestalten. Du solltest Erfahrung im Tanz oder verwandten Disziplinen mitbringen und in der Lage sein, innovative Techniken sowie Choreografien zu vermitteln. Deine Kreativität und dein Engagement werden dazu beitragen, dass unsere Tänzerinnen ihre Fähigkeiten weiterentwickeln und ihren eigenen Stil finden."
        },
        {
            title: "Physiotherapeut/in",
            description: "Wir suchen eine/n qualifizierte/n Physiotherapeut/in, die/der unsere Mitglieder bei der Verbesserung ihrer Beweglichkeit und der Prävention von Verletzungen unterstützt. Du wirst individuelle Behandlungen anbieten sowie Massagen zur Entspannung und Regeneration durchführen. Deine Expertise wird dazu beitragen, dass unsere Tänzer:innen ihre Leistung steigern und gleichzeitig gesund bleiben. Wenn du leidenschaftlich daran interessiert bist, Menschen zu helfen und ein Teil unserer Community werden möchtest, freuen wir uns auf deine Bewerbung!"
        },
        {
            title: "Fotograf/in",
            description: "Du hast ein Auge für Ästhetik und möchtest unsere Kurse sowie Events in beeindruckenden Bildern festhalten? Wir suchen talentierte Fotografen, die unser Studio und unsere Tänzerinnen ins beste Licht rücken! Deine Fähigkeit, besondere Momente einzufangen und die Energie unserer Community widerzuspiegeln, wird entscheidend sein, um unvergessliche Erinnerungen zu schaffen."
        },
        {
            title: "Assistenz der Geschäftsführung",
            description: "Als Assistenz der Geschäftsführung bist du eine zentrale Stütze unseres Teams und trägst maßgeblich zum reibungslosen Ablauf des Studios bei. Du kümmerst dich um administrative Aufgaben, unterstützt bei der Planung und Organisation von Veranstaltungen und sorgst dafür, dass alle Abläufe effizient gestaltet sind. Deine Kommunikationsfähigkeit und dein Organisationstalent sind entscheidend, um einen freundlichen und professionellen Empfang zu gewährleisten. Wenn du gerne im Team arbeitest und ein Gespür für die Bedürfnisse unserer Community hast, freuen wir uns auf deine Bewerbung!"
        }
    ];

    const handleTitleClick = (index) => {
        setActiveJobIndex(activeJobIndex === index ? null : index);
    };

    return (
        <div className='flex justify-center'> 
            <div className={styles.container}> 
                <h1 className={styles.title}> Poleground sucht ...</h1>
                <h3 className="mt-2">Schicke uns deine Bewerbung gern per
                    <a href="mailto:wagner.annekathirn@gmx.de" className={styles.email}>E-Mail </a>
                </h3>

                {jobOffers.map((jobOffer, index) => (
                    <div className={`${styles.subContainerPole} ${activeJobIndex === index ? styles.subContainerPoleInactive : ''}`} key={jobOffer.title}>
                        <button  onClick={() => handleTitleClick(index)} className={`${styles.subTitle} ${activeJobIndex === index ? styles.subTitleInactive : ''}`}>{jobOffer.title}</button>

                        {activeJobIndex === index && (
                        

                        <div className={styles.description}>
                            <p>{jobOffer.description}</p>
                        </div>
                        )}

                    
                       
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Jobs;