import { ProductType } from "./products.types";
import { RootState } from "../store";

export const selectProducts = (state: RootState) => {
    return state.products.productsArr;
}

export const selectFeatured = (state: RootState): ProductType[] => {
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