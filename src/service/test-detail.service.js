import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constant/constant";

const getTestDetails = () => {
    return getApi(`${BASE_URL}/test-details`)
}

const getSingleTestDetail = (id) => {
    return getApi(`${BASE_URL}/test-details/${id}`)
}

const findAllByTestHeaderId = (id) => {
    return getApi(`${BASE_URL}/test-details/${id}/test-details`)
}

const insertTestDetail = (data) => {
    return postApi(`${BASE_URL}/test-details`, data)
}

const updateTestDetail = (data) => {
    return putApi(`${BASE_URL}/test-details`, data)
}

const deleteTestDetail = (id) => {
    return deleteApi(`${BASE_URL}/test-details/${id}`)
}

export {
    getTestDetails,
    getSingleTestDetail,
    findAllByTestHeaderId,
    insertTestDetail,
    updateTestDetail,
    deleteTestDetail
}