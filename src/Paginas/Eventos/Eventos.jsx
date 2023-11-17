import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Eventos.module.css';

const Eventos = () => {
    
    const [formData, setFormData] = useState({
        tituloEvento: '',
        imagemEvento: '',
        dataEvento: '',
        horaEvento: '',
        endereco: '',
        privacidadeEvento: 'public',
        descricaoEvento: '',
        atividade: 'football',
        publicoEvento: 'openToAll',
        tipo: 'presencial',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const atividades = { 
            "Vôlei": "VOLEI"

        }
        formData.atividade = atividades[formData.atividade]
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
                            <option value="public">Público</option>
                            <option value="private">Privado</option>
                        </select>
                    </div>
                </div>

                <label>Endereço:</label>
                <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
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
                            <option value="football">Futebol</option>
                            <option value="volleyball">Vôlei</option>
                            <option value="cycling">Ciclismo</option>
                        </select>
                    </div>
                    <div className={styles.group_two_eventos}>
                        <label>Público:</label>
                        <select
                            name="publicoEvento"
                            value={formData.publicoEvento}
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
                            name="tipo"
                            value={formData.tipo}
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