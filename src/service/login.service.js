import { postApi } from "../common/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

const postLogin = (data) => {
    return postApi('http://192.168.10.48:1234/login', data)
}
const saveData = async (data) => {
    // localStorage.setItem('data', JSON.stringify(data))
    try{
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('data', jsonValue)
    } catch (e) {
        console.log(e)
    }
}

const getData = async () => {
    // const data = localStorage.getItem('data')
    // if (data) {
    //     return JSON.parse(data)
    // }
    // return null
    try {
        const jsonValue = await AsyncStorage.getItem('data')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e){
        console.log(e);
    }
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
