import React, { Component } from 'react';
import Footer from '../Components/Footer/Footer';
import Form from '../Components/Form/Form';
import Recipes from '../Components/Recipes/Recipes'
import './App.css';





class App extends Component {
  state= {
    meals:[]
  }
  


  getRecipe = async(e)=>{

    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
    

    const data= await api_call.json();
    this.setState({meals:data.meals});
    
    console.log(this.state.meals);

  }


  render(){
    return (
      <div className="App">
        
        <header className= "recipe-header">

          <h1 className="title">Recipe Hub</h1>
        </header>
        <Form getRecipe= {this.getRecipe}/>
        <Recipes meals={this.state.meals}/>
        <Footer/>
        
        

       
        
        
         
          
      </div>
    );

  }
  
}

export default App;
