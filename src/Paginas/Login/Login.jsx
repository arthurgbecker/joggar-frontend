import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData };

        if (name.includes('.')) {
            const [nestedField, subField] = name.split('.');
            updatedFormData[nestedField] = { ...updatedFormData[nestedField], [subField]: value };
        } else {
            updatedFormData[name] = value;
        }

        setFormData(updatedFormData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/login', formData);
    
            const { token, refreshToken } = response.data;
    
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
    
            console.log('Login efetuado com sucesso', response.data);
            toast.success('Login efetuado com sucesso');
    
            // Atrasa o redirecionamento em 2 segundos
            setTimeout(() => {
                window.location.href = '/feed';
            }, 1500);
    
        } catch (error) {
            console.error('Erro ao realizar o login:', error);
            toast.error('Erro ao realizar o login');
        }
    };

    return (
        <div className={styles.containerLogin}>
            <div className={styles.divLogin}>
                <h2>Login</h2>
                <p>Não possui conta? <Link to="/cadastro">Cadastre-se aqui.</Link></p>

                <form className={styles.formLogin} onSubmit={handleSubmit}>
                    <label>E-mail:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleInputChange}
                    />

                    <div className={styles.divButton}>
                        <button type="submit"><b>Fazer Login</b></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;