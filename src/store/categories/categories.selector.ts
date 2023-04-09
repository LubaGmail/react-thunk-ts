/**
    all state = {categories: {…}, cart: {…}}            obj of objs
      state.categories = {categories: Array(5)}         obj of Array
        state.categories.categories = (5) [{…}, {…}, {…}, {…}, {…}]    Array of objs: title, items
 */
import { CategoryItem, Category, CategoriesMap } from "./categories.types";

export const selectCategories = (state: any) => {
    const categoriesMap = state.categories.categories.reduce (
      // (acc: CategoriesMap, { title, items }) => {
      (acc: CategoriesMap, category: Category) => {
          acc[category.title.toLowerCase()] = category.items;
          return acc;
      }, {} as CategoriesMap
    );
    return categoriesMap;
}

export const selectLoading = (state: any) => {
  return state.categories.loading;
}