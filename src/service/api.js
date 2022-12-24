import axios from "axios";

const api = axios.create({
    baseURL: 'https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm'
})

export async function getUsers() {
    const response = await api.get('/Users');
    console.log(response.data);
    return response.data
}

export async function getUser(id) {
    const response = await api.get(`/Users/:id/${id}`);
    console.log(response.data);
    return response.data
}

