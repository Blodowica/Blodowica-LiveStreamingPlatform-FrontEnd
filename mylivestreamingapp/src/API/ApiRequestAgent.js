import axios from "axios";
import { store } from "../Stores/store";


//simulates the delay when loading data from the database
// const sleep = (delay) => {
//     return new Promise((resole) => {
//         setTimeout(resole, delay)
//     })
// }


axios.defaults.baseURL = `${process.env.REACT_APP_BACKEND_API_URL}`


//when there is already a token send a request to get the associated users information
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})


// axios.interceptors.response.use(async response => {
//     try {
//         await sleep(1000);
//         return response;
//     } catch (error) {
//         console.log(error);
//         return await Promise.reject(error);
//     }
// })

const responseBody = (response) => response.data;
const request = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.get(url).then(responseBody),
}



const Users = {
    list: () => request.get('/api/Users'),
    details: (id) => request.get(`/api/Users/${id}`),
    create: (user) => request.post('/Users'),
    update: (user) => request.put(`/Users/update/${user.id}/`, user),

    delete: (id) => request.del(`Users/${id}`)

}

const Account = {
    current: () => request.get('/api/Account'),
    login: (user) => request.post('/api/Account/login', user),
    register: (user) => request.post('/api/Account/register', user),
    Update: (user) => request.put(`/api/Users/update/${user.id}`, user)
}

const Streams = {
    create: (stream) => request.post(`/api/Streams`, stream),
    GetUserStream: (userId) => request.get(`/api/Streams/user-stream/${userId}`),
    updateUserStream: (stream) => request.put(`/api/Streams/${stream.streamId}`, stream),
    StreamList: () => request.get('api/Streams')

}
const agent = {

    Users,
    Account,
    Streams
}

export default agent;