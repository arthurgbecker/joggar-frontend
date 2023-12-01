import React from 'react';
import { Link } from "react-router-dom"
import styles from './Home.module.css'

import logoImageV from '/src/Assets/Imagens/logo_joggar-vertical.png';

const Home = () => {
    return (
        <div className={styles.home_container}>
          <img src={logoImageV} alt="Logo JOGGAR" />
          <h1>Marque Jogos Com<br/>Seus Amigos</h1>
          <p><b>JOGGAR</b>: um aplicativo fácil, prático e gratuito</p>
          <div className={styles.button_container}>
            <Link to="/login">
              <button className={styles.btn}>Login</button>
            </Link>
            <Link to="/cadastro">
              <button className={styles.btn}>Cadastro</button>
            </Link>
          </div>
        </div>
      );
    };


export default Home