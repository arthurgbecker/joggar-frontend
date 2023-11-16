import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faUserGroup, faCirclePlus, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse, faUserGroup, faCirclePlus, faBell, faUser);

import axios from 'axios';
import { useEffect } from 'react';

import styles from './Feed.module.css'

const Feed = () => {
    const dropdownOptions = [
        ["Opção 1", "Opção 2", "Opção 3"],
        ["Opção A", "Opção B", "Opção C"],
        ["Item X", "Item Y", "Item Z"],
        ["Escolha A", "Escolha B", "Escolha C"],
        ["Categoria 1", "Categoria 2", "Categoria 3"],
    ];

    const getAxios = async () => {
        console.log("teste da api com get")
    };

    const deleteAxios = async () => {
        console.log("teste da api com delete")
    };

    useEffect(() => {
        getAxios();
        deleteAxios();
    }, []);

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
                <FontAwesomeIcon className={styles.icon} icon={faHouse} size='lg' />
            </div>

            <div className={styles.contentFeed}>
                {/* Conteúdo principal */}
            </div>
        </div>
    );
}

export default Feed;
