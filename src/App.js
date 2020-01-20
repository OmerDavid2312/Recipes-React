import React, {Component} from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';
import Header from './components/Header'

const API_ID = '69baaa81';
const API_KEY = '4c988b7dda1efaf7ba47f591d1c5e830';

class App extends Component{

  state = {
    recipes : []
  }

  getRecipe = async(e) =>
  {
    const recipeName = e.target.elements.recipeName.value;
    
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await api_call.json();
    // console.log(data.hits);//
    this.setState({recipes : data.hits});
   // console.log(this.state.recipes);

    
  }
  componentDidMount()
  {
    const json = localStorage.getItem('recipes');
    const prevrecipes = JSON.parse(json);
    if(prevrecipes !== null)
    {
      this.setState({recipes :prevrecipes});
    }
    
    
  }
  componentDidUpdate()
  {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes',recipes);
  }
  render()
  {
    return(
      <div>
      <Header/>  
      <Form getRecipe={this.getRecipe} />
      <Recipes results={this.state.recipes} />
      </div>
    );

  }

}

export default App;
