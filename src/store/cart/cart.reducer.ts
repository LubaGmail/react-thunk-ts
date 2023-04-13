import { AnyAction } from "redux";
import { CART_ACTION_ENUM, CartItemType, CartItemsType } from "./cart.types";

export type CartState = {
    readonly cartItems: CartItemType[],
    readonly isCartOpen: boolean
}

export const INITIAL_CART_STATE: CartState = {
    cartItems: [],
    isCartOpen: false
}

/**
    state slice = {cartItems: Array(0), isCartOpen: false}
  */

export const cartReducer = (state = INITIAL_CART_STATE, action: AnyAction) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_ENUM.SET_CART_ITEMS:
            return { ...state, cartItems: payload }
        case CART_ACTION_ENUM.SET_IS_CART_OPEN:
            return { ...state, isCartOpen: !state.isCartOpen }
        case CART_ACTION_ENUM.CLEAR_CART:
             return {...state, cartItems: [], isCartOpen: false}
        default:
            return state
    }
}
