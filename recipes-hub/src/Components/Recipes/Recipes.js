import React from 'react';
import {  Link } from "react-router-dom";


const Recipes= (props)=>{
    return(
        <div className="container">
            <div className= "row">
            {props.meals.map((meal) =>{
          return(
              <div key={meal.idMeal} className="col-md-4" style={{marginBottom:"2rem"}}>
                  <div className="recipe__box">
                      <img 
                      className="recipe__box-img" 
                      src={meal.strMealThumb}
                      alt={meal.strMeal}/>
                      <div className="recipe__text">
                          <h5 className="recipes__title">{meal.strMeal}</h5>
                          <p className="recipes__subtitle">Origin: <span>
                              {meal.strArea}
                              </span></p>

                      </div>
                      <button className="recipe_buttons"> 
                      <Link to={{pathname:`/meal/${meal.idMeal}`,
                      state: {meal:meal.strMeal}
                      
                    }}>View Recipe </Link></button>
                  </div>
              </div>
            
          
          );
        }
        )}
            </div>
        

        </div>
    );
}






export default Recipes;