
  export async function POST(request) {
    const { username, password } = await request.json();

    // Hier deine geheime Benutzername und Passwort aus Umgebungsvariablen holen
    const validUsername = process.env.REGISTRATION_USERNAME; 
    const validPassword = process.env.REGISTRATION_PASSWORD;

    if (username === validUsername && password === validPassword) {
        return new Response(JSON.stringify({ message: 'Erfolg' }), { status:200 });
    } else {
        return new Response(JSON.stringify({ message:'Ungültige Anmeldedaten' }), { status:401 });
    }
}