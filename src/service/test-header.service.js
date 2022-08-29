import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constant/constant";

const getTestHeaders = () => {
    return getApi(`${BASE_URL}/test-headers`)
}

const getSingleTestHeader = (id) => {
    return getApi(`${BASE_URL}/test-headers/${id}`)
}

const insertTestHeader = (data) => {
    return postApi(`${BASE_URL}/test-headers`, data)
}

const updateTestHeader = (data) => {
    return putApi(`${BASE_URL}/test-headers`, data)
}

const deleteTestHeader = (id) => {
    return deleteApi(`${BASE_URL}/test-headers/${id}`)
}

export {
    getTestHeaders,
    getSingleTestHeader,
    insertTestHeader,
    updateTestHeader,
    deleteTestHeader
}