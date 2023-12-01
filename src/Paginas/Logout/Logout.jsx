import { Link, useNavigate } from "react-router-dom";
import React from 'react';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpa os tokens do localStorage
        // localStorage.removeItem('token');
        // localStorage.removeItem('refreshToken');

        // Redireciona para a página de login após o logout
        navigate('/login');
    };

    return (
        <Link to="#" onClick={handleLogout}>Logout</Link>
    );
};

export default Logout;