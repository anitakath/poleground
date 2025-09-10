"use client"
import { useState, useContext } from 'react';
import styles from './Login.module.css';
import { AuthContext } from "../../context/authContext";
import { useRouter } from 'next/navigation';
import { Link } from 'react-router-dom';


const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Die Passwörter stimmen nicht überein!");
      return;
    }

    // Daten an API schicken
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Registrierung erfolgreich!');

      // Automatisch einloggen
      login();

      setTimeout(() => {
        router.push('/poledance/dashboard');
      }, 1000);

    } else {
      setMessage('Fehler: ' + data.message);
    }
  };

  return (
    <div className={styles.container}>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Benutzername:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>E-Mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Passwort:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Passwort wiederholen:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>Registrieren</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}

    </div>
  );
};

export default RegisterForm;
