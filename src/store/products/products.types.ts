export enum PRODUCTS_ACTION_ENUM {
    GET_PRODUCTS_START = 'products/GET_PRODUCTS_START',
    GET_PRODUCTS_SUCCESS = 'products/GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAILURE = 'products/GET_PRODUCTS_FAILURE',
}

/*
(5) [Array(9), Array(5), Array(6), Array(8), Array(7)]

    (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        
        {featured: false, id: 1, imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png', price: 25, name: 'Brown Brim'}
*/

export type ProductType = {
    featured: boolean,
    id: number,
    imageUrl: string,
    price: number,
    name: string
}
// array of arrays
export type ProductsArr= {
    [x: string]: any,
    products: ProductType[]
}
