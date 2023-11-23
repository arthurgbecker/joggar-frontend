// import React from 'react'
// import axios from "axios";
// import { useState } from 'react'
// import { useNavigate, Link, useParams } from "react-router-dom";
// import { useEffect } from 'react';


// export default function EditEventos() {

//     let navigate = useNavigate();

//     const { id } = useParams();

//     const [evento, setEvento] = useState({

//         tituloEvento: '',
//         imagemEvento: '',
//         dataEvento: '',
//         horaEvento: '',
//         endereco: {
//             local: '',
//         },
//         privacidadeEvento: '',
//         descricaoEvento: '',
//         atividade: '',
//         publicoEvento: '',
//         tipo: '',
//     });

//     const { tituloEvento,
//         imagemEvento,
//         dataEvento,
//         horaEvento,
//         endereco,
//         descricaoEvento
//     } = evento;

//     const [privacidadeEvento, setPrivacidadeEvento] = useState([]);
//     // const [atividade, setAtividade] = useState([]);
//     // const [publicoEvento, setPublicoEvento] = useState([]);
//     // const [tipo, setTipo] = useState([]);

//     // const [imagemEvento, setImagemEvento] = useState({
//     //     url: ''
//     // });

//     const handlePrivacidadeEvento = (e) => {
//         setEvento({
//             ...evento,
//             privacidadeEvento: e.target.value
//         })
//     }

//     <div className={styles.category-form}>
//         <label htmlFor='privacidadeEvento' className={styles.form-label}>
//             <strong>Privacidade</strong>
//         </label>
//         <select
//             onChange={(e) => handlePrivacidadeEvento(e)}
//             className={styles.form-select}
//             aria-label='Default select example'
//             name='privacidadeEvento'
//             value={evento.privacidadeEvento}
//         >

//             <option disabled value={''}> {evento.privacidadeEvento} </option>
//             {/* {categorias.map((privacidadeEvento) => (

//                 <select>
//                     <option value="publico">Público</option>
//                     <option value="privado">Privado</option>
//                 </select>
//             ))
//             } */}
//         </select>
//     </div>

// }