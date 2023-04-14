export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: 'categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'categories/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED:  'categories/FETCH_CATEGORIES_FAILED',
};
  
export enum CATEGORIES_ACTION_ENUM {
  FETCH_CATEGORIES_START ='categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED =  'categories/FETCH_CATEGORIES_FAILED'
}

/* 
    [0] {title: 'Hats', items: Array(9)}
    [1] {title: 'Jackets', items: Array(5)}
    [2] {items: Array(6), title: 'Mens'}
        [0] {name: 'Camo Down Vest', id: 30, imageUrl: 'https://i...', price: 325}
        [1] {id: 31, imageUrl: 'https://i...', price: 20, name: 'Floral T-shirt'}
*/

export type CategoryItem = {
  id: number,
  imageUrl: string,
  name: string,
  price: number
}

export type Category = {
  title: string,
  imageUrl: string,
  items: CategoryItem[]
}

export type FirebaseError = any | unknown;

export type CategoriesMap = {
  [key: string]: CategoryItem[];
}