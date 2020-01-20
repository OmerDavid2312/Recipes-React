import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';
import AddRecipes from './AddRecipes';
import MyRecipes from './MyRecipes';
import Favorite from './Favorite';

const Router = () => (
    <BrowserRouter>
     <Switch>
          <Route path="/" component={App} exact />
          <Route path="/recipe/:id" component={Recipe}/>
          <Route path="/AddRecipes" component={AddRecipes}/>
          <Route path="/MyRecipes" component={MyRecipes}/>
          <Route path="/Favorite" component={Favorite}/>


      </Switch>

    </BrowserRouter>
);

export default Router;