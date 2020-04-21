import React from 'react';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import RecipeForm from '../Components/RecipeForm';
import { Container } from 'react-bootstrap';

const AddRecipePage = () => {
   return (
      <>
         <Navigation />
         <Container>
            <RecipeForm />
         </Container>
         <Footer />
      </>
   );
};

export default AddRecipePage;

