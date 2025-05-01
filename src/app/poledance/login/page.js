"use client"

import React, { useContext } from 'react';

import styles from './Login.module.css'
import LoginForm from '../../../../components/Login/LoginForm'



const Login = () =>{


  return(
    <div className={styles.container}>
      <LoginForm />
    </div> 
  )
}

export default Login;