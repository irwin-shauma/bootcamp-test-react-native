import { postApi } from "../common/api"

const postLogin = (data) => {
    return postApi('http://192.168.10.1:1234/login', data)
}
const saveData = (data) => {
    localStorage.setItem('data', JSON.stringify(data))
}

const getData = () => {
    const data = localStorage.getItem('data')
    if (data) {
        return JSON.parse(data)
    }
    return null
}

const getToken = () => {
    const token = getData().token

    if (token) return token
    return null
}

const getRoleCode = () => {
    const roleCode = getData().roleCode
    if (roleCode) return roleCode
    return null
}

const getId = () => {
    const id = getData().id
    if (id) return id;
    return null
}

const clearData = () => {
    localStorage.clear()
}


export {
    postLogin,
    saveData,
    getData,
    getToken,
    getRoleCode,
    getId,
    clearData
}
