import { Product } from "./products.types";
import { ProductsState } from "./products.reducer";

export const selectProducts = (state: any) => {
    return state.products.productsArr;
}

type StateWrapper = {
    products: ProductsState
}

export const selectFeatured = (state: StateWrapper) => {
    const featured:Product[] = [];              
    const productsArr = state.products.productsArr;

    productsArr.forEach((group) => {
        group.forEach( (product:Product) => {
            if (product.featured) {
                featured.push(product)
            }
        })
    })
    return featured;
}

export const selectLoading = (state: any) => {
    return state.products.loading;
}