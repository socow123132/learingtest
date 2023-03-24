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
        return apiClient.get('/data')
    },
    getItem(id) {
        return apiClient.get('/data/' + id)
    }
}