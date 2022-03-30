import { combineReducers } from "redux";
import userReducer from "./userReducer";
import messengerReducer from "./naikanReducer";

const reducers = combineReducers({
    user: userReducer,
    messenger: messengerReducer
});

export default reducers;