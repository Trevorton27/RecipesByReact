const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    servingSize: {
        type: String,
        required: true,
    },
    measurement: {
        type: String,
        required: true
    },
    protein: {
        type: Number
    },
    fat: {
        type: Number
    },
    carbohydrate: {
        type: Number
    },
    recipes: [
        {
            _id: {
                type: Schema.Types.ObjectId,
                ref: 'Recipe'
            }
        }
    ]
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
