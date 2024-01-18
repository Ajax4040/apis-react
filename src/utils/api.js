import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    params: {
        key: "value",
        page: 1,
        language: "en_US"
    }
}); 

export default api;