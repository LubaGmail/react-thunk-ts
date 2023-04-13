import { PRODUCTS_ACTION_ENUM, ProductsArr } from "./products.types"; 
import { ProductsAction } from "./products.actions";

const INITIAL_PRODUCTS_STATE: ProductsState = {
    productsArr: [],
    loading: false,
    error: null
}
export type ProductsState = {
    readonly productsArr: ProductsArr[],        // array of arrays
    readonly loading: boolean,
    readonly error: Error | null
}

export const productsReducer = (
        state = INITIAL_PRODUCTS_STATE,
        action: ProductsAction) => {
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

