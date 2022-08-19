import { combineReducers } from "redux";
import { userReducer } from "./userReducer/user.reducer";



export const rootReducer = combineReducers({
    user: userReducer,
})