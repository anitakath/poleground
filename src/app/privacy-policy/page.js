import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Datenschutzerklärung</h1>

            <h2 className={styles.subtitle}>1. Allgemeine Hinweise</h2>
            <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden 
                vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser 
                Datenschutzerklärung behandelt.
            </p>

            <h2 className={styles.subtitle}>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
                Personenbezogene Daten werden nur erhoben, wenn Sie uns diese von sich aus, z.B. bei der 
                Registrierung oder Kontaktaufnahme, freiwillig mitteilen.
            </p>

            <h2 className={styles.subtitle}>3. Nutzung und Weitergabe personenbezogener Daten</h2>
            <p>
                Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung, zur 
                Abwicklung von Zahlungen oder aufgrund gesetzlicher Vorschriften erforderlich ist.
            </p>

            <h2 className={styles.subtitle}>4. Einsatz von Eversports / Buchungssystem</h2>
            <p>
                Für die Buchung von Kursen nutzen wir Eversports. Dabei gelten die Datenschutzbestimmungen 
                von Eversports. Ihre Buchungsdaten werden ausschließlich zur Abwicklung der Kurse verwendet.
            </p>

            <h2 className={styles.subtitle}>5. Cookies und Tracking</h2>
            <p>
                Unsere Website verwendet keine Cookies oder Tracking-Technologien, die über die 
                rein funktionale Nutzung hinausgehen.
            </p>

            <h2 className={styles.subtitle}>6. Ihre Rechte</h2>
            <p>
                Sie haben jederzeit das Recht auf Auskunft über die von uns gespeicherten personenbezogenen 
                Daten, deren Berichtigung oder Löschung sowie das Recht, der Verarbeitung zu widersprechen.
            </p>

            <h2 className={styles.subtitle}>7. Kontakt</h2>
            <p>
                Für Auskünfte oder Anfragen bezüglich Ihrer Daten kontaktieren Sie uns bitte unter: 
                [E-Mail-Adresse / Telefonnummer].
            </p>
        </div>
    );
};

export default PrivacyPolicy;
