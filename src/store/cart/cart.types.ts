export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'cart/SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'cart/SET_IS_CART_OPEN',
    CLEAR_CART: 'cart/CLEAR_CART'
}   
export enum CART_ACTION_ENUM {
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
    CLEAR_CART = 'cart/CLEAR_CART'
} 

/*
(2) [{…}, {…}]
    [0]
       { featured: true, id: 2, imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png", name: "Blue Beanie", price: 18, quantity: 1}   
*/

export type CartItemType = {
    featured: boolean,
    id: number,
    imageUrl: string,
    name: string,
    price: number,
    quantity: number
}
export type CartItemsType = {
    [x: string]: any;
    cartItems: CartItemType[];
}