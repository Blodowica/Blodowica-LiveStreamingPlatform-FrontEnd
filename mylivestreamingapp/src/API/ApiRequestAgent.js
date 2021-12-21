import axios from "axios";
import { store } from "../Stores/store";


//simulates the delay when loading data from the database
const sleep = (delay) => {
    return new Promise((resole) => {
        setTimeout(resole, delay)
    })
}


axios.defaults.baseURL = `${process.env.REACT_APP_BACKEND_API_URL}/api`


//when there is already a token send a request to get the associated users information
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})


axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = (response) => response.data;
const request = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.get(url, body).then(responseBody),
    del: (url) => axios.get(url).then(responseBody),
}


// still need to creaste the backend logic for the streams 

const Users = {
    list: () => request.get('/Users'),
    details: (id) => request.get(`/Users/${id}`),
    create: (user) => request.post('/Users'),
    update: (user) => request.put(`/Users/${user.id}`, user),
    delete: (id) => request.del(`Users/${id}`)

}

const Account = {
    current: () => request.get('/Account'),
    login: (user) => request.post('/Account/login', user),
    register: (user) => request.post('/Account/register', user)
}

const agent = {

    Users,
    Account
}

export default agent;