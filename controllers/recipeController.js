const Recipe = require('../models/recipe');

exports.addRecipe = (req, res, next) => {
   const title = req.body.title;
   const description = req.body.description;
   const ingredients = req.body.ingredients;
   const servings = req.body.servings;
   const directions = req.body.directions;

   const recipe = new Recipe({
      title: title,
      description: description,
      ingredients: ingredients,
      servings: servings,
      directions: directions,
   });

   recipe
      .save()
      .then(recipe => {
         console.log(recipe);
         res.status(201).json(recipe);
      })
      .catch(err => {
         console.log(err);
         res.status(500).send('Error: Recipe Not Added!');
      });
};

exports.getRecipe = (req, res, next) => {
   const title = req.body.title;

   Recipe.findOne({ title: title })
      .then(recipe => {
         console.log(recipe);
         res.status(200).json(recipe);
      })
      .catch(err => {
         console.log(err);
         res.status(404).send('Error: Could not find Recipe');
      });
};

exports.getAllRecipes = (req, res, next) => {
   Recipe.find()
      .then(recipes => {
         res.status(200).json(recipes);
      })
      .catch(err => {
         console.log(err);
         res.status(500).send('Error: Could not retrieve recipes.');
      });
};

exports.editRecipe = (req, res, next) => {
   const title = req.body.title;
   const newDescription = req.body.newDescription;
   const newTitle = req.body.newTitle;

   Recipe.findOne({ title: title })
      .then(recipe => {
         recipe.title = newTitle;
         recipe.description = newDescription;
         return recipe.save();
      })
      .then(updateRecipe => {
         res.status(200).json(updateRecipe);
      })
      .catch(err => {
         console.log(err);
         res.status(500).send('Error: Could not edit recipe');
      });
};

exports.deleteRecipe = (req, res, next) => {
   const title = req.body.title;

   Recipe.findOne({ title: title })
      .then(recipe => {
         return recipe.deleteOne();
      })
      .then(result => {
         res.status(200).json('Recipe Deleted!');
      })
      .catch(err => {
         console.log(err);
         res.status(500).send('Error: Could not delete Recipe');
      });
};
