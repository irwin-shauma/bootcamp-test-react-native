import {
    CREATE_ROLE,
    GET_ROLES,
    UPDATE_ROLE,
    DELETE_ROLE
} from "../../constants/index"
import { 
    getRoles,
    getSingleRole,
    insertRole,
    updateRole,
    deleteRole 
} from "../../service/role.service";

export const createRole = (roleName, roleCode) => async (dispatch) => {
    try{
        const res = await insertRole({roleName, roleCode})
        dispatch({
            type: CREATE_ROLE,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
}

export const retrieveRoles = () => async (dispatch) => {
    try {
        const res = await getRoles()
        dispatch({
            type: GET_ROLES,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}
export const retrieveSingleRole = (id) => async (dispatch) => {
    try {
        const res = await getSingleRole(id)
        dispatch({
            type: GET_ROLES,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const modifyRole = (data) => async (dispatch) => {
    try{
        const res = await updateRole(data)
        dispatch({
            type: UPDATE_ROLE,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
}

export const removeRole = (id) => async (dispatch) => {
    try{
        const res = await deleteRole(id)
        dispatch({
            type: DELETE_ROLE,
            // payload: res
            payload: {id}
        })
        // return Promise.resolve(res)
    } catch (err) {
        // return Promise.reject(err)
        console.log(err);
    }
}



