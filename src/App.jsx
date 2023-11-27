import styles from './App.module.css'
import Home from './Paginas/Home/Home'
// import NavBar from './Componentes/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Paginas/Login/Login'
import Preferencias from './Paginas/Preferencias/Preferencias'
import Eventos from './Paginas/Eventos/Eventos'
import NavBarPlus from './Componentes/NavBarPlus/NavBarPlus'
import Feed from './Paginas/Feed/Feed'
import Usuario from './Paginas/Usuario/Usuario'
import CadastroUsuario from './Paginas/Cadastro Usuario/CadastroUsuario'
import EditEvents from './Paginas/Eventos/EditEvents'

function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBarPlus />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<CadastroUsuario />} />
            <Route path="/preferencias" element={<Preferencias />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/usuario' element={<Usuario />} />
            <Route path='/eventos' element={<Eventos />} />

            <Route exact path="/editevents/:id" element={<EditEvents/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App