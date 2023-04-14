import { ProductType } from "./products.types";
import { ProductsState } from "./products.reducer";

export const selectProducts = (state: any) => {
    return state.products.productsArr;
}

type StateWrapper = {
    products: ProductsState
}

export const selectFeatured = (state: StateWrapper): ProductType[] => {
    const featured: ProductType[] = [];              
    const productsArr = state.products.productsArr;

    productsArr.forEach((group) => {
        group.forEach( (product: ProductType) => {
            if (product.featured) {
                featured.push(product)
            }
        })
    })
    return featured;
}

export const selectLoading = (state: any): boolean => {
    return state.products.loading;
}