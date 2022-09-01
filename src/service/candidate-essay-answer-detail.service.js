import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constant/constant"

const getCandidateEssayAnswerDetailss = () => {
    return getApi(`${BASE_URL}/candidate-essay-answer-details`)
}

const getSingleCandidateEssayAnswerDetails = (id) => {
    return getApi(`${BASE_URL}/candidate-essay-answer-details/${id}`)
}

const getAllByHeaderId = (id) => {
    return getApi(`${BASE_URL}/candidate-essay-answer-details/answers/${id}`)
}

const insertCandidateEssayAnswerDetails = (data) => {
    return postApi(`${BASE_URL}/candidate-essay-answer-details`, data)
}

const updateCandidateEssayAnswerDetails = (data) => {
    return putApi(`${BASE_URL}/candidate-essay-answer-details`, data)
}

const deleteCandidateEssayAnswerDetails = (id) => {
    return deleteApi(`${BASE_URL}/candidate-essay-answer-details/${id}`)
}

export {
    getCandidateEssayAnswerDetailss,
    getSingleCandidateEssayAnswerDetails,
    getAllByHeaderId,
    insertCandidateEssayAnswerDetails,
    updateCandidateEssayAnswerDetails,
    deleteCandidateEssayAnswerDetails
}