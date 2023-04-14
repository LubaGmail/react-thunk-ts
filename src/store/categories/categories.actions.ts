import { Dispatch } from "redux";
import { getCategories } from "../../utils/firebase/firebase";

import { CATEGORIES_ACTION_ENUM, Category, FirebaseError } from "./categories.types";
import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { DocumentData } from "firebase/firestore";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_SUCCESS, any[] >;
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_FAILED, Error>;
export type CategoriesAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;
  
export const fetchCategoriesAsyncStart = () => {

    return async (dispatch: Dispatch) => {

        const actionStart: FetchCategoriesStart = createAction(CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_START);
        dispatch(actionStart);

        try {
            /* 
                (5) [{…}, {…}, {…}, {…}, {…}]
                    [0]
                        items: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}],
                        title: "Hats"
            */
            const categories: DocumentData[]  = await getCategories();
            
            const actionSuccess: FetchCategoriesSuccess = createAction(CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_SUCCESS, categories);
            dispatch(actionSuccess);

        } catch (error: FirebaseError) {
            alert(error.toString());
            const actionFailed: FetchCategoriesFailed = createAction(CATEGORIES_ACTION_ENUM.FETCH_CATEGORIES_FAILED, error);
            dispatch(actionFailed);
        }
    }
    
}