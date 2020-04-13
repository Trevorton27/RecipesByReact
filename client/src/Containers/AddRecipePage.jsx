import React from 'react';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import { Container } from 'react-bootstrap';
import RecipeForm from '../Components/RecipeForm';

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
