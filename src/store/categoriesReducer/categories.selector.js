import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;





const selectCategories = createSelector(
    [selectCategoriesReducer], (categoriesReducerSlice) => categoriesReducerSlice.categories
    
)


export const selectCategoriesArray = createSelector(
    [selectCategories], (categories) => categories
)