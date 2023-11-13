import CampoTexto from "../CampoTexto/CampoTexto.js";
import styles from "./Formulario.module.css"
import { useState } from "react";

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoEnviar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})

        // Faz com que os imputs limpem apos clicar no botão
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={aoEnviar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    valor={nome}
                    eObrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    aoAlterar={valor => setNome(valor)}               
                />
                <CampoTexto 
                    valor={cargo}
                    eObrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    aoAlterar={valor => setCargo(valor)} 
                />
                <CampoTexto
                    valor={imagem}
                    eObrigatorio={true} 
                    label='Imagem' 
                    placeholder='Coloque o endereço de sua imagem'
                    aoAlterar={valor => setImagem(valor)}  
                />
              
                {/* <Botao>Enviar</Botao> */}

            </form>

        </section>
    )
}

export default Formulario