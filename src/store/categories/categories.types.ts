import { DocumentData } from "firebase/firestore";

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
    (5) [{…}, {…}, {…}, {…}, {…}]
        [0]
            items: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            title: "Hats"
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