import axios from 'axios'

const instance = axios.create();

// Request interceptor
instance.interceptors.request.use(async function (request) {
    return request;
}, function (error) {
    return Promise.reject(error);
});

// Response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance
