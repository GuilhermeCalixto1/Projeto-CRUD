import  axios  from 'axios';

const api = axios.create({
    baseURL:'https://backend-26v8.onrender.com'
});


export default api;