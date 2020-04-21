import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = () => {
   return (
      <Card className='m-2 mt-5' style={{ width: '18rem' }}>
         <Card.Img
            variant='top'
            src='https://i0.wp.com/dinnersdishesanddesserts.com/wp-content/uploads/2018/06/Chocolate-Milkshakes-square.jpg?resize=480%2C480&ssl=1'
         />
         <Card.Body>
            <Card.Title>Recipe Title</Card.Title>
            <Card.Text>Some quick example text for testing purposes</Card.Text>
            <Button variant='primary'>See Recipe Details</Button>
         </Card.Body>
      </Card>
   );
};

export default RecipeCard;
