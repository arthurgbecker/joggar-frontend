import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import logoImageV from '/src/Assets/Imagens/logo_joggar-vertical.png';

import styles from './CadastroUsuario.module.css'

const EditUsuario = () => {

    const { id } = useParams();
    const [usuario, setUsuario] = useState({
        nome: '',
        nascimento: '',
        generoUsuario: 'outro',
        email: '',
        senha: '',
        telefone: '',
        isAdmin: ''
    });

    useEffect(() => {
        const fetchUusario = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/usuarios/${id}`);
                const usuarioData = response.data;
                setUsuario(usuarioData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUusario();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsuario((precUsuario) => ({
            ...precUsuario,
            [name]: value,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const updateUsuario = async () => {
            try {
                // Verifique se a URL está correta e se o evento contém os dados corretos
                console.log(`URL: http://localhost:8080/usuarios/${id}`);
                console.log('Usuário data:', usuario);

                const response = await axios.put(`http://localhost:8080/usuarios/${id}`, usuario);
                console.log('Response:', response.data);
                console.log('Usuário alterado com sucesso!');
            } catch (error) {
                console.error('Error updating usuário:', error);
            }
        };

        updateUsuario();
    };


    return (
        <div className={styles.containerCadastro}>
            <div className={styles.divEsquerda}>

                <h2>EDITAR DADOS DA CONTA</h2>
                <p>
                    Fez uma curva errada? Retorne para o seu{' '}
                    <Link to="/feed">feed aqui.</Link>
                </p>

                <form className={styles.formCadastro} onSubmit={handleSave}>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={usuario.nome}
                        onChange={handleInputChange}
                    />
                    <label>E-mail:</label>
                    <input
                        type="text"
                        name="email"
                        value={usuario.email}
                        onChange={handleInputChange}
                    />

                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label>Data de Nascimento:</label>
                            <input
                                type="date"
                                name="nascimento"
                                value={usuario.nascimento}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label>Gênero:</label>
                            <select
                                type="text"
                                name="generoUsuario"
                                value={usuario.generoUsuario}
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
                        value={usuario.telefone}
                        onChange={handleInputChange}
                    />

                    <div className={styles.form_row}>
                        <div className={styles.form_group}>
                            <label>Senha:</label>
                            <input
                                type="password"
                                name="senha"
                                value={usuario.senha}
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
                            value={usuario.isAdmin}
                            onChange={handleInputChange}
                        >
                        </input>

                    </div>

                    <div className={styles.divButton}>
                        <Link to="/preferencias">
                            <button onClick={handleSave}>Salvar</button>
                        </Link>
                    </div>
                </form>
            </div>

            <div className={styles.divDireita}>
                <img src={logoImageV} alt="Logo JOGGAR" />

            </div>
        </div>
    );

}

export default EditUsuario;