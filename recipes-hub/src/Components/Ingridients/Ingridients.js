import React from 'react'
import {  Link } from "react-router-dom";





class Ingridients extends React.Component{
    state={
        activeRecipe:[]
    }
    componentDidMount = async ()=>{
        const title = this.props.location.state.meal;
    
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
        Recipe: <span>{recipe.strMeal}</span>
        </h4>
        <h4 className="active-recipe__category">
        Origin: <span>{recipe.strArea}</span>
        </h4>
        <p className="active-recipe__website">
            <h3>How to make it</h3>  <span>{recipe.strInstructions}</span>

          </p>
          <p className="active-recipe__website">
            Ingridients: <span>{recipe.strIngredient1}</span>

          </p>
          <p className="active-recipe__website">
              Source:<span><a href={recipe.strSource}>, {recipe.strSource}</a></span> <br/>
              Watch on Youtube:  <span><a href={recipe.strYoutube}>, {recipe.strYoutube}</a></span>


          </p>
          
          <button className="active-recipe__button">
              <Link to="/"> Return to Home</Link>
             
              
              </button>
                </div>
                }
            </div>

        )
    }
}





export default Ingridients;