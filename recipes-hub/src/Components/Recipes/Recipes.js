import React from 'react';







const Recipes= (props)=>{
    return(
        <div className="container">
            <div className="row">
            {props.meals.map((meal) =>{
          return(
              <div key={meal.idMeal} className="col-md-4" style={{marginBottom:"2rem"}}>
                  <div className="recipe__box">
                      <img 
                      className="recipe__box-img" 
                      src={meal.strMealThumb}
                      alt={meal.strMeal}/>
                      <div className="recipe__text">
                          <h5 class="recipe__title">{meal.strMeal}</h5>
                          <p class="recipe__subtitle">Country: <span>
                              {meal.strArea}
                              </span></p>

                      </div>
                      <button className="recipe__">View ingridients</button>
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