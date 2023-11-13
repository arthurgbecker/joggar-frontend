import React, { useState } from 'react';
import { Link } from "react-router-dom"

import styles from './Eventos.module.css'

const Eventos = () => {
    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const [privacy, setPrivacy] = useState('public');
    const [description, setDescription] = useState('');
    const [activity, setActivity] = useState('football');
    const [audience, setAudience] = useState('openToAll');
    const [activityType, setActivityType] = useState('presencial');

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setType({
            ...type,
            [name]: checked,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com os dados do formulário de criação de evento
        console.log('Dados do evento:', {
            title,
            coverImage,
            date,
            time,
            address,
            privacy,
            description,
            audience,
            activity,
            type,
        });
    };

    return (
        <div className={styles.containerEventos}>

            <h2>CRIAR EVENTO</h2>
            <p>Fez uma curva errada? Retorne para a <a href="/feed">home aqui.</a></p>

            <form className={styles.formEventos} onSubmit={handleSubmit}>
                <label>Título:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Imagem de Capa (URL):</label>
                <input type="url" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />

                <div className={styles.row_one_eventos}>
                    <div className={styles.group_one_eventos}>
                        <label>Data:</label>
                        <input type="date" className={styles.dateInput} value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label>Horário:</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>

                    <div className={styles.group_one_eventos}>
                        <label>Privacidade:</label>
                        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                            <option value="public">Público</option>
                            <option value="private">Privado</option>
                        </select>
                    </div>
                </div>

                <label>Endereço:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

                <label>Descrição:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

                <div className={styles.row_two_eventos}>
                    <div className={styles.group_two_eventos}>
                        <label>Atividade:</label>
                        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                            <option value="football">Futebol</option>
                            <option value="volleyball">Vôlei</option>
                            <option value="cycling">Ciclismo</option>
                        </select>                    </div>
                    <div className={styles.group_two_eventos}>
                        <label>Público:</label>
                        <select value={audience} onChange={(e) => setAudience(e.target.value)}>
                            <option value="male">Masculino</option>
                            <option value="female">Feminino</option>
                            <option value="openToAll">Aberto a Todos</option>
                        </select>                    </div>
                    <div className={styles.group_two_eventos}>
                        <label>Tipo:</label>
                        <select value={activityType} onChange={(e) => setActivityType(e.target.value)}>
                            <option value="presencial">Presencial</option>
                            <option value="virtual">Virtual</option>
                        </select>                    </div>
                </div>

                <div className={styles.divButton}>
                    <Link to="/preferencias">
                        <button type="submit">Salvar</button>
                    </Link>
                </div>
            </form>

        </div>
    );

    // return (
    //     <div className={styles.container}>
    //         <h1>Criar Evento</h1>
    //         <form onSubmit={handleSubmit}>
    //             <label>
    //                 Título:
    //                 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    //             </label>
    //             <label>
    //                 Imagem de Capa (URL):
    //                 <input type="url" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
    //             </label>
    //             <div className={styles.date_time_row}> {/* Nova div para agrupar Data e Horário */}
    //                 <label>
    //                     Data:
    //                     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    //                 </label>
    //                 <label>
    //                     Horário:
    //                     <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
    //                 </label>
    //             </div>
    //             <label>
    //                 Endereço:
    //                 <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
    //             </label>
    //             <label>
    //                 Privacidade:
    //                 <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
    //                     <option value="public">Público</option>
    //                     <option value="private">Privado</option>
    //                 </select>
    //             </label>
    //             <label>
    //                 Descrição:
    //                 <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
    //             </label>
    //             <div className={styles.activity_public_type_row}>
    //                 <label>
    //                     Atividade:
    //                     <select value={activity} onChange={(e) => setActivity(e.target.value)}>
    //                         <option value="football">Futebol</option>
    //                         <option value="volleyball">Vôlei</option>
    //                         <option value="cycling">Ciclismo</option>
    //                     </select>
    //                 </label>
    //                 <label>
    //                     Público:
    //                     <select value={audience} onChange={(e) => setAudience(e.target.value)}>
    //                         <option value="male">Masculino</option>
    //                         <option value="female">Feminino</option>
    //                         <option value="openToAll">Aberto a Todos</option>
    //                     </select>
    //                 </label>
    //                 <label>
    //                     Tipo:
    // <select value={activityType} onChange={(e) => setActivityType(e.target.value)}>
    //     <option value="presencial">Presencial</option>
    //     <option value="virtual">Virtual</option>
    // </select>
    //                 </label>
    //             </div>
    //             <Link to={`/feed`}>
    //                 <button type="submit">Entrar</button>
    //             </Link>
    //         </form>
    //     </div>
    // );
};

export default Eventos;