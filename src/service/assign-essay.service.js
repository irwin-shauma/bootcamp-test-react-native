import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constant/constant";

const getAssignEssays = () => {
    return getApi(`${BASE_URL}/assign-essays`)
}

const getAllByReviewer = (id) => {
    return getApi(`${BASE_URL}/assign-essays/reviewer/${id}`)
}

const getSingleAssignEssay = (id) => {
    return getApi(`${BASE_URL}/assign-essays/${id}`)
}

const insertAssignEssay = (data) => {
    return postApi(`${BASE_URL}/assign-essays`, data)
}

const updateAssignEssay = (data) => {
    return putApi(`${BASE_URL}/assign-essays`, data)
}

const deleteAssignEssay = (id) => {
    return deleteApi(`${BASE_URL}/assign-essays/${id}`)
}


export {
    getAssignEssays,
    getAllByReviewer,
    getSingleAssignEssay,
    insertAssignEssay,
    updateAssignEssay,
    deleteAssignEssay
}