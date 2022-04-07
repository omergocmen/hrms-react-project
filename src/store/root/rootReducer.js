import { combineReducers } from "redux";
import employerReducer from '../reducers/employerReducer'
import authReducer from "../reducers/authReducer";
import paginationReducer from '../reducers/paginationReducer'


const rootReducer=combineReducers({
    employer:employerReducer,
    auth:authReducer,
    pagination:paginationReducer
})


export default rootReducer;