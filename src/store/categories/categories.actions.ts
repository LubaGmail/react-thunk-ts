import { Dispatch } from "redux";
import { getCategories } from "../../utils/firebase/firebase";

import { CATEGORIES_ACTION_ENUM } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesAsyncStart = () => {
    return async (dispatch: Dispatch) => {
        dispatch(createAction(CATEGORIES_ACTION_ENUM.GET_CATEGORIES_START));

        try {
            const categories = await getCategories();
            //                    type: 'categories/GET_CATEGORIES_SUCCESS', payload: Array(5)
            dispatch(createAction(CATEGORIES_ACTION_ENUM.GET_CATEGORIES_SUCCESS, categories));

        } catch (error: any) {
            alert(error.toString());
            dispatch(createAction(CATEGORIES_ACTION_ENUM.GET_CATEGORIES_FAILURE));
        }
    }
}