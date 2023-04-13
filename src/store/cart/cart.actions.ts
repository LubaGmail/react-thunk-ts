import { CartItemType, CartItemsType } from "./cart.types"

const isItemInCart = (product: CartItemType, items: CartItemsType) => {
    return items.find( (el: CartItemType) => el.id === product.id)
}
const updateQuantity = (product: CartItemType, items: CartItemsType, minus=false) => {
    return items.map( (el: CartItemType) => {
        if (el.id === product.id) {
            minus ? --el.quantity : ++el.quantity
        }
        return el
    })
}   

export const addItemToCart = (product: CartItemType, items: CartItemsType) => {
    isItemInCart(product, items) ? items = updateQuantity(product, items) : items.push({ ...product, quantity: 1 })
    return items
}

export const removeItemFromCart = (product: CartItemType, items: CartItemsType) => {
    let updatedItems = items.filter( (el: CartItemType) => el.id !== product.id)
    return updatedItems
}

export const increaseItemQuantity = (product: CartItemType, items: CartItemsType) => {
    let updatedItems = updateQuantity(product, items)
    return updatedItems
}

export const reduceItemQuantity = (product: CartItemType, items: CartItemsType) => {
    let updatedItems = updateQuantity(product, items, true)
    return updatedItems
}
