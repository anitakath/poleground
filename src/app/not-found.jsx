import Link from "next/link";
import styles from './Start.module.css'

const Notfound = () =>{

    return(

       <div className={styles.container}>
         <div className="w-full p-2 h-96 flex flex-col items-center justify-center ">
            <h1> Seite konnte nicht gefunden werden </h1>
            <p> eventuell ist sie noch im Aufbau</p>

            <p> zurück zur <Link href="/"> Startseite </Link></p>
        
        </div>
       </div>
    )
}

export default Notfound;