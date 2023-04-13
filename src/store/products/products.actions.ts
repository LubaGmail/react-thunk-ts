import { Dispatch } from "redux";

import { PRODUCTS_ACTION_ENUM, ProductsArr } from "./products.types"; 
import { getAllProducts } from "../../utils/firebase/firebase";
import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

export type FetchProuctsStart = Action<PRODUCTS_ACTION_ENUM.GET_PRODUCTS_START>;
export type FetchProductsSuccess = ActionWithPayload<PRODUCTS_ACTION_ENUM.GET_PRODUCTS_SUCCESS, ProductsArr[]>;
export type FetchProductsFailed = ActionWithPayload<PRODUCTS_ACTION_ENUM.GET_PRODUCTS_FAILURE, Error>;
export type ProductsAction = FetchProuctsStart | FetchProductsSuccess| FetchProductsFailed;

export const fetchProductsStartAsync = () => {
    return async (dispatch: Dispatch) => {
        const startAction: FetchProuctsStart = createAction(PRODUCTS_ACTION_ENUM.GET_PRODUCTS_START); 
        dispatch(startAction);
        try {
            // array of arrays
            const productsArr = await getAllProducts();
            const successAction: FetchProductsSuccess = createAction(PRODUCTS_ACTION_ENUM.GET_PRODUCTS_SUCCESS, productsArr);
            dispatch(successAction);
        } catch (error: any | unknown) {
            alert(error.toString());
            const failedAction: FetchProductsFailed = createAction(PRODUCTS_ACTION_ENUM.GET_PRODUCTS_FAILURE, error);
            dispatch(failedAction);
            dispatch(error);
        }
    }
}