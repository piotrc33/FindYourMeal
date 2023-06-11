import * as SQLite from "expo-sqlite";
import { ExtendedIngredient, Recipe } from "../interfaces/recipeResponse.i";

const setupDatabase = () => {
  const db = SQLite.openDatabase("recipes.db");

  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Ingredients (
      id INTEGER PRIMARY KEY,
      recipeId INTEGER,
      name TEXT,
      amount REAL,
      unit TEXT,
      FOREIGN KEY (recipeId) REFERENCES SavedRecipes (id) ON DELETE CASCADE
    );`
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS SavedRecipes (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      cookingMinutes INTEGER,
      servings INTEGER,
      healthScore INTEGER,
      summary TEXT,
      ingredients TEXT,
      instructions TEXT
    );`
    );
  });
};

export const logSavedRecipes = () => {
  const db = SQLite.openDatabase("recipes.db");

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM SavedRecipes;",
      [],
      (_, { rows }) => {
        console.log("Saved Recipes:");
        rows._array.forEach((row) => {
          console.log(row);
        });
      },
      (_, error) => {
        console.error("Error fetching saved recipes:", error);
        return true;
      }
    );
  });
};

export const saveRecipe = (recipe: Recipe) => {
  const db = SQLite.openDatabase("recipes.db");

  const {
    id,
    title,
    cookingMinutes,
    servings,
    healthScore,
    summary,
    extendedIngredients,
    instructions,
  } = recipe;

  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO SavedRecipes (id, title, cookingMinutes, servings, healthScore, summary, instructions)
      VALUES (?, ?, ?, ?, ?, ?, ?);`,
      [id, title, cookingMinutes, servings, healthScore, summary, instructions],
      (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          console.log("Recipe saved successfully!");
          saveIngredients(id, extendedIngredients); // Save the associated ingredients
        } else {
          console.log("Failed to save the recipe.");
        }
      },
      (_, error) => {
        console.error("Error saving recipe:", error);
        return true; // Return true to indicate that the error has been handled
      }
    );
  });
};

export const saveIngredients = (
  recipeId: number,
  ingredients: ExtendedIngredient[]
) => {
  const db = SQLite.openDatabase('recipes.db');

  db.transaction((tx) => {
    ingredients.forEach((ingredient: ExtendedIngredient) => {
      const { name, amount, unit } = ingredient;
      tx.executeSql(
        `INSERT INTO Ingredients (recipeId, name, amount, unit)
        VALUES (?, ?, ?, ?);`,
        [recipeId, name, amount, unit],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log("Ingredient saved successfully!");
          } else {
            console.log("Failed to save the ingredient.");
          }
        },
        (_, error) => {
          console.error("Error saving ingredient:", error);
          return true; // Return true to indicate that the error has been handled
        }
      );
    });
  });
};

// Function to log the current items in the Ingredients table
export const logIngredients = () => {
  const db = SQLite.openDatabase("recipes.db");

  db.transaction((tx) =>
    tx.executeSql(
      "SELECT * FROM Ingredients",
      [],
      (_, { rows }) => {
        console.log("Ingredients: ");
        rows._array.forEach((row) => console.log(row));
      },
      (_, error) => {
        console.error(error);
        return true;
      }
    )
  );
};

export const deleteTables = () => {
  const db = SQLite.openDatabase("recipes.db");

  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE IF EXISTS SavedRecipes; DROP TABLE IF EXISTS Ingredients;",
      [],
      () => {
        console.log("Tables deleted successfully.");
      },
      (_, error) => {
        console.error("Error deleting tables:", error);
        return true;
      }
    );
  });
};

export default setupDatabase;
