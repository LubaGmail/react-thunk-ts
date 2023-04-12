import { Dispatch } from "redux";
import { getCategories } from "../../utils/firebase/firebase";

import { CATEGORIES_ACTION_ENUM, Category, FirebaseError } from "./categories.types";
import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_SUCCESS, Category[] >;
      
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_FAILED, Error>;

export type CategoriesAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;
  
export const fetchCategoriesAsyncStart = () => {

    return async (dispatch: Dispatch) => {

        const actionStart: FetchCategoriesStart = createAction(CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_START);
        dispatch(actionStart);

        try {
            const categories: any  = await getCategories();

            const actionSuccess: FetchCategoriesSuccess = createAction(CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_SUCCESS, categories);
            dispatch(actionSuccess);

        } catch (error: FirebaseError) {
            alert(error.toString());
            const actionFailed: FetchCategoriesFailed = createAction(CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_FAILED, error);
            dispatch(actionFailed);
        }
    }
    
}