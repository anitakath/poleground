"use client"
// app/poledance/kursbeschreibung/[title]/page.js
import { usePathname } from "next/navigation";

export default function CourseDetail() {

    const currentPath = usePathname(); 

 // Den Titel aus dem aktuellen Pfad extrahieren
 const extractedTitle = currentPath.split('/').pop().replace(/-/g, ' '); // Ersetze Bindestriche durch Leerzeichen


  
    return (
      <div>
        <h1>Kursbeschreibung für: {extractedTitle}</h1>

        {/* Hier kannst du weitere Details zum Kurs hinzufügen */}
      </div>
    );
  }