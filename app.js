const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ingredientRoutes = require('./Routes/ingredientRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use('/api/ingredient', ingredientRoutes);

app.use((req, res) => {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

mongoose.connect('mongodb+srv://sdmm_user:@cluster0-wlioe.mongodb.net/RecipesByReact?retryWrites=true&w=majority',
    {
       useUnifiedTopology: true,
       useNewUrlParser: true
})
    .then(result => {
       app.listen(3000);
    })
    .catch(err => {
       console.log(err);
    });


