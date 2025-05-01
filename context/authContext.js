"use client"
// authContext.js
// AuthContext.js
import React, { createContext, useState } from 'react';

// Erstelle den Kontext
export const AuthContext = createContext();

// Erstelle einen Provider-Komponenten
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Funktion zum Einloggen
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  // Funktion zum Ausloggen
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};