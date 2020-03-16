const Ingredient = require('../Models/ingredient');

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
