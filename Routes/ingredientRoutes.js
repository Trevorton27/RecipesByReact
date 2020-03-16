const express = require('express');

const ingredientController = require('../Controllers/ingredientController');

const router = express.Router();

router.post('/add', ingredientController.addIngredient);

router.put('/edit', ingredientController.editIngredient);

router.delete('/delete', ingredientController.deleteIngredient);

router.get('/get-by-name', ingredientController.getIngredientByName);

router.get('/get', ingredientController.getIngredient);

router.get('/get-by-recipe', ingredientController.getIngredientByRecipe);

module.exports = router;
