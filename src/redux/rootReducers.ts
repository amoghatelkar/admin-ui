import { combineReducers } from "redux";
import userReducer from "./users/usersReducer";

const rootReducers = combineReducers({
    users : userReducer
});

export  default rootReducers