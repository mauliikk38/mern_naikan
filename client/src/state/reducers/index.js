import { combineReducers } from "redux";
import userReducer from "./userReducer";
import naikanReducer from "./naikanReducer";

const reducers = combineReducers({
    user: userReducer,
    naikan: naikanReducer
});

export default reducers;