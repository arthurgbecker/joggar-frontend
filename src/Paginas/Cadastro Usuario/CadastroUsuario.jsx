import React, { useState } from 'react';
import { Link } from "react-router-dom"
import logoImageV from '/src/Assets/Imagens/logo_joggar-vertical.png';

import styles from './CadastroUsuario.module.css'

const CadastroUsuario = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com os dados do formulário de cadastro
        console.log('Formulário de cadastro submetido com sucesso!');
    };

    return (
        <div className={styles.containerCadastro}>
            <div className={styles.divEsquerda}>

                <h2>CRIE SUA CONTA</h2>
                <p>Já possui uma conta? Faça <a href="/login">login aqui.</a></p>

                <form className={styles.formCadastro} onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input type="text" value={name} onChange={handleNameChange} />

                    <label>E-mail:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />


                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label>Data de Nascimento:</label>
                            <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
                        </div>

                        <div className={styles.form_group}>
                            <label>Gênero:</label>
                            <select value={gender} onChange={handleGenderChange}>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </div>

                    <label>Telefone:</label>
                    <input type="text" value={phone} onChange={handlePhoneChange} />


                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label>Senha:</label>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className={styles.form_group}>
                            <label>Confirmar Senha:</label>
                            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        </div>
                    </div>

                    <div className={styles.divButton}>
                        <Link to="/preferencias">
                            <button type="submit">Salvar</button>
                        </Link>
                    </div>
                </form>
            </div>

            <div className={styles.divDireita}>
                <img src={logoImageV} alt="Logo JOGGAR" />
                <ul>
                    <li>Marque jogos com seus amigos.</li>
                    <li>Eventos presenciais e virtuais.</li>
                    <li>Busque eventos perto de você.</li>
                    <li>Tudo rápido e direto ao ponto!</li>
                </ul>
            </div>
        </div>
    );
};

export default CadastroUsuario;