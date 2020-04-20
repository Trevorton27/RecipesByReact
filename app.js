const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const MONGODB_URI =
   'mongodb+srv://sdmm_user:iRqUGgKyAmi6Yg61@cluster0-wlioe.mongodb.net/RecipesByReact?retryWrites=true&w=majority';

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());

app.use('/api', recipeRoutes);

app.use((req, res) => {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

mongoose
   .connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   })
   .then(result => {
      app.listen(3000);
   })
   .catch(err => {
      console.log(err);
   });
