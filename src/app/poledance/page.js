"use client"
import { useState, useEffect } from 'react';
import { supabase } from '../../../services/supabaseClient';
import styles from './Poledance.module.css';


//CUSTOM COMPONENTS
import useScrollToSection from '../../../custom hooks/useScrollToSection';

export default function PoleDance() {


// fonts.js
const fontFamilies = [
  'Be Vietnam Pro',
  'Kumbh Sans',
  'Lexend Peta',

  'Wix Madefor Display',
  'Codystar',
  'Amiri',
];

  return (
    <div className={styles.container} id="topContainer">
    <h1> FONTS !</h1>
    
    {fontFamilies.map((fontFamily, index) => {
              // Erzeuge einen Klassennamen basierend auf der Schriftfamilie
              const className = fontFamily.replace(/\s+/g, '');

              return (
                  <h1 key={index} className={` ${styles[className]} text-8xl mx-10 my-4`}>
                      POLEGROUND
                  </h1>
              );
          })}
      
   
    </div>
  );
}

