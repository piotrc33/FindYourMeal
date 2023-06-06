import { Recipe } from "../interfaces/recipeResponse.i";

export type RootStackParamList = {
  Home: undefined;
  Search: { query: string };
  Recipe: { recipe: Recipe | undefined };
  Recommended: undefined;
  FavoriteList: undefined;
  SearchResult: { resultsRecipes: Recipe[] };
};

export type Diet =
  | "ketogenic"
  | "vegetarian"
  | "vegan"
  | "paleo"
  | "gluten-free";

export type MealType =
  | "breakfast"
  | "soup"
  | "main course"
  | "dessert"
  | "side dish";
