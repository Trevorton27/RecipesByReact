import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RecipeForm = () => {
   const [ingredients, setIngredients] = useState([{}]);
   const [steps, setSteps] = useState(['']);

   const handleAddIngredientInput = (event) => {
      setIngredients((ingredients) => [...ingredients, '']);
   };

   const handleAddStepInput = (event) => {
      setSteps((steps) => [...steps, '']);
   };

   const ingredientInputs = ingredients.map((ingredient, key) => {
      return (
         <>
            <Row className='my-1'>
               <Col xs={2}>
                  <Form.Control
                     type='number'
                     placeholder='Select Amount'
                     min='0'
                  />
               </Col>
               <Col xs={8}>
                  <Form.Control
                     id={ingredient + key}
                     type='text'
                     placeholder='Enter Ingredient'
                  />
               </Col>
               <Col xs={2}>
                  <Form.Control as='select'>
                     <option selected disabled hidden>
                        Measurement
                     </option>
                     <option>Cups</option>
                     <option>Ounces</option>
                     <option>Pounds</option>
                     <option>Teaspoons</option>
                     <option>Tablespoons</option>
                     <option>Item</option>
                  </Form.Control>
               </Col>
            </Row>
         </>
      );
   });

   const stepInputs = steps.map((step, key) => {
      return (
         <>
            <Row className='my-1'>
               <Col xs={2}>
                  <Form.Control
                     type='number'
                     placeholder='Step #'
                     min='1'
                     id={'step ' + (key + 1)}
                  />
               </Col>
               <Col xs={10}>
                  <Form.Control
                     as='textarea'
                     id={step + key}
                     type='text'
                     placeholder='Enter Step Directions'
                  />
               </Col>
            </Row>
         </>
      );
   });

   return (
      <Container className='mt-5'>
         <Form>
            <Form.Group controlId='formBasicEmail'>
               <Form.Label>Recipe Title</Form.Label>
               <Form.Control type='text' placeholder='Enter Recipe Title' />
               <Form.Label>Recipe Description</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter Recipe Description'
               />
               <Form.Label>Recipe Image</Form.Label>
               <Form.Control type='text' placeholder='Enter Image URL' />
               <Form.Group className='my-3'>
                  <Form.Label>Ingredients</Form.Label>
                  {ingredientInputs}
                  <Button
                     className='mt-2'
                     variant='primary'
                     onClick={handleAddIngredientInput}>
                     Add Another Ingredient
                  </Button>
               </Form.Group>
               <Form.Group className='my-3'>
                  <Form.Label>Directions</Form.Label>
                  {stepInputs}
                  <Button
                     className='mt-2'
                     variant='primary'
                     onClick={handleAddStepInput}>
                     Add Another Step
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
