import { AnyAction } from "redux";
import { PRODUCTS_ACTION_ENUM } from "./products.types"; 
import { ProductsArr  } from "./products.types";

const INITIAL_PRODUCTS_STATE: ProductsState = {
    productsArr: [],
    loading: false,
    error: null
}
export type ProductsState = {
    readonly productsArr: ProductsArr[],
    readonly loading: boolean,
    readonly error: Error | null
}

export const productsReducer = (
        state = INITIAL_PRODUCTS_STATE,
        action: AnyAction) => {
    switch (action.type) {
        case PRODUCTS_ACTION_ENUM.GET_PRODUCTS_START:
            return {...state, loading: true}
        case PRODUCTS_ACTION_ENUM.GET_PRODUCTS_SUCCESS:
            return { ...state, productsArr: action.payload, loading: false }
        case PRODUCTS_ACTION_ENUM.GET_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

