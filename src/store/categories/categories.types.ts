export const CATEGORIES_ACTION_TYPES = {
  GET_CATEGORIES_START: 'categories/GET_CATEGORIES_START',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE:  'categories/GET_CATEGORIES_FAILURE',
};
  
export enum CATEGORIES_ACTION_ENUM {
  GET_CATEGORIES_START ='categories/GET_CATEGORIES_START',
  GET_CATEGORIES_SUCCESS = 'categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE =  'categories/GET_CATEGORIES_FAILURE'
}

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

export type CategoriesMap = {
  [key: string]: CategoryItem[];
}