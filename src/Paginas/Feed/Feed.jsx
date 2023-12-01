import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// library.add(faHouse, faUserGroup, faCirclePlus, faBell, faUser);

import api from '../../Api';
// import axios from 'axios';
import FormatoData from '../../Componentes/FormatoData/FormatoData';
import styles from './Feed.module.css';
import { toast } from 'react-toastify';


const Feed = () => {

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        loadEventos();
    }, []);

    const loadEventos = async () => {
        const result = await api.get("/eventos");
        setEventos(result.data);
        // console.log(result.data);
    }

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await api.get('/eventos');
                if (response.data.length > 0) {
                    setEventos(response.data);
                } else {
                    console.log('Nenhum evento encontrado.');
                }
            } catch (error) {
                console.error('Erro ao obter eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    const dropdownOptions = [
        ["Procure por Atividade:", "Futebol", "Vôlei", "Basquete", "Capoeira", "Ciclismo", "Corrida"],
        ["Público: Aberto a Todos", "Masculino", "Feminino"],
        ["Presencial ou Virtual?", "Presencial", "Virtual"],
        ["Procure por data:", "Aqui vai a data"],
        ["Local ou Bairro:", "Centro", "Agronômica", "Trindade", "Córrego Grande", "Saco dos Limões", "João Paulo", "Campeche", "Outro"],
    ];


    // Função para deletar um evento
    const deleteEvento = async (id) => {
        await api.delete(`http://localhost:8080/eventos/${id}`);
        toast.success('Evento deletado. Bora criar outro?');
        loadEventos();
    }

    return (
        <div className={styles.mainFeed}>

            <div className={styles.menuEsquerdaFeed}>

                <h2>Buscar Eventos:</h2>

                <div className={styles.dropdown}>
                    <select>
                        {dropdownOptions[0].map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.dropdown}>
                    <select>
                        {dropdownOptions[1].map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.dropdown}>
                    <select>
                        {dropdownOptions[2].map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.dropdown}>
                    <select>
                        {dropdownOptions[3].map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.dropdown}>
                    <select>
                        {dropdownOptions[4].map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>


            <div className={styles.contentFeed}>
                {eventos.map((evento) => (

                    <div key={evento.id} className={styles.card}>

                        <div className={styles.cardEsquerda}>
                            <h2>{evento.tituloEvento}</h2>
                            <p>Descrição: {evento.descricaoEvento}</p>
                            <p><FontAwesomeIcon icon={faClock} /> <FormatoData dataEvento={evento.dataEvento} />, às {evento.horaEvento} |&nbsp;
                                <FontAwesomeIcon icon={faLocationDot} /> {evento.endereco.local}</p>
                        </div>
                        <div className={styles.cardDireita}>

                            <Link className={styles.buttonLink} to={`/editevents/${evento.id}`}>
                                Editar
                            </Link>

                            <button className={styles.buttonDanger} onClick={() => deleteEvento(evento.id)}>
                                Deletar
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feed;
