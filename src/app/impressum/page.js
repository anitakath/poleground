import styles from './Impressum.module.css'

const Impressum = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Impressum</h1>
  
        <h2 className={styles.subtitle}>Poleground – Dein Poledance Studio</h2>
        <p>
          Inhaber: [Dein Name] <br />
          Adresse: [Straße, Hausnummer] <br />
          PLZ, Stadt: [Hamburg / Lüneburg] <br />
          Telefon: [Telefonnummer] <br />
          E-Mail: [E-Mail-Adresse] <br />
          Website: [www.deinstudio.de]
        </p>
  
        <h3 className={styles.subsubtitle}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
        <p>
          [Dein Name und Adresse wiederholen]
        </p>
  
        <h3 className={styles.subsubtitle}>Umsatzsteuer-ID (falls vorhanden):</h3>
        <p >[DE123456789]</p>
  
        <h3 className={styles.subsubtitle}>Haftungshinweis:</h3>
        <p className={styles.paragraph}>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    );
};

export default Impressum;
