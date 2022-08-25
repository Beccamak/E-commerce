import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => {
    console.log(1);
    console.log(state.categories);
    return state.categories;
}




const selectCategories = createSelector(
    [selectCategoriesReducer], (categoriesReducerSlice) => {
        console.log(categoriesReducerSlice.categories);
        return categoriesReducerSlice.categories;
    }
)


export const selectCategoriesArray = createSelector(
    [selectCategories], (categories) => {
        console.log(categories);
        return categories
    }
)