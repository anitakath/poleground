"use client"
import styles from './Poledance.module.css';
//COMPONENTS
import CoursePlan from '../../../components/CoursePlan/CoursePlan';
import MobileCoursePlan from '../../../components/CoursePlan/Mobile/MobileCoursePlan';
import CourseDescription from '../../../components/CourseDescription/CourseDescription';
import PrivateParties from '../../../components/CoursePlan/PrivateParties';

export default function PoleDance() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>

      <div className='flex justify-between items-center'>
        <h1 className={styles.title}>POLEGROUND</h1>

        <div className=''> 
          <button className={styles.socialButton}> IG </button>
          <button className={styles.socialButton}> tiktok </button>
        </div>
      </div>
      

      <div className={styles.buttonsContainer}>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={() => scrollToSection('table')}>Kursplan</button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={() => scrollToSection('descriptions')}>Kursbeschreibungen + Preise</button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={() => scrollToSection('privateParties')}>Private Parties</button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={() => scrollToSection('workshops')}>Workshops</button>
        </div>
      </div>
      <div className={styles.subContainer} id="table">
        <div className={styles.subContainerDiv}> 
            <CoursePlan/> 
            <MobileCoursePlan/>
        </div>
      </div>
      <div className={styles.subContainer} id="descriptions">
        <div className={styles.subContainerDiv}>
          <CourseDescription/>
          {/*  ---------- MODAL ---------- */}
          {/*  ---------- MODAL ---------- */}
          {/*  ---------- MODAL ---------- */}
        </div>
      </div>
      <div className={styles.subContainer} id="privateParties">
        <div className={styles.subContainerDiv}>
          <PrivateParties/>

        </div>
      </div>
      <div className={styles.subContainer} id="workshops">
      <div className={styles.subContainerDiv}> WORKSHOPS & UPCOMING EVENTS </div>
      </div>
    </div>
  );
}