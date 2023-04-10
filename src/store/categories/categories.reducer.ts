import { AnyAction } from "redux";

import { CATEGORIES_ACTION_ENUM } from './categories.types';
import { Category } from "./categories.types";

export type CategoriesState = {
    readonly categories: Category[],
    readonly loading: boolean,
    readonly error: Error | null
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    loading: false,
    error: null
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action: AnyAction
): CategoriesState => {
    switch (action.type) {
        case CATEGORIES_ACTION_ENUM.GET_CATEGORIES_START:
            return { ...state, loading: true };
        case CATEGORIES_ACTION_ENUM.GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: false };
        case CATEGORIES_ACTION_ENUM.GET_CATEGORIES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}