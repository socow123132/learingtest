import axios from "axios";
const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
    },
})
export default {
    getTodoItems() {
        return apiClient.get('https://jsondata-4tjm.onrender.com/data')
    },
    getItem(id) {
        return apiClient.get('https://jsondata-4tjm.onrender.com/data/' + id)
    }
}