import { createAction } from "../../utils/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categories)=> {
   return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categories);
}
// export const setCategories = (categories)=> {
//     return({type:CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORIES, payload:categories})
// }
