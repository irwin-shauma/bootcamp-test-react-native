import axios from 'axios'
import { getToken } from '../service/login.service';

const instance = axios.create();

// Request interceptor
instance.interceptors.request.use(function (request){
    const isLogin = request.url.includes('login')
    if(!isLogin) {
        request.headers.authorization = `Bearer ${getToken()}`
    }
    return request;
}, function (error) {
    return Promise.reject(error);
});

// Response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error){
    return Promise.reject(error);
});

export default instance
