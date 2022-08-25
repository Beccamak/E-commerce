import { combineReducers } from "redux";
import { userReducer } from "./userReducer/user.reducer";
import { categoriesReducer } from "./categoriesReducer/categories.reducer";


export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
})