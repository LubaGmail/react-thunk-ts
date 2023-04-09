import { AnyAction } from "redux";

import { CATEGORIES_ACTION_ENUM } from './categories.types';
import { Category } from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    loading: false,
    error: null
};

export type CategoriesState = {
    readonly categories: Category[],
    readonly isLoading: false,
    readonly error: Error | null
}

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action: AnyAction
) => {
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