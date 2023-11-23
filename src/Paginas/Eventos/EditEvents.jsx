import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEvents = () => {
    const { id } = useParams();
    const [evento, setEvento] = useState({
        tituloEvento: '',
        imagemEvento: '',
        dataEvento: '',
        horaEvento: '',
        descricaoEvento: '',
        // Adicione mais atributos conforme necessário
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
        <div>
            <h1>Edit Evento</h1>
            <form>
                <label htmlFor="tituloEvento">Title:</label>
                <input
                    type="text"
                    id="tituloEvento"
                    name="tituloEvento"
                    value={evento.tituloEvento}
                    onChange={handleInputChange}
                />

                <label htmlFor="dataEvento">Date:</label>
                <input
                    type="date"
                    id="dataEvento"
                    name="dataEvento"
                    value={evento.dataEvento}
                    onChange={handleInputChange}
                />

                <label htmlFor="descricaoEvento">Description:</label>
                <textarea
                    id="descricaoEvento"
                    name="descricaoEvento"
                    value={evento.descricaoEvento}
                    onChange={handleInputChange}
                ></textarea>

                {/* Adicione mais campos de entrada para outros atributos do evento */}

                <button type="button" onClick={handleSave}>
                    Save
                </button>
            </form>
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

export default EditEvents;
