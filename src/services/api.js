import axios from "axios";

export const key = "6722115508ca3cceaa6b8a3ed9a343c7acf90327"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;