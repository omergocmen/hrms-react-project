import { combineReducers } from "redux";
import employerReducer from '../reducers/employerReducer'
import authReducer from "../reducers/authReducer";


const rootReducer=combineReducers({
    employer:employerReducer,
    auth:authReducer,
})


export default rootReducer;