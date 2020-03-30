const express = require('express');

const router = express.Router();

router.post('/add-recipe', (req, res) => {
   res.status(201).json({
      message: 'Your post method was successful',
      data: req.body.data,
   });
});

router.get('/get-recipe', (req, res) => {
   res.status(200).json({
      message: 'Your get method was successful',
      data: req.body.data,
   });
});

router.put('/edit-recipe', (req, res) => {
   res.status(200).json({
      message: 'Your put method was successful',
      data: req.body.data,
   });
});

router.delete('/delete-recipe', (req, res) => {
   res.status(200).json({
      message: 'Your delete method was successful',
      data: `You successfully delete ${req.body.data}`,
   });
});

module.exports = router;
