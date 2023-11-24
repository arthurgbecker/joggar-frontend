import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Eventos.module.css';


const EditEvents = () => {
    const { id } = useParams();
    const [evento, setEvento] = useState({
        tituloEvento: '',
        imagemEvento: '',
        dataEvento: '',
        horaEvento: '',
        descricaoEvento: '',
        endereco: {
            local: '',
        },
        privacidadeEvento: '',
        atividade: '',
        publicoEvento: '',
        tipo: '',
    });

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/eventos/${id}`);
                const eventoData = response.data;
                setEvento(eventoData);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchEvento();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvento((prevEvento) => ({
            ...prevEvento,
            [name]: value,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const updateEvento = async () => {
            try {
                // Verifique se a URL está correta e se o evento contém os dados corretos
                console.log(`URL: http://localhost:8080/eventos/${id}`);
                console.log('Evento data:', evento);

                const response = await axios.put(`http://localhost:8080/eventos/${id}`, evento);
                console.log('Response:', response.data);
                console.log('Evento updated successfully');
            } catch (error) {
                console.error('Error updating evento:', error);
            }
        };

        updateEvento();
    };

    return (

        <div className={styles.containerEventos}>
            <h2>EDITAR EVENTO</h2>
            <p>
                Fez uma curva errada? Retorne para o seu{' '}
                <Link to="/feed">feed aqui.</Link>
            </p>

            <form className={styles.formEventos} onSubmit={handleSave}>
                <label htmlFor="tituloEvento">Título:</label>
                <input
                    type="text"
                    name="tituloEvento"
                    value={evento.tituloEvento}
                    onChange={handleInputChange}
                />

                <label htmlFor="imagemEvento">Imagem de Capa (URL):</label>
                <input
                    type="url"
                    name="imagemEvento"
                    value={evento.imagemEvento}
                    onChange={handleInputChange}
                />

                <div className={styles.row_one_eventos}>
                    <div className={styles.group_one_eventos}>
                        <label htmlFor="dataEvento">Data:</label>
                        <input
                            type="date"
                            className={styles.dataEventoInput}
                            name="dataEvento"
                            value={evento.dataEvento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label htmlFor="horaEvento">Horário:</label>
                        <input
                            type="time"
                            name="horaEvento"
                            value={evento.horaEvento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label htmlFor="privacidadeEvento">Privacidade:</label>
                        <select
                            name="privacidadeEvento"
                            value={evento.privacidadeEvento}
                            onChange={handleInputChange}
                        >
                            <option value="publico">Público</option>
                            <option value="privado">Privado</option>
                        </select>
                    </div>
                </div>

                <label htmlFor="endereco.local">Local:</label>
                <input
                    type="text"
                    name="endereco.local"
                    value={evento.endereco ? evento.endereco.local : ''}
                    onChange={handleInputChange}
                />

                <label htmlFor="descricaoEvento">Descrição:</label>
                <textarea
                    name="descricaoEvento"
                    value={evento.descricaoEvento}
                    onChange={handleInputChange}
                />

                <div className={styles.row_two_eventos}>
                    <div className={styles.group_two_eventos}>
                        <label htmlFor="atividade">Atividade:</label>
                        <select
                            name="atividade"
                            value={evento.atividade}
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
                        <label htmlFor="publicoEvento">Público:</label>
                        <select
                            name="publicoEvento"
                            value={evento.publicoEvento}
                            onChange={handleInputChange}
                        >
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="abertoATodos">Aberto a Todos</option>
                        </select>
                    </div>
                    <div className={styles.group_two_eventos}>
                        <label htmlFor="tipo">Tipo:</label>
                        <select
                            name="tipo"
                            value={evento.tipo}
                            onChange={handleInputChange}
                        >
                            <option value="PRESENCIAL">Presencial</option>
                            <option value="VIRTUAL">Virtual</option>
                        </select>
                    </div>
                </div>

                <div className={styles.divButton}>
                    <button onClick={handleSave}>Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default EditEvents;
