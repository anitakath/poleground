"use client"
import DashboardComponent from "../../../../components/Dashboard/Dashboard"
import { AuthContext } from "../../../../context/authContext";
import styles from './Dashboard.module.css'
import React, { useContext } from 'react';
import Link from "next/link";

const Dashboard= () =>{

  const { isLoggedIn, login, logout } = useContext(AuthContext);
  //const dispatch = useDispatch()

  const handleLogout = () => {
    logout();
  };

  return(
      <div className={styles.container}>

        {!isLoggedIn ? (
        <div>
            <DashboardComponent  />
          <button onClick={handleLogout}>Ausloggen</button>
        </div>
      ) : (
        <div className='w-full'>
            <Link href="/poledance/login"> zum Login </Link>
  
        </div>
      )}
   
        </div>
    )
}

export default Dashboard
