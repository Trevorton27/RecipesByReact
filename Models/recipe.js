const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdOn: {
        type: Date,
        required: true
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ingredients: [
        {
            _id: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Ingredient'
            },
            servings: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Recipe', recipeSchema);
