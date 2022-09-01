import { deleteApi, getApi, postApi, putApi } from "../common/api"
import { BASE_URL } from "../constant/constant";

const getEmployees = () => {
    return getApi(`${BASE_URL}/employees`)
}

const getSingleEmployee = (id) => {
    return getApi(`${BASE_URL}/employees/${id}`)
}

const getEmployeeByUserId = (id) => {
    return getApi(`${BASE_URL}/employees/employee/${id}`)
}

const insertEmployee = (data) => {
    return postApi(`${BASE_URL}/employees`, data)
}

const updateEmployee = (data) => {
    return putApi(`${BASE_URL}/employees`, data)
}

const deleteEmployee = (id) => {
    return deleteApi(`${BASE_URL}/employees/${id}`)
}

export {
    getEmployees,
    getSingleEmployee,
    getEmployeeByUserId,
    insertEmployee,
    updateEmployee,
    deleteEmployee
}