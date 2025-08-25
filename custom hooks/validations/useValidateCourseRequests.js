// hooks/useValidateCourseRequests.js
import { useState } from 'react';

const useValidateCourseRequests = (requests) => {
    const [errors, setErrors] = useState({});

    const isWithinOpeningHours = (time) => {
        if (!time) return false;
        const [hours, minutes] = time.split(':').map(Number);
        const selectedTime = new Date();
        selectedTime.setHours(hours, minutes);

        const openingTime = new Date();
        openingTime.setHours(10, 0);

        const closingTime = new Date();
        closingTime.setHours(21, 0);

        return selectedTime >= openingTime && selectedTime <= closingTime;
    };

    const isDateWithinRange = (date) => {
        if (!date) return false;
        const today = new Date();
        const oneMonthFromNow = new Date(today);
        oneMonthFromNow.setMonth(today.getMonth() + 1);

        const fiveMonthsFromNow = new Date(today);
        fiveMonthsFromNow.setMonth(today.getMonth() + 5);

        const selectedDate = new Date(date);

        return selectedDate >= oneMonthFromNow && selectedDate <= fiveMonthsFromNow;
    };

    const validateForm = () => {
        const newErrors = {};

        requests.forEach((request, index) => {
            if (!request.courseType) {
                newErrors[`courseType${index}`] = "Bitte wähle einen Kurs aus.";
            }
            if (!request.date) {
                newErrors[`date${index}`] = "Bitte wähle ein Datum aus.";
            } else if (!isDateWithinRange(request.date)) {
                newErrors[`date${index}`] = "Bitte überprüfe deine Eingaben nochmal. Das Datum eines Kurswunsches muss mindestens einen Monat und höchstens fünf Monate in der Zukunft liegen.";
            }

            if (!request.time) {
                newErrors[`time${index}`] = "Bitte gib eine Uhrzeit ein.";
            } else if (!isWithinOpeningHours(request.time)) {
                newErrors[`time${index}`] = "Die Uhrzeit muss innerhalb unserer Öffnungszeiten liegen, also zwischen 10:00 und 21:00 Uhr.";
            }

            if (!request.email) {
                newErrors[`email${index}`] = "Bitte gib eine E-Mail-Adresse ein.";
            } else if (!/\S+@\S+\.\S+/.test(request.email)) {
                newErrors[`email${index}`] = "Bitte gib eine gültige E-Mail-Adresse ein.";
            }
        });

        setErrors(newErrors);
        return newErrors;
    };

    return { errors, validateForm };
};

export default useValidateCourseRequests;
