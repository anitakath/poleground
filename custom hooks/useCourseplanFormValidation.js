

const useCoursePlanFormValidation = () => {

  const validateForm = (formData, courseData, dates) => {
    const errors = {};

    if (!formData.group || formData.group.trim() === "" || formData.group === "noValue") {
      errors.group = "Bitte wählen Sie eine Gruppe aus.";
    }

    if (!formData.title || formData.title.trim() === "") {
      errors.title = "Der Titel ist erforderlich.";
    }

    if (!formData.description || formData.description.trim() === "") {
      errors.description = "Die Beschreibung ist erforderlich.";
    }

    if (!formData.instructor || formData.instructor.trim() === "" || formData.instructor === "noValue") {
      errors.instructor = "Der Instruktor ist erforderlich.";
    }

    if (!formData.level || formData.level.trim() === "" || formData.level === "noValue") {
      errors.level = "Bitte wählen Sie ein Level aus.";
    }

    if (!formData.room || formData.room.trim() === "" || formData.room === "noValue") {
      errors.room = "Der Raum ist erforderlich.";
    }

    // Validierung für alle hinzugefügten Dates
    dates.forEach((date, idx) => {
      if (!date.scheduled_at || date.scheduled_at.trim() === "") {
        errors[`scheduled_at_${idx}`] = `Datum und Uhrzeit für Termin ${idx + 1} sind erforderlich.`;
      }

      if (!date.duration || isNaN(date.duration) || date.duration <= 0 || date.duration === "noValue") {
        errors[`duration_${idx}`] = `Bitte geben Sie eine gültige Dauer für Termin ${idx + 1} ein.`;
      }

      // Überschneidungsprüfung
      if (date.scheduled_at && date.duration && formData.room && courseData.length > 0) {
        const newStartTime = new Date(date.scheduled_at);
        const newEndTime = new Date(newStartTime.getTime() + date.duration * 60000);

        for (const existingCourse of courseData) {
          if (existingCourse.room !== formData.room) continue;

          const existingStartTime = new Date(existingCourse.scheduled_at);
          const existingEndTime = new Date(existingStartTime.getTime() + existingCourse.duration * 60000);

          const isOverlap =
            newStartTime < existingEndTime && newEndTime > existingStartTime;

          if (isOverlap) {
            errors[`scheduled_at_${idx}`] =
              `Termin ${idx + 1} überschneidet sich mit dem Kurs "${existingCourse.title}" im Raum "${existingCourse.room}" (Beginn: ${existingCourse.scheduled_at}).`;
            break;
          }
        }
      }
    });

    return errors;
  };

  return { validateForm }
}

export default useCoursePlanFormValidation;


/*
const useCoursePlanFormValidation = () =>{

    const validateForm = (formData, courseData) => {
        const errors = {};
      
        if (!formData.group || formData.group.trim() === "" || formData.group === "noValue") {
          errors.group = "Bitte wählen Sie eine Gruppe aus.";
        }
      
        if (!formData.title || formData.title.trim() === "") {
          errors.title = "Der Titel ist erforderlich.";
        }
      
        if (!formData.description || formData.description.trim() === "") {
          errors.description = "Die Beschreibung ist erforderlich.";
        }
      
        if (!formData.scheduled_at || formData.scheduled_at.trim() === "") {
          errors.scheduled_at = "Das Datum und die Uhrzeit sind erforderlich.";
        } else {
          // Optional: Überprüfen, ob das Datum im richtigen Format ist
          // z.B. mit einem Regex oder Date-Parsing
        }
      
        if (!formData.duration || isNaN(formData.duration) || formData.duration <= 0 || formData.duration === "noValue") {
          errors.duration = "Bitte geben Sie eine gültige Dauer in Minuten ein.";
        }
      
        if (!formData.instructor || formData.instructor.trim() === "" || formData.instructor === "noValue") {
          errors.instructor = "Der Instruktor ist erforderlich.";
        }
      
        if (!formData.level || formData.level.trim() === "" || formData.level === "noValue") {
          errors.level = "Bitte wählen Sie ein Level aus.";
        }
      
        if (!formData.room || formData.room.trim() === "" || formData.room === "noValue") {
          errors.room = "Der Raum ist erforderlich.";
        }
      
        // Weitere Validierungen nach Bedarf...

         // Neue Validierung: Überschneidungen prüfen
    if (formData.scheduled_at && formData.room && courseData.length > 0) {
        const newStartTime = new Date(formData.scheduled_at);
  
        for (const existingCourse of courseData) {
          // Nur Kurse im selben Raum
          if (existingCourse.room !== formData.room) continue;
  
          const existingStartTime = new Date(existingCourse.scheduled_at);
          const existingDurationMinutes = existingCourse.duration; // Annahme: Dauer in Minuten
  
          // Berechne Endzeit des bestehenden Kurses
          const existingEndTime = new Date(existingStartTime.getTime() + existingDurationMinutes * 60000);
  
          // Prüfe auf Überschneidung:
          // Neue Startzeit < bestehende Endzeit UND Neue Endzeit > bestehende Startzeit
          const newEndTime = new Date(newStartTime.getTime() + formData.duration * 60000);
  
          const isOverlap =
            newStartTime < existingEndTime && newEndTime > existingStartTime;
  
          if (isOverlap) {
            errors.scheduled_at =
              `Es gibt eine Überschneidung mit dem Kurs "${existingCourse.title}" im Raum "${existingCourse.room}", (Beginn: ${existingCourse.scheduled_at}). Probiere es mit einem anderen Raum, oder einer anderen Uhrzeit.`;
            break; // Bei erster gefundenen Überschneidung abbrechen
          }
        }
    }
      
        return errors;
      };

    return{validateForm}
}

export default useCoursePlanFormValidation*/