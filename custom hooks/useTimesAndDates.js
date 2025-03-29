

const useTimesAndDates = () => {

  const convertDate = (date) => {
    // Erstelle ein neues Date-Objekt
    const startDate = new Date(date);

    // Berechne das Enddatum (eine Woche später)
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7); // 7 Tage hinzufügen

    // Definiere die Optionen für die Datumsformatierung
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    // Formatiere die Daten
    const formattedStartDate = startDate.toLocaleDateString('de-DE', options).replace(',', '');
    const formattedEndDate = endDate.toLocaleDateString('de-DE', options).replace(',', '');

    // Gib das gewünschte Format zurück
    return `${formattedStartDate.split(' ')[0]} - ${formattedEndDate.split(' ')[0]} ${formattedEndDate.split(' ')[1]} ${formattedEndDate.split(' ')[2]}`;
};


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
    
  
    return { getHour, getMinutes, convertDate};
  };
  
  export default useTimesAndDates;