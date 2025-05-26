import axios from 'axios';

const api = axios.create({
    baseURL: "https://cabbookingservice.onrender.com" || 'http://localhost:7000/',
})

export default api;