import { Dispatch } from "redux";

import { PRODUCTS_ACTION_ENUM } from "./products.types"; 
import { getAllProducts } from "../../utils/firebase/firebase";

export const fetchProductsStartAsync = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: PRODUCTS_ACTION_ENUM.GET_PRODUCTS_START,
        })
        try {
            const productsArr = await getAllProducts();
            dispatch({
                type: PRODUCTS_ACTION_ENUM.GET_PRODUCTS_SUCCESS,
                payload: productsArr
            })
        } catch (error: any | unknown) {
            alert(error.toString());
            dispatch({
                type: PRODUCTS_ACTION_ENUM.GET_PRODUCTS_FAILURE,
                payload: error
            })
        }
    }

}