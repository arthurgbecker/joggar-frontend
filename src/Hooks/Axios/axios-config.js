import axios from "axios"

const blogAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', 
    headers: {
        "Content-Type" : "application/json",
        meuToken: 'meuToken'
    }
})

export default blogAxios