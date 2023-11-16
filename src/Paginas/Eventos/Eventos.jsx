import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Eventos.module.css';

const Eventos = () => {
    
    const [formData, setFormData] = useState({
        titleEvento: '',
        imageEvento: '',
        dateEvento: '',
        timeEvento: '',
        addressEvento: '',
        privacyEvento: 'public',
        descriptionEvento: '',
        activityEvento: 'football',
        audienceEvento: 'openToAll',
        activityTypeEvento: 'presencial',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/eventos', formData);
    
            // Lógica adicional após a criação do evento (se necessário)
            console.log('Evento criado:', response.data);
        } catch (error) {
            console.error('Erro ao criar evento:', error);
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
                    name="titleEvento"
                    value={formData.titleEvento}
                    onChange={handleInputChange}
                />

                <label>Imagem de Capa (URL):</label>
                <input
                    type="url"
                    name="imageEvento"
                    value={formData.imageEvento}
                    onChange={handleInputChange}
                />

                <div className={styles.row_one_eventos}>
                    <div className={styles.group_one_eventos}>
                        <label>Data:</label>
                        <input
                            type="date"
                            className={styles.dateEventoInput}
                            name="dateEvento"
                            value={formData.dateEvento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label>Horário:</label>
                        <input
                            type="time"
                            name="timeEvento"
                            value={formData.timeEvento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label>Privacidade:</label>
                        <select
                            name="privacyEvento"
                            value={formData.privacyEvento}
                            onChange={handleInputChange}
                        >
                            <option value="public">Público</option>
                            <option value="private">Privado</option>
                        </select>
                    </div>
                </div>

                <label>Endereço:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                />

                <label>Descrição:</label>
                <textarea
                    name="descriptionEvento"
                    value={formData.descriptionEvento}
                    onChange={handleInputChange}
                />

                <div className={styles.row_two_eventos}>
                    <div className={styles.group_two_eventos}>
                        <label>Atividade:</label>
                        <select
                            name="activityEvento"
                            value={formData.activityEvento}
                            onChange={handleInputChange}
                        >
                            <option value="football">Futebol</option>
                            <option value="volleyball">Vôlei</option>
                            <option value="cycling">Ciclismo</option>
                        </select>
                    </div>
                    <div className={styles.group_two_eventos}>
                        <label>Público:</label>
                        <select
                            name="audienceEvento"
                            value={formData.audienceEvento}
                            onChange={handleInputChange}
                        >
                            <option value="male">Masculino</option>
                            <option value="female">Feminino</option>
                            <option value="openToAll">Aberto a Todos</option>
                        </select>
                    </div>
                    <div className={styles.group_two_eventos}>
                        <label>Tipo:</label>
                        <select
                            name="activityTypeEvento"
                            value={formData.activityTypeEvento}
                            onChange={handleInputChange}
                        >
                            <option value="presencial">Presencial</option>
                            <option value="virtual">Virtual</option>
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