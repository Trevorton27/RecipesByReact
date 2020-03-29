## Recipes by React Requirements

-  Create, save, and edit recipes with a list of ingredients.
-  Search recipes by ingredients
-  Display selected and/or all ingredients

## Blueprint

1. Front-End
   1. Views
      1. Add Recipe
      1. Search Recipes
      1. Recipe Dashboard
   1. State Management
      -  Context API
      -  useState
   1. HTTP Requests
      -  Axios
      -  Create Recipe
      -  Get Recipes by Ingredient
      -  Get All Recipes
      -  Get Specific Recipe
      -  Edit Recipe
      -  Delete Recipe
   1. CSS Library
      -  Bootstrap
1. Back-End
   1. Routes
      1. Recipes
         -  CreateRecipe
         -  EditRecipe
         -  DeleteRecipe
         -  GetAllRecipes
         -  GetRecipe
         -  GetRecipesByIngredient
   1. Controllers
      1. RecipeController
         -  GetRecipe
         -  AddRecipe
         -  DeleteRecipe
         -  EditRecipe
         -  GetAllRecipes
   1. Database Communication
      -  Mongoose
   1. Models
      1. Recipe
         1. Properties
            -  Name
            -  Description
            -  Directions
            -  CreatedBy
            -  CreatedOn
            -  Users
            -  Ingredients - Servings Per
         1. Methods
            -  DeleteFromUser
            -  AddToUser
1. Database
   1. Relational or Non-relational?
      -  MongoDB
   1. Tables
      -  Recipes
   1. Document fields
      -  Recipe
         -  Name
         -  Ingredients
         -  CreatedBy
         -  CreatedOn
         -  Directions

## Technologies

1. Front-End
   1. React w/Hooks & Context API
   1. Axios
   1. Bootstrap
1. **Back-End**
   -  Nodemon
   -  Express
   -  Mongoose
   -  Body-Parser
1. **Database**
   -  MongoDB
