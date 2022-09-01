import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constant/constant"

const getCandidates = () => {
    return getApi(`${BASE_URL}/candidates`)
}

const getSingleCandidate = () => {
    return getApi(`${BASE_URL}/candidates/${id}`)
}

const insertCandidate = (data) => {
    return postApi(`${BASE_URL}/candidates`, data)
}

const updateCandidate = (data) => {
    return putApi(`${BASE_URL}/candidates`, data)
}

const deleteCandidate = (id) => {
    return deleteApi(`${BASE_URL}/candidates/${id}`)
}

export {
    getCandidates,
    getSingleCandidate,
    insertCandidate,
    updateCandidate,
    deleteCandidate
}