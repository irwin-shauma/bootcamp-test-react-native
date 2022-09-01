import axios from '../interceptor/custom.interceptor';
import axiosLogin from '../interceptor/login.interceptor'

async function getApi(url) {
    return axios.get(url).then(res => res.data)
}

async function postApi(url, data) {
    return axios.post(url, data, { method: 'POST' })
        .then(res => res.data)
}

async function putApi(url, data) {
    return axios.put(url, data, { method: 'PUT' })
        .then(res => res.data)
}

async function deleteApi(url) {
    return axios.delete(url).then(res => res.data)
}

async function postApiLogin(url, data) {
    return axiosLogin.post(url, data, { method: 'POST' })
        .then(res => res.data)
}




export {
    getApi,
    postApi,
    putApi,
    deleteApi,
    postApiLogin
}