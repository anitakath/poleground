"use client"
import DashboardComponent from "../../../../components/Dashboard/Dashboard"
import { AuthContext } from "../../../../context/authContext";
import styles from './Dashboard.module.css'
import React, { useContext } from 'react';
import Link from "next/link";

const Dashboard=  () =>{

    const { isLoggedIn, login, logout } = useContext(AuthContext);


    const handleLogout = () => {
        logout();
    };




    return(
        <div className={styles.container}>
        {!isLoggedIn ? (
        <div>
          <p>Willkommen!</p>
            <DashboardComponent />
          <button onClick={handleLogout}>Ausloggen</button>
        </div>
      ) : (
        <div className='w-full'>
            <Link href="/poledance/login"> zum Login </Link>
  
        </div>
      )}
   
        </div>
    )

    return(
        <div>
        Dashboard
        <DashboardComponent/>
        </div>
    )
}

export default Dashboard