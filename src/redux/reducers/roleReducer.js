import {
    CREATE_ROLE,
    GET_ROLES,
    UPDATE_ROLE,
    DELETE_ROLE
} from "../../constants/index"

const initialState = []
function roleReducer(roles = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_ROLE:
            return [...roles, payload]
        case GET_ROLES: {
            return payload
        }
        case UPDATE_ROLE:
            return roles.map((role) => {
                if (role.id === payload.id) {
                    return {
                        ...role,
                        ...payload
                    }
                } else {
                    return role;
                }
            })
        case DELETE_ROLE:
            return roles.filter(({ id }) => id !== payload.id)
        default:
            return roles;
    }
}

export default roleReducer