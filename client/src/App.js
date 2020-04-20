import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Containers/HomePage';
import AddRecipePage from './Containers/AddRecipePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/add-recipe' component={AddRecipePage} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
