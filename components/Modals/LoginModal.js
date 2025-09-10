"use client";
import { useState } from "react";
import styles from "./LoginModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/authReducer";


const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setLogin())
    /*if (onLogin) {
      onLogin({ email, password });
    }*/
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </form>
        <p className={styles.helperText}>
          No account yet? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
