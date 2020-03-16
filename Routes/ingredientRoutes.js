const express = require('express');

const ingredientController = require('../Controllers/ingredientController');

const router = express.Router();

router.post('/add', ingredientController.addIngredient);

module.exports = router;
