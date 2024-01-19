import axios from "axios";

const api2 = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    params: {
        key: "value",
        page: 1,
        language: "en_US"
    }
}); 

export default api2;