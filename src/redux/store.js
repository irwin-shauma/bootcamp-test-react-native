import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CountReducer from "./reducers/countReducer";
import RoleReducer from "./reducers/roleReducer";

const rootReducer = combineReducers({
    count: CountReducer,
    roles: RoleReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeWithDevTools(applyMiddleware(...middleware))

)