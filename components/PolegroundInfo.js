import styles from './PolegroundInfo.module.css';
import Image from 'next/image';
const PolegroundInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Das Poleground Studio</h1>
      <p className={styles.opening}>Eröffnung 2026</p>
      <h2 className={styles.subtitle}>Unser Leitbild</h2>
      <div className='flex'>


        <ul className={styles.description}>
            <li>
                <strong>Ein Safespace für jede/n erschaffen:</strong> <br/>Unser Ziel ist es, einen sicheren Raum zu schaffen, in dem sich jede Person willkommen und akzeptiert fühlt.
            </li>
            <li>
                <strong>Inklusion:</strong><br/> Wir setzen uns leidenschaftlich für Inklusion ein und möchten, dass alle unsere Kund:innen unabhängig von ihrem Hintergrund oder ihren Fähigkeiten Teil unserer Gemeinschaft werden. Dein Alter, Geschlecht, Herkunft, Religion, oder deine aktuelle Fitness spielen KEINE Rolle!
            </li>
            <li>
                <strong>Fitness & Selbstbewusstsein:</strong><br/> Durch unsere vielfältigen Angebote streben wir danach, die Fitness unserer Teilnehmer:innen zu verbessern. Wir glauben daran, dass körperliche Aktivität nicht nur den Körper stärkt, sondern auch das Selbstbewusstsein und das Selbstwertgefühl fördert - und wir sorgen für körperliche Aktivität auf spielerische und spannende Weise! 
            </li>
            <li>
                <strong>Gemeinschaft:</strong><br/> Wir möchten einen Ort schaffen, an dem Verbindungen, auch abseits des Sports, stattfinden können und im besten Fall auch tiefgehende Freundschaften entstehen können – ein Ort, an dem man sich gegenseitig unterstützt und inspiriert.
            </li>
            <li>
                <strong>Kreativität:</strong><br/> Kreativität spielt in unserem Studio eine zentrale Rolle; wir ermutigen unsere Kund:innen dazu, ihre individuellen Talente auszuleben und neue Ausdrucksformen zu entdecken. Es geht nicht um Perfektion, es geht um Selbstfindung und Authentizität.
            </li>
            <li>
                <strong>Poledance als Sport:</strong> <br/>Schließlich setzen wir uns auch dafür ein, den Poledance-Sport als anerkannten Sport zu integrieren und weiterzuentwickeln. Wir bieten Unterstützung für Interessierte beim Leistungstraining an und helfen ihnen dabei, ihre Ziele zu erreichen – sei es im Freizeitbereich oder im Wettkampf.
            </li>
        </ul>

      <div className={styles.imageContainer}> 
      <Image  className={styles.image} src="/D-pexel.jpg" width={200} height={200} alt="please! love yourself"/>
        {/*<Image  className={styles.image} src="/D-pexel.jpg" width={200} height={200} alt="please! love yourself"/>*/}
      </div>

      </div>
     
    </div>
  );
};

export default PolegroundInfo;