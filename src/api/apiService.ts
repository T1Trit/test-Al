
import axios from "axios";

const apiService = axios.create({
    baseURL: "https://fakestoreapi.com", // ��� ������� API ��� ������
});

export default apiService;
