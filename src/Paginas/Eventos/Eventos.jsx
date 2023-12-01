import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
// import axios from 'axios';
import styles from './Eventos.module.css';
import { toast } from 'react-toastify';
import api from '../../Api';

const Eventos = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        tituloEvento: '',
        imagemEvento: '',
        dataEvento: '',
        horaEvento: '',
        endereco: {
            local: '',
        },
        privacidadeEvento: 'publico',
        descricaoEvento: '',
        atividade: 'FUTEBOL',
        publicoEvento: 'abertoATodos',
        tipo: 'PRESENCIAL',
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
            const response = await api.post('/eventos', formData);
            console.log('Evento criado:', response.data);
            toast.success('Este alert aconteceu graças à LUARA!');

            navigate('/feed');            
        } catch (error) {
            console.error('Erro ao criar evento:', error);
            toast.error('Erro ao criar evento. Tente novamente.');
        }
    };

    return (
        <div className={styles.containerEventos}>
            <h2>CRIAR EVENTO</h2>
            <p>
                Fez uma curva errada? Retorne para a{' '}
                <Link to="/feed">home aqui.</Link>
            </p>

            <form className={styles.formEventos} onSubmit={handleSubmit}>
                <label>Título:</label>
                <input
                    type="text"
                    name="tituloEvento"
                    value={formData.tituloEvento}
                    onChange={handleInputChange}
                />

                <label>Imagem de Capa (URL):</label>
                <input
                    type="url"
                    name="imagemEvento"
                    value={formData.imagemEvento}
                    onChange={handleInputChange}
                />

                <div className={styles.row_one_eventos}>
                    <div className={styles.group_one_eventos}>
                        <label>Data:</label>
                        <input
                            type="date"
                            className={styles.dataEventoInput}
                            name="dataEvento"
                            value={formData.dataEvento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label>Horário:</label>
                        <input
                            type="time"
                            name="horaEvento"
                            value={formData.horaEvento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label>Privacidade:</label>
                        <select
                            name="privacidadeEvento"
                            value={formData.privacidadeEvento}
                            onChange={handleInputChange}
                        >
                            <option value="publico">Público</option>
                            <option value="privado">Privado</option>
                        </select>
                    </div>
                </div>

                <label>Local:</label>
                <input
                    type="text"
                    name="endereco.local"
                    value={formData.endereco.local}
                    onChange={handleInputChange}
                />

                <label>Descrição:</label>
                <textarea
                    name="descricaoEvento"
                    value={formData.descricaoEvento}
                    onChange={handleInputChange}
                />

                <div className={styles.row_two_eventos}>
                    <div className={styles.group_two_eventos}>
                        <label>Atividade:</label>
                        <select
                            name="atividade"
                            value={formData.atividade}
                            onChange={handleInputChange}
                        >
                            <option value="FUTEBOL">Futebol</option>
                            <option value="VOLEI">Vôlei</option>
                            <option value="BASQUETE">Basquete</option>
                            <option value="CORRIDA">Corrida</option>
                            <option value="CAPOEIRA">Capoeira</option>
                            <option value="CICLISMO">Ciclismo</option>
                            <option value="MUSCULACAO">Musculação</option>
                            <option value="RPG">RPG</option>
                            <option value="ACAO">Ação</option>
                            <option value="MMO">MMO</option>
                            <option value="MOBA">MOBA</option>
                            <option value="ESPORTES">Esportes</option>
                            <option value="LUTA">Luta</option>
                        </select>
                    </div>
                    <div className={styles.group_two_eventos}>
                        <label>Público:</label>
                        <select
                            name="publicoEvento"
                            value={formData.publicoEvento}
                            onChange={handleInputChange}
                        >
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="abertoATodos">Aberto a Todos</option>
                        </select>
                    </div>
                    <div className={styles.group_two_eventos}>
                        <label>Tipo:</label>
                        <select
                            name="tipo"
                            value={formData.tipo}
                            onChange={handleInputChange}
                        >
                            <option value="PRESENCIAL">Presencial</option>
                            <option value="VIRTUAL">Virtual</option>
                        </select>
                    </div>
                </div>

                <div className={styles.divButton}>
                    <button onClick={handleSubmit}>Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default Eventos;