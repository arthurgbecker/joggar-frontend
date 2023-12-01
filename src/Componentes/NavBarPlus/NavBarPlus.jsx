import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faUserGroup, faCirclePlus, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import styles from './NavBarPlus.module.css';
import logoImageH from '/src/Assets/Imagens/logo_joggar-horizontal_branco.png';

library.add(faHouse, faUserGroup, faCirclePlus, faBell, faUser);

const NavBarPlus = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpa os tokens do localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');

        // Usa window.location.href para forçar um reload de página completo
        window.location.href = '/';
    };

    return (
        <header className={styles.menuPlus}>
            <div className={styles.divLeft}>
                <div className={styles.logo}><a href="/feed"><img src={logoImageH} alt="Logo" /></a></div>
                <div className={styles.search_bar}>
                    <input type="text" placeholder="Pesquisar" />
                    <button>Buscar</button>
                </div>
            </div>
            <div className={styles.divRight}>
                <div className={styles.barIcon}><a href="/feed"><FontAwesomeIcon icon={faHouse} size='lg' /></a></div>
                {/* <div className={styles.barIcon}><a href="#"><FontAwesomeIcon icon={faUserGroup} size='lg' /></a></div> */}
                <div className={styles.barIcon}><a href="/eventos"><FontAwesomeIcon icon={faCirclePlus} size='lg' /></a></div>
                <div className={styles.barIcon}><a href="/editpreferencias"><FontAwesomeIcon icon={faBell} size='lg' /></a></div>
                <div className={styles.barIcon}><a href="/usuario"><FontAwesomeIcon icon={faUser} size='lg' /></a></div>
                <Link className={styles.logoutNavBar} onClick={handleLogout} to="/">Logout</Link>
            </div>
        </header>
    );
}

export default NavBarPlus;
