
import styles from './Register.module.css'
//COMPONENTS
import RegisterForm from '../../../components/Login/RegisterForm'
import Link from 'next/link'
const Register = () =>{


    return(

        <div className={styles.container}>
            <RegisterForm/>

       
        </div>
    )
}

export default Register