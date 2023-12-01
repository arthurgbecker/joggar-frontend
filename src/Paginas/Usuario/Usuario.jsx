import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Api';
import styles from './Usuario.module.css';
import { toast } from 'react-toastify';


const Usuario = () => {
    const { id } = useParams();

    const [usuario, setUsuario] = useState({
        nome: '',
        nascimento: '',
        generoUsuario: 'outro',
        email: '',
        senha: '',
        telefone: '',
        isAdmin: false,
        id: ''
    });

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await api.get(`http://localhost:8080/usuarios/me`);
                const usuarioData = response.data;

                if ('isAdmin' in usuarioData) {
                    usuarioData.isAdmin = usuarioData.isAdmin === true;
                }

                setUsuario(usuarioData);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchUsuario();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const updateUsuario = async () => {
            try {
                const response = await api.put(`/usuarios/${usuario.id}`, usuario);
                console.log('Response Update:', response.data);

                toast.success('Informações atualizadas com sucesso');

            } catch (error) {
                console.error('Erro atualizando usuário:', error);
                toast.error('Aconteceu um erro na atualização...');
            }
        };

        updateUsuario();
    };


    const handleDelete = (e) => {
        e.preventDefault();

        // Using Toastify for confirmation
        toast.info(({ closeToast }) => (
            <div>
                <div>Deseja mesmo deletar sua conta?</div>
                <div >
                    <button className={styles.botaoToastifyYes} onClick={() => { closeToast(); deleteAccount(); }}>Sim</button>
                    <button className={styles.botaoToastifyNo} onClick={closeToast}>Não</button>
                </div>
            </div>
        ), {
            position: 'top-center',
            closeButton: false,
            closeOnClick: false,
            draggable: true,
            progress: 0,
        });
    };

    const deleteAccount = async () => {
        try {
            const authToken = localStorage.getItem('token'); // Pega o token do localStorage

            const response2 = await api.delete(`/usuarios/${usuario.id}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            console.log('Response Delete:', response2.data);
            toast.success('Ficamos tristes em ver você partir');
            // Redireciona para a página home

        } catch (error) {
            console.error('Erro deletando usuário:', error);
            toast.error('Aonde você pensa que vai?');
        }
    };

    return (

        <div className={styles.containerUsuarios}>

            {/* <ToastContainer position="top-center"/> */}

            <h2>INFORMAÇÕES DE USUÁRIO</h2>
            <p>
                Edite as informações que desejar e clique em salvar.
            </p>

            <form className={styles.formCadastroUsuario} onSubmit={handleSave}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={usuario.nome}
                    onChange={handleInputChange}
                />

                <div className={styles.form_row_u}>
                    <div className={styles.form_group_u}>
                        <label htmlFor="nascimento">Data de Nascimento:</label>
                        <input
                            type="date"
                            name="nascimento"
                            value={usuario.nascimento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.form_group_u}>
                        <label htmlFor="generoUsuario">Gênero:</label>
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

                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    name="telefone"
                    value={usuario.telefone}
                    onChange={handleInputChange}
                />

                <div className={styles.form_row_admin}>

                    <label htmlFor="isAdmin">Admin: &nbsp;</label>
                    <input
                        type="checkbox"
                        name="isAdmin"
                        checked={usuario.isAdmin}
                        onChange={handleInputChange}
                    />

                </div>

                <div className={styles.divButtonUsuario}>
                    <div className={styles.buttonSalvarUsuario}>
                        <button onClick={handleSave}>Salvar</button>
                    </div>
                    <div className={styles.buttonDeletarUsuario}>
                        <button onClick={handleDelete}>Deletar Conta</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Usuario;