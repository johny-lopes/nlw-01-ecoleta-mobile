import axios from 'axios';

// substitua localhost pelo IP da máquina que está rodando o server
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;