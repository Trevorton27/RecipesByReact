const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
   ingredients: [
      {
         name: {
            type: String,
            required: true,
         },
         amount: {
            type: Number,
            required: true,
         },
         measurement: {
            type: String,
            required: true,
         },
      },
   ],
   servings: {
      type: Number,
      required: true,
   },
   directions: [
      {
         step: String,
      },
   ],
});

module.exports = mongoose.model('Recipe', recipeSchema);
