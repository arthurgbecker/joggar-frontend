import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import axios from 'axios';
// import styles from './Usuario.css'

const Usuario = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        loadUsuario();
    }, []);

    const loadUsuario = async () => {
        const result = await axios.get("http://localhost:8080/usuarios");
        setUsuarios(result.data);
        console.log(result.data);
    }

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:8080/usuarios');
                if (response.data.length > 0) {
                    setUsuarios(response.data);
                } else {
                    console.log('Nenhum usuario encontrado.');
                }
            } catch (error) {
                console.error('Erro ao obter usuarios:', error);
            }
        };

        fetchUsuarios();
    }, []);


    const deleteUsuario = async (id) => {
        await axios.delete(`http://localhost:8080/usuarios/${id}`);
        deleteUsuario();
    }


    return (
        <div >
            {/* {usuarios.map((usuario) => (
                <div key={usuario.id} >
                    <h3>{usuario.nome}</h3>
                    <p>Data: {usuario.nascimento}</p>
                    <p>Descrição: {usuario.generoUsuario}</p>
                    <p>Descrição: {usuario.email}</p>
                    <p>Descrição: {usuario.senha}</p>
                    <p>Descrição: {usuario.telefone}</p> */}

                    <Link className='btn btn-outline-primary mx-2' to={`/editusuarios/${usuarios.id}`}>
                        Editar
                    </Link>
                    <button className='btn btn-danger mx-2' onClick={() => deleteUsuario(usuarios.id)}>
                        Deletar
                    </button>
                {/* </div> */}
            {/* ))} */}
        </div >
    )

};

export default Usuario;