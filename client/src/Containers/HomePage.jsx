import React from 'react';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import RecipeCard from '../Components/RecipeCard';
import { Container, Row } from 'react-bootstrap';

const HomePage = () => {
   return (
      <>
         <Navigation />
         <Container>
            <Row>
               <RecipeCard />
               <RecipeCard />
               <RecipeCard />
               <RecipeCard />
               <RecipeCard />
               <RecipeCard />
            </Row>
         </Container>
         <Footer />
      </>
   );
};

export default HomePage;
