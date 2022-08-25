import { getByPlaceholderText } from "@testing-library/react";
import { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const INITIAL_STATE = {
    categories: [],
}



export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {...state, categories:payload}
        default:
            return {...state};
    }
}




