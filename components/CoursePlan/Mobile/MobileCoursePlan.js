import React from 'react';
import { useEffect, useState } from 'react';
import CoursePlanHeader from '../CoursePlanHeader';
import style from '../CoursePlan.module.css';
import styles from './MobileCoursePlan.module.css';
import useTimesAndDates from '../../../custom hooks/useTimesAndDates';
const MobileCoursePlan = ({ courses, currentWeekStart }) => {
    const courseArray = Object.values(courses).flat(); // Flacht das Array der Arrays ab
    const { getHour, getMinutes, convertDate } = useTimesAndDates();
  
    const currentWeek = convertDate(currentWeekStart);
  
    const getCoursesForCurrentWeek = (currentWeekStart, dayIndex) => {
      const startOfWeek = new Date(currentWeekStart);
      const targetDate = new Date(startOfWeek);
      targetDate.setDate(startOfWeek.getDate() + dayIndex); // dayIndex: 0 = Montag, 1 = Dienstag, etc.
  
      return courseArray.filter(course => {
        const courseDate = new Date(course.scheduled_at);
        return courseDate.toDateString() === targetDate.toDateString(); // Vergleiche das Datum
      });
    };
  
    return (
      <div className={styles.mobileCoursePlanContainer}>
        <div className={styles.courseList}>
          {['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'].map((day, dayIndex) => {
            const dayCourses = getCoursesForCurrentWeek(currentWeekStart, dayIndex);
  
            return (
              <div key={day} className={styles.dayContainer}>
                <h2 className={styles.dayHeader}>{day}</h2>
  
                {/* Überprüfe die Kurse für den aktuellen Tag */}
                {dayCourses.length === 0 ? (
                  <p>Heute keine Kurse</p> // Wenn keine Kurse vorhanden sind
                ) : (
                  <>
                    {/* Stunden von 10 bis 22 */}
                    {[...Array(13)].map((_, hourIndex) => {
                      const hour = hourIndex + 10; 
                      const hourCourses = dayCourses.filter(course => {
                        const courseHour = new Date(course.scheduled_at).getHours();
                        return courseHour === hour;
                      });
  
                      if (hourCourses.length === 0) return null;
  
                      return (
                        <div key={hour} className={styles.hourRow}>
                          {hourCourses.map(course => {
                            let backgroundColor;
                            switch (course.group) {
                              case 'POLE':
                                backgroundColor = 'var(--POLE)';
                                break;
                              case 'FLEXIBILITY':
                                backgroundColor = 'var(--FLEXIBILITY)';
                                break;
                              case 'DANCE':
                                backgroundColor = 'var(--DANCE)';
                                break;
                              case 'PLAYGROUND':
                                backgroundColor = 'var(--PLAYGROUND)';
                                break;
                              case 'SPECIALS':
                                backgroundColor = 'var(--SPECIALS)';
                                break;
                              default:
                                backgroundColor = 'transparent';
                            }
  
                            return (
                              <div 
                                key={course.title} 
                                className={styles.courseItem} 
                                style={{ backgroundColor }} 
                                onClick={() => openCheckoutModal(course)}
                              >
                                <h1>{course.scheduled_at}</h1>
                                <h3>{course.title}</h3>
                                <p>{getHour(course.scheduled_at)} - {getMinutes(course.duration)}</p>
                                <p>{course.level}, {course.room}, {course.spots} freie Plätze</p>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default MobileCoursePlan;