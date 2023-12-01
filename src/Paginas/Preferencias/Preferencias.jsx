import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import api from '../../Api';

import styles from './Preferencias.module.css';


const Preferencias = () => {

    const navigate = useNavigate();

    const [selectedActivities, setSelectedActivities] = useState([]);

    const handleActivityChange = (event) => {
        const activity = event.target.value;
        if (event.target.checked) {
            setSelectedActivities([...selectedActivities, activity]);
        } else {
            setSelectedActivities(selectedActivities.filter(a => a !== activity));
        }
    };

    const savePreferences = async () => {
        try {
            // Recupera o token do localStorage
            const token = localStorage.getItem('token');

            // Verifica se o token está presente
            if (!token) {
                console.error('Token não encontrado. O usuário não está autenticado.');
                return;
            }

            const response = await api.post('/preferencias', { activities: selectedActivities }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            console.log('Preferências salvas:', response.data);

            window.location.href = '/feed';

        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    };

    return (
        <div className={styles.containerPref}>

            <h1>Selecione suas preferências:</h1>
            <p>Selecione uma ou mais preferências para o seu feed. Você poderá editá-las mais tarde.</p>

            <h2>Atividades</h2>
            <div className={styles.atividadesPref}>
                <label className={styles.column1}>
                    <input type="checkbox" value="Futebol" onChange={handleActivityChange} />
                    Futebol
                </label>
                <label className={styles.column1}>
                    <input type="checkbox" value="Vôlei" onChange={handleActivityChange} />
                    Vôlei
                </label>
                <label className={styles.column1}>
                    <input type="checkbox" value="Basquete" onChange={handleActivityChange} />
                    Basquete
                </label>
                <label className={styles.column1}>
                    <input type="checkbox" value="Corrida" onChange={handleActivityChange} />
                    Corrida
                </label>
                <label className={styles.column1}>
                    <input type="checkbox" value="Capoeira" onChange={handleActivityChange} />
                    Capoeira
                </label>
                <label className={styles.column2}>
                    <input type="checkbox" value="Ciclismo" onChange={handleActivityChange} />
                    Ciclismo
                </label>
                <label className={styles.column2}>
                    <input type="checkbox" value="Musculação" onChange={handleActivityChange} />
                    Musculação
                </label>
                <label className={styles.column2}>
                    <input type="checkbox" value="RPG" onChange={handleActivityChange} />
                    RPG
                </label>
                <label className={styles.column2}>
                    <input type="checkbox" value="Ação" onChange={handleActivityChange} />
                    Ação
                </label>
                <label className={styles.column2}>
                    <input type="checkbox" value="MMO" onChange={handleActivityChange} />
                    MMO
                </label>
                <label className={styles.column3}>
                    <input type="checkbox" value="MOBA" onChange={handleActivityChange} />
                    MOBA
                </label>
                <label className={styles.column3}>
                    <input type="checkbox" value="Esportes" onChange={handleActivityChange} />
                    Esportes
                </label>
                <label className={styles.column3}>
                    <input type="checkbox" value="Luta" onChange={handleActivityChange} />
                    Luta
                </label>
            </div>

            <div className={styles.buttonPref}>
                <button type="button" onClick={savePreferences}>Salvar</button>
            </div>
        </div>
    );
};

export default Preferencias;

// const Preferencias = () => {
//     const [selectedActivities, setSelectedActivities] = useState([]);

//     const handleActivityChange = (event) => {
//         const activity = event.target.value;
//         if (event.target.checked) {
//             setSelectedActivities([...selectedActivities, activity]);
//         } else {
//             setSelectedActivities(selectedActivities.filter(a => a !== activity));
//         }
//     };

//     return (
//         <div className={styles.containerPref}>

//             <h1>Selecione suas preferências:</h1>
//             <p>Selecione uma ou mais preferências para o seu feed. Você poderá editá-las mais tarde.</p>

//             <h2>Atividades</h2>
//             <div className={styles.atividadesPref}>
//                 <label className={styles.column1}>
//                     <input type="checkbox" value="Futebol" onChange={handleActivityChange} />
//                     Futebol
//                 </label>
//                 <label className={styles.column1}>
//                     <input type="checkbox" value="Vôlei" onChange={handleActivityChange} />
//                     Vôlei
//                 </label>
//                 <label className={styles.column1}>
//                     <input type="checkbox" value="Basquete" onChange={handleActivityChange} />
//                     Basquete
//                 </label>
//                 <label className={styles.column1}>
//                     <input type="checkbox" value="Corrida" onChange={handleActivityChange} />
//                     Corrida
//                 </label>
//                 <label className={styles.column1}>
//                     <input type="checkbox" value="Capoeira" onChange={handleActivityChange} />
//                     Capoeira
//                 </label>
//                 <label className={styles.column2}>
//                     <input type="checkbox" value="Ciclismo" onChange={handleActivityChange} />
//                     Ciclismo
//                 </label>
//                 <label className={styles.column2}>
//                     <input type="checkbox" value="Musculação" onChange={handleActivityChange} />
//                     Musculação
//                 </label>
//                 <label className={styles.column2}>
//                     <input type="checkbox" value="RPG" onChange={handleActivityChange} />
//                     RPG
//                 </label>
//                 <label className={styles.column2}>
//                     <input type="checkbox" value="Ação" onChange={handleActivityChange} />
//                     Ação
//                 </label>
//                 <label className={styles.column2}>
//                     <input type="checkbox" value="MMO" onChange={handleActivityChange} />
//                     MMO
//                 </label>
//                 <label className={styles.column3}>
//                     <input type="checkbox" value="MOBA" onChange={handleActivityChange} />
//                     MOBA
//                 </label>
//                 <label className={styles.column3}>
//                     <input type="checkbox" value="Esportes" onChange={handleActivityChange} />
//                     Esportes
//                 </label>
//                 <label className={styles.column3}>
//                     <input type="checkbox" value="Luta" onChange={handleActivityChange} />
//                     Luta
//                 </label>
//             </div>

//             <div className={styles.buttonPref}>
//                 <Link to="/login">
//                     <button type="submit">Salvar</button>
//                 </Link>
//             </div>

//         </div>
//     );
// };

// export default Preferencias;