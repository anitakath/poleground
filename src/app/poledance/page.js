"use client"
import Image from 'next/image';
import styles from './Poledance.module.css';
//COMPONENTS
import CoursePlan from '../../../components/CoursePlan/CoursePlan';
import MobileCoursePlan from '../../../components/CoursePlan/Mobile/MobileCoursePlan';
import CourseDescription from '../../../components/CourseDescription/CourseDescription';
import PrivateParties from '../../../components/CoursePlan/PrivateParties';
import Retreat from '../../../components/Events/Retreat';
import PriceTable from '../../../components/CourseDescription/PriceTable';
//CUSTOM COMPONENTS
import useScrollToSection from '../../../custom hooks/useScrollToSection';

export default function PoleDance() {

  
  const {scrollToSection} = useScrollToSection();

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
       

        <div className={styles.buttonsContainer}>
          <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={() => scrollToSection('table')}> Kursplan </button>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={() => scrollToSection('descriptions')}> Kursbeschreibungen + Preise </button>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={() => scrollToSection('privateParties')}> Private Parties </button>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={() => scrollToSection('workshops')}> Events </button>
          </div>
        </div>

        <div className={styles.headerImageContainer}> 
          <Image 
            alt=" picture of polegrounds studio "
              src="/Start/poledance.jpg" 
              width={800} 
              height={800}
              className={styles.headerImage}
          />
        </div>
      

      </div>

      


      <div className={styles.subContainer} id="table">
        <div className={styles.subContainerDiv}> 
            <CoursePlan/> 
            <MobileCoursePlan/>
        </div>
      </div>
      <div className={styles.subContainer} id="descriptions">
        <CourseDescription/>
        <div className={styles.subContainerDiv}>
        <PriceTable />
         
        </div>
      </div>
      <div className={styles.subContainer} id="privateParties">
        <div className={styles.subContainerDiv}>
          <PrivateParties/>

        </div>
      </div>
      <div className={styles.subContainer} id="workshops">
        <h1 className='mb-2 ml-2 text-xl'> WORKSHOPS, EVENTS & RETREATS</h1>
        <div className={styles.subContainerDiv}> 
          <Retreat/>
        </div>
      </div>

      <div className='flex justify-center h-20'> 
            <button className={styles.socialButton}> 
              <Image alt="button to connect with us via instagram" src="/iconpng/icons8-instagram-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>

            <button className={styles.socialButton}> 
              <Image  alt="button to connect with us via tiktok" src="/iconpng/icons8-tick-tack-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>

            <button className={styles.socialButton}> 
              <Image   alt="button to connect with us via telephone" src="/iconpng/icons8-telefon-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>

            <button className={styles.socialButton}> 
              <Image  alt="button to connect with us via email" src="/iconpng/icons8-mail-50.png" width={40} height={40} className={styles.socialIcon}/> 
            </button>
          </div>
    </div>
  );
}