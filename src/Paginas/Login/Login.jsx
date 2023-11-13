import { Link } from "react-router-dom"
import React, { useState } from 'react';

import styles from './Login.module.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para verificar o nome de usuário e a senha
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <Link to={`/feed`}>
                    <button type="submit">Entrar</button>
                </Link>
            </form>
        </div>
    );
};


export default Login