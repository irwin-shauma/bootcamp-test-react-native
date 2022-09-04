import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constants/constant";

const getRoles = () => {
    return getApi(`${BASE_URL}/roles`)
}

const getSingleRole = (id) => {
    return getApi(`${BASE_URL}/roles/${id}`)
}

const insertRole = (data) => {
    return postApi(`${BASE_URL}/roles`, data)
}

const updateRole = (data) => {
    return putApi(`${BASE_URL}/roles`, data)
}

const deleteRole = (id) => {
    return deleteApi(`${BASE_URL}/roles/${id}`)
}

export {
    getRoles,
    getSingleRole,
    insertRole,
    updateRole,
    deleteRole
}