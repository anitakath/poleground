"use client"
import styles from './PolegroundInfo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useScrollToSection from '../custom hooks/useScrollToSection';


const PolegroundInfo = () => {

  const {scrollToSection} = useScrollToSection();

  return (
    <div className={styles.container} id="leitbild">
      <h1 className={styles.title} onClick={() => scrollToSection("studio")}>
        Das Poleground Studio <span className={styles.opening}> -  Eröffnung 2026 </span>
      </h1>

      <h2 className={styles.subtitle}> Unser Leitbild</h2>
      <div className='flex'>


        <ul className={styles.description}>
            <li>
                <strong>Ein Safespace für jede/n erschaffen:</strong> 
                <br/>
                
                Unser Ziel ist es, einen sicheren Raum zu schaffen, in dem sich jede Person willkommen und akzeptiert fühlt. 
                Hier kannst du dich frei entfalten und so sein, wie du bist
                – ohne Bewertungen oder Vorurteile.
            </li>
            <li>
                <strong>Inklusion:</strong>
                <br/> 
                Wir setzen uns leidenschaftlich für Inklusion ein! Unabhängig von deinem Hintergrund oder deinen Fähigkeiten bist du bei uns herzlich willkommen. 
                Dein Alter, Geschlecht, Herkunft oder deine Fitness spielen keine Rolle 
                – komm vorbei und verbinde dich mit deinem Körper sowie einer spannenden Community voller Gleichgesinnter!</li>
            <li>
                <strong>Fitness & Selbstbewusstsein:</strong>
                <br/> 
                Durch unsere vielfältigen Angebote fördern wir nicht nur deine Fitness, sondern auch dein Selbstbewusstsein. 
                Körperliche Aktivität stärkt nicht nur den Körper, sondern auch das Selbstwertgefühl 
                – wir gestalten dies spielerisch und spannend!</li>
            <li>
                <strong>Gemeinschaft:</strong>
                <br/> 
                Durch regelmäßige Treffen, Events und Workshops sowie die Planung eines gemeinsamen Retreats schaffen wir einen Ort der Verbindungen,
                an dem Freundschaften entstehen können – ein Raum, in dem man sich gegenseitig unterstützt und inspiriert. 
                Für weitere Informationen zu unseren Veranstaltungen klicke bitte <Link href="/poledance/events" className={styles.link}>hier</Link>
            </li>
            <li>
                <strong>Kreativität:</strong>
                <br/> 
                Kreativität hat in unserem Studio einen hohen Stellenwert; wir ermutigen dich dazu, deine Talente auszuleben und neue Ausdrucksformen zu entdecken.
                Es geht nicht um Perfektion, sondern um Selbstfindung und Authentizität.
            </li>
            <li>
                <strong>Persönliche Entwicklung:</strong>
                <br/> 
                Bei uns hast du die Möglichkeit, neue Fähigkeiten zu erlernen und Herausforderungen zu meistern. 
                Jeder Schritt auf deinem Weg ist ein Schritt zur persönlichen Entfaltung.
            </li>
            <li>
                <strong>Poledance als Leistungssport:</strong>
                <br/>
                Schließlich setzen wir uns auch dafür ein, den Poledance-Sport nicht nur als anerkannten Sport zu integrieren und weiterzuentwickeln. 
                Wir bieten Unterstützung für Interessierte beim Leistungstraining an und helfen ihnen dabei, ihre Ziele zu erreichen 
                – sei es im Freizeitbereich oder im Wettkampf.
            </li>
        </ul>

   
      </div>
     
    </div>
  );
};

export default PolegroundInfo;