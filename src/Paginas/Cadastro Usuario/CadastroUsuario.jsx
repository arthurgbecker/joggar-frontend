import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import logoImageV from '/src/Assets/Imagens/logo_joggar-vertical.png';

import styles from './CadastroUsuario.module.css'

const CadastroUsuario = () => {
    const navigate = useNavigate(); // Adiciona o hook useNavigate

    const [formData, setFormData] = useState({
        nome: '',
        nascimento: '',
        generoUsuario: 'outro',
        email: '',
        senha: '',
        telefone: '',
        isAdmin: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Faça uma cópia profunda do estado
        const updatedFormData = { ...formData };

        // Atualize o estado para campos aninhados
        if (name.includes('.')) {
            const [nestedField, subField] = name.split('.');
            updatedFormData[nestedField] = { ...updatedFormData[nestedField], [subField]: value };
        } else {
            updatedFormData[name] = value;
        }

        // Atualize o estado com a cópia atualizada
        setFormData(updatedFormData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/usuarios', formData);

            // Lógica adicional após a criação do evento (se necessário)
            console.log('Cadastro criado com sucesso:', response.data);
            alert('Login efetuado com sucesso');

            navigate('/preferencias');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    };


    return (
        <div className={styles.containerCadastro}>
            <div className={styles.divEsquerda}>

                <h2>CRIE SUA CONTA</h2>
                <p>Já possui uma conta? Faça <a href="/login">login aqui.</a></p>

                <form className={styles.formCadastro} onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                    />
                    <label>E-mail:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label>Data de Nascimento:</label>
                            <input
                                type="date"
                                name="nascimento"
                                value={formData.nascimento}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label>Gênero:</label>
                            <select
                                type="text"
                                name="generoUsuario"
                                value={formData.generoUsuario}
                                onChange={handleInputChange}
                            >
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </div>

                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
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
                            />                        </div>
                        <div className={styles.form_group}>
                            <label>Confirmar Senha:</label>
                            <input
                                type="password"
                                name="confirmaSenha"
                            />
                        </div>
                        
                        <label>ADM:</label>
                        <input
                            type="checkbox"
                            name="isAdmin"
                            value={formData.isAdmin}
                            onChange={handleInputChange}
                        >
                        </input>

                    </div>

                    <div className={styles.divButton}>
                        <Link to="/preferencias">
                            <button onClick={handleSubmit}>Salvar</button>
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