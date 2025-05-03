import { courses as initialCourses } from "@/app/data/courseData";

let courses = initialCourses; // In-Memory-Daten

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Kurse ausgeben
    res.status(200).json(courses);
  } else if (req.method === 'POST') {
    // Neuer Kurs hinzufügen
    const newCourse = req.body;
    // Optional: Validierung
    // z.B. prüfen, ob newCourse alle nötigen Felder hat
    // und dann hinzufügen:
    const group = newCourse.group;
    if (!courses[group]) {
      courses[group] = [];
    }
    courses[group].push(newCourse);
    res.status(201).json({ message: 'Kurs hinzugefügt', course: newCourse });
  } else if (req.method === 'PUT') {
    // Kurs aktualisieren
    const updatedCourse = req.body;
    const { group, id } = updatedCourse;
    if (!courses[group]) {
      return res.status(404).json({ error: 'Gruppe nicht gefunden' });
    }
    const index = courses[group].findIndex(c => c.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Kurs nicht gefunden' });
    }
    courses[group][index] = updatedCourse;
    res.status(200).json({ message: 'Kurs aktualisiert', course: updatedCourse });
  } else if (req.method === 'DELETE') {
    // Kurs löschen
    const { group, id } = req.query; // z.B. ?group=DANCE&id=DANCE-1
    if (!courses[group]) {
      return res.status(404).json({ error: 'Gruppe nicht gefunden' });
    }
    courses[group] = courses[group].filter(c => c.id !== id);
    res.status(200).json({ message: 'Kurs gelöscht' });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}