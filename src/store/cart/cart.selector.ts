import { CartState } from "./cart.reducer";
import { CartItemType } from "./cart.types";

type StateWrapper = {
    cart: CartState
}

export const selectCart = (state: StateWrapper): CartState => {
    return state.cart;
}
export const selectCartItems = (state: StateWrapper): CartItemType[] => {
    return state.cart.cartItems;
}
export const selectCartTotalCount = (state: StateWrapper) => {
    const { cartItems } = state.cart;
    const total = cartItems.reduce((accum, el) => {
        return accum += el.quantity;
    }, 0)
    return total;
}
export const selectCartTotalCost = (state: StateWrapper): number => {
    const { cartItems } = state.cart;
    const cost = cartItems.reduce((accum, el) => {
        return accum = accum + el.price * el.quantity;
    }, 0)
    return cost;
}
export const selectIsCartOpen = (state: StateWrapper): boolean => {
    return state.cart.isCartOpen;
}
