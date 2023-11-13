import React, { useState } from 'react';
import { Link } from "react-router-dom"

import styles from './Preferencias.module.css'

const Preferencias = () => {
    const [selectedActivities, setSelectedActivities] = useState([]);

    const handleActivityChange = (event) => {
        const activity = event.target.value;
        if (event.target.checked) {
            setSelectedActivities([...selectedActivities, activity]);
        } else {
            setSelectedActivities(selectedActivities.filter(a => a !== activity));
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
                <Link to="/login">
                    <button type="submit">Salvar</button>
                </Link>
            </div>

        </div>
    );
};

export default Preferencias;