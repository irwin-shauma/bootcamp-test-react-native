import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constants/constant"

const getCandidateEssayAnswerHeaders = () => {
    return getApi(`${BASE_URL}/candidate-essay-answer-headers`)
}

const getSingleCandidateEssayAnswerHeader = () => {
    return getApi(`${BASE_URL}/candidate-essay-answer-headers/${id}`)
}

const findByAssignId = (id) => {
    return getApi(`${BASE_URL}/candidate-essay-answer-headers/assign/${id}`)
}

const insertCandidateEssayAnswerHeader = (data) => {
    return postApi(`${BASE_URL}/candidate-essay-answer-headers`, data)
}

const updateCandidateEssayAnswerHeader = (data) => {
    return putApi(`${BASE_URL}/candidate-essay-answer-headers`, data)
}

const giveScore = (data) => {
    return putApi(`${BASE_URL}/candidate-essay-answer-headers/score`, data)
}

const deleteCandidateEssayAnswerHeader = (id) => {
    return deleteApi(`${BASE_URL}/candidate-essay-answer-headers/${id}`)
}


export {
    getCandidateEssayAnswerHeaders,
    getSingleCandidateEssayAnswerHeader,
    findByAssignId,
    insertCandidateEssayAnswerHeader,
    updateCandidateEssayAnswerHeader,
    giveScore,
    deleteCandidateEssayAnswerHeader
}