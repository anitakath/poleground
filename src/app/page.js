"use client" 
import Image from "next/image"; 
import styles from './Start.module.css';
import Link from "next/link";
import { useTitle } from "../../context/TitleContext";

export default function Home() { 

  const {setTitle} = useTitle();

  /*  <div className={`w-6/12 flex justify-center ${styles.slider_div}`}> 
                  <Link href="/figureskating">
                   <Image src="/Start/figureskating.jpg" alt="Figure Skating" layout="fill" objectFit="cover" /> 
                  </Link>
                    
      </div> 
                

  */


    return ( 
      <div className="h-screen  relative  overflow-scroll gap-16 font-[family-name:var(--font-geist-sans)]"> 
            <div className={`flex w-full h-full justify-center ${styles.flexContainer}`}> 
               
            <Link href="/poledance" className={styles.link}>
                  <Image src="/Start/poledance.jpg" alt="Poledance" layout="fill" objectFit="cover" className={styles.image}/> 
            </Link>
              
            </div> 
        </div> 
    ); 
}