# **Recipes by React Requirements**

-  Create, save, and edit recipes with a list of ingredients.

-  Search Recipes by Ingredient

-  Create, save, and edit ingredients that can be added to recipes.

-  Search and display all ingredients for a recipe.

-  Allow user login and authentication. Store user information in a session.

#

## **Blueprint**

1. **Front-End**
   1. Views
      1. Login
      1. Add Recipe
      1. Add Ingredient
      1. Search Recipes
      1. Recipe Dashboard
      1. User Management
   1. State Management
      -  Context API
      -  useState
   1. HTTP Requests
      -  Axios
      -  Create User
      -  Create Recipe
      -  Create Ingredient
      -  Get All Ingredients
      -  Get Ingredients By Recipe
      -  Get Recipes by Ingredient
      -  Get All Recipes
      -  Get Specific User
      -  Get Specific Ingredient
      -  Get Specific Recipe
      -  Edit Recipe
      -  Edit Ingredient
      -  Edit User
      -  Delete Recipe
      -  Delete Ingredient
      -  Delete User
   1. CSS Library
      -  Bootstrap
1. **Back-End**

   1. Routes
      1. Ingredients
         -  CreateIngredient
         -  EditIngredient
         -  DeleteIngredient
         -  GetAllIngredients
         -  GetIngredient
         -  GetIngredientsByRecipe
      1. Recipes
         -  CreateRecipe
         -  EditRecipe
         -  DeleteRecipe
         -  GetAllRecipes
         -  GetRecipe
         -  GetRecipesByIngredient
      1. Users
   1. Controllers
      -  UsersController
      -  RecipesController
      -  IngredientsController
   1. Database Communication
      -  Mongoose
   1. Models
      1. Ingredient
         1. Properties
            -  Name
            -  Calories
            -  Serving Size
            -  Protein
            -  Carbs
            -  Fat
            -  Recipes
         1. Methods
            -  AddToRecipe
            -  DeleteFromRecipe
      1. Recipe
         1. Properties
            -  Name
            -  Description
            -  Directions
            -  CreatedBy
            -  CreatedOn
            -  Users
            -  Ingredients
         1. Methods
            -  DeleteFromUser
            -  AddToUser
      1. User
         1. Properties
            -  Username
            -  Password
            -  Email
            -  Recipes
         1. Methods

1. **Database**

   1. Relational or Non-relational?
      -  MongoDB
   1. Tables
      -  Recipes
      -  Ingredients
      -  Users
   1. Document fields
      -  Recipe
         -  Name
         -  Ingredients
         -  CreatedBy
         -  CreatedOn
         -  Users
      -  Ingredient
         -  Serving Size
         -  Calories
         -  Name
         -  Recipes
         -  Protein
         -  Carbs
         -  Fat
      -  User
         -  Username
         -  Email
         -  Password
         -  Recipes

#

## **Technologies**

1. **Front-End**
   -  React w/Hooks & Context API
   -  Axios
   -  Bootstrap
   -  CRA-Build-Watch
1. **Back-End**
   -  Nodemon
   -  Express
   -  Mongoose
   -  Body-Parser
1. **Database**
   -  MongoDB
