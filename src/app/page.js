import Image from "next/image"; 
import styles from './Start.module.css';
import Link from "next/link";

export default function Home() { 


    return ( 

      
        <div className="h-screen bg-red-300 relative  overflow-scroll gap-16 font-[family-name:var(--font-geist-sans)]"> 
            <div className={`flex w-full h-full justify-center ${styles.flexContainer}`}> 
                <div className={`w-6/12 flex justify-center ${styles.slider_div}`}> 
                <Link href="/poledance">
                  <Image src="/Start/poledance.jpg" alt="Poledance" layout="fill" objectFit="cover" /> 
                </Link>
                    
                </div> 
                <div className={`w-6/12 flex justify-center ${styles.slider_div}`}> 
                <Link href="/figureskating">
                  <Image src="/Start/figureskating.jpg" alt="Figure Skating" layout="fill" objectFit="cover" /> 
                </Link>
                    
                </div> 
                
            </div> 
        </div> 
    ); 
}