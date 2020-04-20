const express = require('express');
const recipeController = require('../controllers/recipeController');

const router = express.Router();

router.post('/add-recipe', recipeController.addRecipe);

router.get('/get-recipe', recipeController.getRecipe);

router.get('/get-all-recipes', recipeController.getAllRecipes);

router.put('/edit-recipe', recipeController.editRecipe);

router.delete('/delete-recipe', recipeController.deleteRecipe);

module.exports = router;
