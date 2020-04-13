import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const dateTime = new Date().getFullYear();
const Footer = () => {
   return (
      <Navbar fixed='bottom' bg='primary'>
         <Container fluid>
            <div className='text-white py-2 mx-auto'>
               Recipes By React{dateTime}
            </div>
         </Container>
      </Navbar>
   );
};

export default Footer;
