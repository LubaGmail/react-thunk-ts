import { CartState } from "./cart.reducer";
import { CartItemType } from "./cart.types";
import { RootState } from "../store";

export const selectCart = (state: RootState): CartState => {
    return state.cart;
}
export const selectCartItems = (state: RootState): CartItemType[] => {
    return state.cart.cartItems;
}
export const selectCartTotalCount = (state: RootState) => {
    const { cartItems } = state.cart;
    const total = cartItems.reduce((accum, el) => {
        return accum += el.quantity;
    }, 0)
    return total;
}
export const selectCartTotalCost = (state: RootState): number => {
    const { cartItems } = state.cart;
    const cost = cartItems.reduce((accum, el) => {
        return accum = accum + el.price * el.quantity;
    }, 0)
    return cost;
}
export const selectIsCartOpen = (state: RootState): boolean => {
    return state.cart.isCartOpen;
}
