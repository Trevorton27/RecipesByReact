import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const RecipeForm = () => {
   const [numOfIngredients, setNumOfIngredients] = useState(['']);
   const [numOfSteps, setNumOfSteps] = useState(['']);
   const [ingredient, setIngredient] = useState({});
   const [step, setStep] = useState({});
   const [recipe, setRecipe] = useState({
      title: '',
      description: '',
      image: '',
      servings: 0,
      ingredients: [],
      directions: [],
   });

   const handleAddIngredientInput = (event) => {
      setNumOfIngredients((numOfIngredients) => {
         return [...numOfIngredients, ''];
      });
      setRecipe((recipe) => {
         const ingredientsCopy = recipe.ingredients.filter(
            (ingredients) => ingredients
         );
         ingredientsCopy.push(ingredient);
         return { ...recipe, ingredients: ingredientsCopy };
      });
   };

   const handleAddStepInput = (event) => {
      setNumOfSteps((steps) => {
         return [...steps, ''];
      });
      setRecipe((recipe) => {
         const directionsCopy = recipe.directions.filter(
            (directions) => directions
         );
         directionsCopy.push(step);
         return { ...recipe, directions: directionsCopy };
      });
   };

   const handleDescriptionChange = (event) => {
      const description = event.target.value;
      setRecipe((recipe) => {
         return { ...recipe, description: description };
      });
   };

   const handleTitleChange = (event) => {
      const title = event.target.value;
      setRecipe((recipe) => {
         return { ...recipe, title: title };
      });
   };

   const handleImageChange = (event) => {
      const imageURL = event.target.value;
      setRecipe((recipe) => {
         return { ...recipe, image: imageURL };
      });
   };

   const handleIngredientAmount = (event) => {
      const amount = event.target.value;
      setIngredient((ingredient) => {
         return { ...ingredient, amount: amount };
      });
   };

   const handleIngredientName = (event) => {
      const name = event.target.value;
      setIngredient((ingredient) => {
         return { ...ingredient, name: name };
      });
   };

   const handleIngredientMeasure = (event) => {
      const measurement = event.target.value;
      setIngredient((ingredient) => {
         return { ...ingredient, measurement: measurement };
      });
   };

   const handleStepNum = (event) => {
      const newStep = event.target.id;
      setStep((step) => {
         return { ...step, step: newStep };
      });
   };

   const handleStepDesc = (event) => {
      const newStepDesc = event.target.value;
      setStep((step) => {
         return { ...step, description: newStepDesc };
      });
   };

   const handleFormSubmit = (event) => {
      console.log(recipe);
      axios
         .post('/api/add-recipe', recipe)
         .then((response) => {
            console.log(response);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const ingredientInputs = numOfIngredients.map((ingredient, key) => {
      return (
         <>
            <Row className='my-1'>
               <Col xs={2}>
                  <Form.Control
                     type='number'
                     placeholder='Select Amount'
                     min='0'
                     onChange={handleIngredientAmount}
                  />
               </Col>
               <Col xs={8}>
                  <Form.Control
                     type='text'
                     placeholder='Enter Ingredient Name'
                     id={ingredient + key}
                     onChange={handleIngredientName}
                  />
               </Col>
               <Col xs={2}>
                  <Form.Control as='select' onChange={handleIngredientMeasure}>
                     <option selected disabled hidden>
                        Measurement
                     </option>
                     <option>Cups</option>
                     <option>Ounces</option>
                     <option>Pounds</option>
                     <option>Tablespoons</option>
                     <option>Teaspo0ns</option>
                  </Form.Control>
               </Col>
            </Row>
         </>
      );
   });

   const stepInputs = numOfSteps.map((step, key) => {
      return (
         <>
            <Row className='my-1'>
               <Col xs={2}>
                  <Form.Control
                     type='text'
                     id={'step ' + (key + 1)}
                     value={'Step ' + (key + 1)}
                     onChange={handleStepNum}
                     disabled='true'
                  />
               </Col>
               <Col xs={10}>
                  <Form.Control
                     as='textarea'
                     id={step + key}
                     type='text'
                     placeholder='Enter Step Directions'
                     onChange={handleStepDesc}
                  />
               </Col>
            </Row>
         </>
      );
   });

   return (
      <Container className='mt-5'>
         <Form onSubmit={handleFormSubmit} action='/'>
            <Form.Group controlId='formBasicEmail'>
               <Form.Label>Recipe Title</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter Recipe Title'
                  onChange={handleTitleChange}
               />
               <Form.Label>Recipe Description</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter Recipe Description'
                  onChange={handleDescriptionChange}
               />
               <Form.Label>Recipe Image</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter an image URL'
                  onChange={handleImageChange}
               />
               <Form.Group className='my-3'>
                  <Form.Label>Ingredients</Form.Label>
                  {ingredientInputs}
                  <Button
                     className='mt-2'
                     variant='primary'
                     onClick={handleAddIngredientInput}>
                     Add Ingredient
                  </Button>
               </Form.Group>
               <Form.Group className='my-3'>
                  <Form.Label>Directions</Form.Label>
                  {stepInputs}
                  <Button
                     className='mt-2'
                     variant='primary'
                     onClick={handleAddStepInput}>
                     Add Step
                  </Button>
               </Form.Group>
            </Form.Group>
            <Button variant='success' size='lg' type='submit' className='p-4'>
               Add Recipe
            </Button>
         </Form>
      </Container>
   );
};

export default RecipeForm;
