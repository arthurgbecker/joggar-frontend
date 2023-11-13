import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Usuario = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com os dados do formulário de cadastro
        console.log('Formulário de cadastro submetido com sucesso!');
    };

    const [selectedActivities, setSelectedActivities] = useState([]);

    const handleActivityChange = (event) => {
        const activity = event.target.value;
        if (event.target.checked) {
            setSelectedActivities([...selectedActivities, activity]);
        } else {
            setSelectedActivities(selectedActivities.filter(a => a !== activity));
        }
    }


    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Usuário</h2>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    E-mail:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>

                <div className="form-row">
                    <div className="form-group">
                        <label>Data de Nascimento:</label>
                        <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
                    </div>

                    <div className="form-group">
                        <label>Gênero:</label>
                        <select value={gender} onChange={handleGenderChange}>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                </div>

                <label>
                    Telefone:
                    <input type="text" value={phone} onChange={handlePhoneChange} />
                </label>

                <div className="form-row">
                    <div className="form-group">
                        <label>Senha:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="form-group">
                        <label>Confirmar Senha:</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>
                </div>

                <Link to="/preferencias">
                    <button type="submit">Cadastrar</button>
                </Link>

                <h2>Atividades</h2>
                <div className="atividades">
                    <label className="column1">
                        <input type="checkbox" value="Futebol" onChange={handleActivityChange} />
                        Futebol
                    </label>
                    <label className="column1">
                        <input type="checkbox" value="Vôlei" onChange={handleActivityChange} />
                        Vôlei
                    </label>
                    <label className="column1">
                        <input type="checkbox" value="Basquete" onChange={handleActivityChange} />
                        Basquete
                    </label>
                    <label className="column1">
                        <input type="checkbox" value="Corrida" onChange={handleActivityChange} />
                        Corrida
                    </label>
                    <label className="column1">
                        <input type="checkbox" value="Capoeira" onChange={handleActivityChange} />
                        Capoeira
                    </label>
                    <label className="column2">
                        <input type="checkbox" value="Ciclismo" onChange={handleActivityChange} />
                        Ciclismo
                    </label>
                    <label className="column2">
                        <input type="checkbox" value="Musculação" onChange={handleActivityChange} />
                        Musculação
                    </label>
                    <label className="column2">
                        <input type="checkbox" value="RPG" onChange={handleActivityChange} />
                        RPG
                    </label>
                    <label className="column2">
                        <input type="checkbox" value="Ação" onChange={handleActivityChange} />
                        Ação
                    </label>
                    <label className="column2">
                        <input type="checkbox" value="MMO" onChange={handleActivityChange} />
                        MMO
                    </label>
                    <label className="column3">
                        <input type="checkbox" value="MOBA" onChange={handleActivityChange} />
                        MOBA
                    </label>
                    <label className="column3">
                        <input type="checkbox" value="Esportes" onChange={handleActivityChange} />
                        Esportes
                    </label>
                    <label className="column3">
                        <input type="checkbox" value="Luta" onChange={handleActivityChange} />
                        Luta
                    </label>
                </div>

                <Link to={`/login`}>
                    <button type="submit">Entrar</button>
                </Link>
            </form>
        </div>
    )

};

export default Usuario;