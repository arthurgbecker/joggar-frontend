import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import Home from './Paginas/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Paginas/Login/Login'
import Preferencias from './Paginas/Preferencias/Preferencias'
import Eventos from './Paginas/Eventos/Eventos'
import NavBarPlus from './Componentes/NavBarPlus/NavBarPlus'
import Feed from './Paginas/Feed/Feed'
import Usuario from './Paginas/Usuario/Usuario'
import CadastroUsuario from './Paginas/Cadastro Usuario/CadastroUsuario'
import EditEvents from './Paginas/Eventos/EditEvents'
import EditPreferencias from './Paginas/Preferencias/EditPreferencias';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    // Os tokens estão presentes ou válidos?
    const isAuthenticated = token && refreshToken;
    setIsAuthenticated(isAuthenticated);
  }, []);

  return (
    <BrowserRouter>
      <div>
        {isAuthenticated && <NavBarPlus />}
        <div>
        <ToastContainer position="top-center" style={{ width: '370px', textAlign: 'center', top: '32px' }}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<CadastroUsuario />} />
            <Route path='/preferencias' element={<Preferencias />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/eventos' element={<Eventos />} />
            <Route path='/editpreferencias' element={<EditPreferencias />} />
            <Route exact path="/editevents/:id" element={<EditEvents />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;