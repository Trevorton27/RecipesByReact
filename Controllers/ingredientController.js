const Ingredient = require('../Models/ingredient');
const Recipe = require('../Models/recipe');

exports.addIngredient = (req, res, next) => {
    const ingredient = new Ingredient({
        name: req.body.name,
        calories: req.body.calories,
        servingSize: req.body.servingSize,
        measurement: req.body.measurement,
        protein: req.body.protein,
        fat: req.body.fat,
        carbohydrate: req.body.carbohydrate
    });

    ingredient.save()
        .then(result => {
            console.log('Ingredient Created');
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.editIngredient = (req, res, next) => {
    Ingredient.findById(req.body._id)
        .then(ingredient => {
                ingredient.calories = req.body.calories ? req.body.calories : ingredient.calories;
                ingredient.servingSize = req.body.servingSize ? req.body.servingSize : ingredient.servingSize;
                ingredient.measurement = req.body.measurement ? req.body.measurement: ingredient.measurement;
                ingredient.protein = req.body.protein ? req.body.protein : ingredient.protein;
                ingredient.fat = req.body.fat ? req.body.fat : ingredient.fat;
                ingredient.carbohydrate = req.body.carbohydrate ? req.body.carbohydrate : ingredient.carbohydrate;
                return ingredient.save();
        })
        .then(updatedIngredient => {
            console.log('Ingredient Updated!');
            res.json(updatedIngredient);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.deleteIngredient = (req, res, next) => {
    Ingredient.findById(req.body._id)
        .then(ingredient => {
            ingredient.deleteOne();
            res.send('Ingredient Deleted');
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getIngredientByName = (req, res, next) => {
    Ingredient.find({name: req.body.name})
        .then(ingredients => {
            res.json(ingredients);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getIngredient = (req, res, next) => {
    Ingredient.findById(req.body._id)
        .then(ingredient => {
            res.json(ingredient);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getIngredientByRecipe = (req, res, next) => {
    Recipe.findById(req.body._id)
        .populate()
        .then(recipe => {
            res.json(recipe.ingredients);
        })
        .catch(err => {
            console.log(err);
        })
};
