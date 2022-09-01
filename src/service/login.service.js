import { postApiLogin } from "../common/api"
import { BASE_URL } from "../constant/constant"
import AsyncStorage from "@react-native-async-storage/async-storage"

const postLogin = (data) => {
    // return postApi('http://192.168.36.1:1234/login', data)
    return postApiLogin(`${BASE_URL}/login`, data)
}
const saveData = async (data) => {
    // localStorage.setItem('data', JSON.stringify(data))
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('data', jsonValue)
    } catch (e) {
        console.log(e)
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('data')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
}

const getToken = () => {
    const token = getData().then(data => data.token)

    if (token) return token
    return null
}

const getRoleCode = () => {
    const roleCode = getData().then(data => data.roleCode)
    if (roleCode) return roleCode
    return null
}

const getId = () => {
    const id = getData().then(data => data.id)
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
