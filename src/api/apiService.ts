
import axios from "axios";

const apiService = axios.create({
    baseURL: "https://fakestoreapi.com", // Это рабочий API для тестов
});

export default apiService;
