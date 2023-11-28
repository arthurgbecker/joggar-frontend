import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate(); // Adiciona o hook useNavigate

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

            console.log('Login efetuado com sucesso', response.data);
            alert('Login efetuado com sucesso');

            // Redireciona para a página '/feed'
            navigate('/feed');
            
        } catch (error) {
            console.error('Erro ao realizar o login:', error);
        }
    };

    return (
        <div className={styles.containerLogin}>
            <div className={styles.divEsquerda}>
                <h2>Login</h2>
                <p>Não possui conta?<Link to="/cadastro">cadastre aqui.</Link></p>

                <form className={styles.formLogin} onSubmit={handleSubmit}>
                    <label>E-mail:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label>Senha:</label>
                            <input
                                type="password"
                                name="senha"
                                value={formData.senha}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className={styles.divButton}>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
