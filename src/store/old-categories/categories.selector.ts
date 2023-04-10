/**
    RootState = {categories: {…}, cart: {…}}            
      state.categories = {categories: Array(5)}           all categories
        state.categories.categories = (5) [{…}, {…}, {…}, {…}, {…}]     single category
 */
import { Category, CategoriesMap } from "./categories.types";
import { CategoriesState } from "./categories.reducer";

type StateWrapper = {
  categories: CategoriesState
}

export const selectCategories = (state: StateWrapper) => {
    const categoriesMap = state.categories.categories.reduce (
      (acc: CategoriesMap, category: Category) => {
          acc[category.title.toLowerCase()] = category.items;
          return acc;
      }, {} as CategoriesMap
    );
    return categoriesMap;
}

export const selectLoading = (state: StateWrapper) => {
  return state.categories.loading;
}