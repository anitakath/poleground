

const useTimesAndDates = () => {


  //Funktion gibt Zeitspanne einer Woche aus nur einem Tag an
  // aus 2025-04-13T10:00:00 wird  zb 7. - 13. April 2025

  const convertDate = (date) => {
    // Erstelle ein neues Date-Objekt
    const startDate = new Date(date);

    // Berechne das Enddatum (eine Woche später)
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6); // 7 Tage hinzufügen

    // Definiere die Optionen für die Datumsformatierung
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    // Formatiere die Daten
    const formattedStartDate = startDate.toLocaleDateString('de-DE', options).replace(',', '');
    const formattedEndDate = endDate.toLocaleDateString('de-DE', options).replace(',', '');

    // Gib das gewünschte Format zurück
    return `${formattedStartDate.split(' ')[0]} - ${formattedEndDate.split(' ')[0]} ${formattedEndDate.split(' ')[1]} ${formattedEndDate.split(' ')[2]}`;
  };


  // Funktion formatiert das Datum + die Uhrzeit des Tages, 
  // aus 2025-04-07T16:00:00 wird 07. April, 2025 - 16:00

  const formatDate = (isoString) => {
    const date = new Date(isoString);

    // Array mit Monatsnamen
    const months = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    // Formatierung des Datums
    const day = String(date.getDate()).padStart(2, '0'); // Tag mit führender Null
    const month = months[date.getMonth()]; 
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0'); // Stunden mit führender Null
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minuten mit führender Null

    return `${day}. ${month}, ${year} - ${hours}:${minutes}`;
};

  // Beispielaufruf
  const scheduledAt = "2025-04-07T16:00:00";
  const formattedDate = formatDate(scheduledAt);


    const getHour = (scheduledAt) => {
      
      //"2025-03-20T10:00:00" => 10:00

      const date = new Date(scheduledAt);
      const hours = String(date.getHours()).padStart(2, '0'); 
      const minutes = String(date.getMinutes()).padStart(2, '0'); 
      return `${hours}:${minutes}`; 
    };


    const getMinutes = (duration) => {
        if (duration >= 120) {
          const hours = Math.floor(duration / 60); 
          const remainingMinutes = duration % 60; 
          return `${hours}h ${remainingMinutes}min`; 
        } else {
          return `${duration} min`;
        }
      };
    
  
    return { getHour, getMinutes, convertDate, formatDate};
  };
  
  export default useTimesAndDates;