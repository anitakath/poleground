

const useTimesAndDates = () => {


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
    
  
    return { getHour, getMinutes };
  };
  
  export default useTimesAndDates;