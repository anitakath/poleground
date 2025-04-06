"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../../../services/supabaseClient';
import styles from './Helpdesk.module.css';
import Link from 'next/link';

const HelpDesk = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const { data, error } = await supabase
                    .from('poleground_faq')
                    .select('*');

                if (error) throw error;

                setFaqs(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const openAnswerHandler = (faq) =>{

        console.log(faq)
        setOpenAnswers( ...prev, faq)


    }


    const handleTitleClick = (index) => {
        setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
    };



    return (
        <div className={styles.container}>
            <h1 className={styles.title}>F.A.Q.</h1>
          
          
           
            <div className={styles.subContainer}>
                {faqs.map((faq, index) => (
                    <div className={styles.questionItem} key={faq.question}>
                        <button key={faq.id} className={styles.questionButton} onClick={() => handleTitleClick(index)}>
                            <strong className={styles.strong}>{faq.question}</strong> <br/>
                        </button>

                        {activeQuestionIndex === index && (
                            <div>
                                <p className={styles.questionParagraph}>  {faq.answer} </p>
                                {faq.question === "Sind die Kurse für Frauen und Männer geeignet?" && (
                                    <div>
                                        <p> Lies    <Link href="/poledance/ueber-uns" className={styles.link}> hier </Link> gern weiter, um mehr über unser Leitbild zu erfahren.</p>
                                      
                                     
                                    </div>
                                )}
                                 {faq.question === "Wie kann ich mich für einen Kurs anmelden?" && (
                                    <div>
                                        <p> Du findest den Stundenplan sowie die Möglichkeit der Kursbuchung    <Link href="/poledance" className={styles.link}> hier </Link> unter "Kursplan". </p>
                                      
                                     
                                    </div>
                                )}
                            </div>
                        )}


                       </div>

                ))}
                    <p> deine Frage ist nicht mit dabei? Kontaktiere uns gern per
                        <a href="mailto:wagner.annekathirn@gmx.de" className={styles.link}> E-Mail </a> 
                        oder WhatsApp: <span className={styles.telephone}> 0176-123456789</span></p>
                    <p></p>
            </div>

        </div>
    );
};

export default HelpDesk;