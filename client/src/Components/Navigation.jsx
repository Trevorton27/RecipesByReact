import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const Navigation = () => {
   return (
      <Navbar bg='primary' variant='dark' stick='top'>
         <Navbar.Brand href='/'>RecipesByReact</Navbar.Brand>
         <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/add-recipe'>Add Recipe</Nav.Link>
         </Nav>
         <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-light'>Search Recipes</Button>
         </Form>
      </Navbar>
   );
};

export default Navigation;