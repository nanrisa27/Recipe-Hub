import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

class Ingridients extends React.Component{
    state={
        activeRecipe:[]
    }
    componentDidMount = async ()=>{
        const title = this.props.loaction.state.meals;
    
    const req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);
    

    const res= await req.json();
    
    this.setState({activeRecipe:res.meals[0]});
    console.log(this.state.activeRecipe);

    }
    render(){
        const recipe= this.state.activeRecipe;
        return(
            <div className="container">
                {this.state.activeRecipe.length!==0 &&
                <div className="active_recipe">
                    <img className="active-recipe__image" src={recipe.strMealThumb} alt="meal.title"></img>
        <h3 className="active-recipe__title">{recipe.title}</h3>
        <h4 className="active-recipe__category">
        Category: <span>{recipe.strCategory}</span>
        </h4>
          <p className="active-recipe__website">
              Website:  <span><a href={recipe.strYoutube}>{recipe.strYoutube}</a></span>

          </p>
          <button className="active-recipe__button">
              <Link to="/"> Return to Home</Link>
             
              
              </button>
                </div>
                }
            </div>

        );
    }
}










export default Ingridients;