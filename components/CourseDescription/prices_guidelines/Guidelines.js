import React from "react";
import styles from "./Guidelines.module.css";

export default function Guidelines() {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>

             {/* Teilnahmevoraussetzungen */}
        <section className={styles.section}>
            <h2 className={styles.heading}>👶 Teilnahmevoraussetzungen</h2>
            <ul className={styles.list}>
            <li>Kurse (außer Flexibility & Yoga) sind nur für <strong>Teilnehmer:innen ab 18 Jahren</strong>.</li>
            <li>Flexibility & Yoga: auch für Minderjährige geeignet.</li>
            <li>Kids & Teens Kurse: Mindestalter <strong>5 Jahre</strong>.</li>
            <li>Bitte teile uns <strong>schwerwiegende Erkrankungen</strong> (z. B. Epilepsie, Einschränkungen der Motorik/Koordination) im Vorfeld mit – so können wir das Training optimal anpassen.</li>
            <li>Alle Angaben unterliegen der <strong>Schweigepflicht</strong>.</li>
            <li>Wir sind <strong>Instruktor:innen, keine Ärzt:innen</strong>. Bei gesundheitlichen Bedenken empfehlen wir dringend ärztlichen Rat vor Kursbeginn.</li>
            </ul>
        </section>

        {/* Anmeldung und Kursteilnahme */}
        <section className={styles.section}>
            <h2 className={styles.heading}>📝 Anmeldung & Kursteilnahme</h2>
            <ul className={styles.list}>
            <li>Buchungen erfolgen über <strong>Eversports</strong> mit Registrierung.</li>
            <li>Zahlungsmethoden: <strong>PayPal, Kreditkarte, EC-Karte, Klarna</strong>.</li>
            <li>Erfolgreiche Kursbuchung wird automatisch per E-Mail bestätigt. <em>(Keine E-Mail = keine Buchung)</em></li>
            </ul>
        </section>

        {/* Stornierung und Rücktritt */}
        <section className={styles.section}>
            <h2 className={styles.heading}>❌ Stornierung & Rücktritt</h2>
            <ul className={styles.list}>
            <li>Reguläre Kurse: kostenfreie Stornierung bis <strong>24h vor Kursbeginn</strong>.</li>
            <li>Bei Stornierung: Rückbuchung auf Konto oder Reaktivierung deiner X-er Karte.</li>
            <li>Sonderangebote (Specials, Intensives, Workshops, Events): Stornierungsfristen variieren, siehe jeweilige Eventbeschreibung.</li>
            </ul>
        </section>

      {/* Bezahlung */}
        <section className={styles.section}>
            <h2 className={styles.heading}>💳 Bezahlung</h2>
            <ul className={styles.list}>
            <li>Zahlungen sind <strong>vor Kursbeginn</strong> gemäß aktueller Preisliste zu leisten.</li>
            <li>Akzeptierte Zahlungen vor Ort: <strong>PayPal, EC- und Kreditkarte</strong>.</li>
            </ul>
        </section>


        {/* Gültigkeitsdauer & Weitergabe */}
        <section className={styles.section}>
            <h2 className={styles.heading}>📅 Gültigkeitsdauer & Weitergabe</h2>
            <ul className={styles.list}>
            <li>Alle Angebote haben festgelegte Gültigkeitszeiträume (siehe Preisliste).</li>
            <li>Verlängerungen, Aussetzungen oder Weitergaben nur in Härtefällen und nach Absprache mit der Studioleitung möglich.</li>
            </ul>
        </section>

        {/* Freies Training */}
        <section className={styles.section}>
            <h2 className={styles.heading}>🏋️‍♀️ Freies Training</h2>
            <ul className={styles.list}>
            <li>Während des freien Trainings sind Trainer:innen anwesend, aber es handelt sich <strong>nicht um Personal Training oder ständige Aufsicht</strong>.</li>
            <li>Buchbar für alle, die mindestens einmal an einem Kurs teilgenommen haben oder vorher Kontakt zum Studio aufgenommen haben.</li>
            </ul>
        </section>

        {/* Haftungsausschluss */}
        <section className={styles.section}>
            <h2 className={styles.heading}>⚖️ Haftungsausschluss & Gesundheit</h2>
            <ul className={styles.list}>
            <li>Teilnahme an allen Kursen & Workshops erfolgt <strong>auf eigene Verantwortung</strong>.</li>
            <li>Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.</li>
            <li>Verletzungen wie blaue Flecken, Muskelkater oder Abschürfungen sind möglich und werden akzeptiert.</li>
            <li>Keine Haftung bei Selbstverschulden oder unzureichenden Angaben zu Vorerkrankungen.</li>
            <li>Keine Haftung für <strong>Verlust von Wertsachen</strong>.</li>
            </ul>
        </section>

        {/* Kursabsage */}
        <section className={styles.section}>
            <h2 className={styles.heading}>🚫 Rücktritt durch das Studio</h2>
            <ul className={styles.list}>
            <li>Bei Kursabsage verfällt dein Ticket <strong>nicht</strong>.</li>
            <li>Bezahlte Entgelte werden gutgeschrieben oder vollständig zurückerstattet.</li>
            <li>Das Studio kann Kurse bei unzureichender Teilnehmerzahl oder unvorhersehbaren Gründen absagen.</li>
            <li>Schadensersatzansprüche sind ausgeschlossen.</li>
            </ul>
        </section>

        {/* Sonstiges */}
        <section className={styles.section}>
            <h2 className={styles.heading}>📌 Sonstiges</h2>
            <ul className={styles.list}>
            <li>Datenschutz & Datenverarbeitung erfolgen gemäß der Datenschutzrichtlinie.</li>
            <li>Bei Inaktivität über 2 Jahre können Kundendaten gelöscht werden.</li>
            <li>AGB gelten bei Vertragsabschluss als akzeptiert und sind im Studio einsehbar.</li>
            </ul>
        </section>

        {/* Merch & Shop */}
        <section className={styles.section}>
            <h2 className={styles.heading}>🛍️ Merch & Shop</h2>
            <ul className={styles.list}>
            <li>Rückgabe innerhalb von <strong>30 Tagen</strong> möglich, außer bei:</li>
            <li>getragener Unterwäsche</li>
            <li>gewaschener Kleidung</li>
            <li>entfernten Etiketten</li>
            <li>geöffneten Gripmitteln</li>
            <li>getragenem Schmuck (z. B. Ohrringe)</li>
            </ul>
        </section>


        {/* Mitgliedschaften */}
        <section className={styles.section}>
            <h2 className={styles.heading}>📅 Mitgliedschaften</h2>
            <ul className={styles.list}>
                <li>Mitgliedschaften laufen über <strong>6 oder 12 Monate</strong>.</li>
                <li>Kündigung grundlos bis spätestens <strong>4 Wochen vor Vertragsende</strong> möglich.</li>
                <li>Kündigung per <strong>Mail, WhatsApp oder postalisch</strong> möglich.</li>
                <li>Wichtig: Kündigung muss spätestens 4 Wochen vor Ablauf bei uns eingegangen sein.</li>
                <li>Erfolgt keine Kündigung, <strong>verlängert sich der Vertrag automatisch</strong>.</li>
                <li>Bei Verlängerung können Preise angepasst werden – dies berechtigt zu einer sofortigen Kündigung zum Folgemonat.</li>
                <li>Kund:innen werden über Preisänderungen rechtzeitig informiert.</li>
                <li><strong>Zahlungsweise:</strong> Mitgliedschaften werden monatlich abgerechnet (z. B. per Lastschrift, PayPal, Kreditkarte). Die Zahlungspflicht besteht auch während einer Pause, außer es wird ausdrücklich anders vereinbart.</li>
                <li><strong>Pausenregelung:</strong> Eine Mitgliedschaft kann bis zu <strong>2x für 1–3 Monate</strong> pausiert werden. Die pausierte Zeit wird automatisch hinten angehängt. Pausen müssen vorher beantragt und von der Studioleitung bestätigt werden.</li>
                <li><strong>Upgrades, Downgrades oder Übertragung</strong> der Mitgliedschaft sind nur nach Absprache mit der Studioleitung oder einer autorisierten Vertretung möglich.</li>
                <li><strong>Sonderkündigung:</strong> Bei schwerwiegenden gesundheitlichen Gründen oder Umzug in eine andere Stadt kann eine vorzeitige Kündigung nach Einreichung eines Nachweises möglich sein.</li>
                <li>Wir möchten faire und flexible Lösungen für alle Mitglieder finden – sprich uns jederzeit an, wenn du individuelle Anliegen hast.</li>
            </ul>
        </section>

        </div>
      
     
    </div>
  );
}
