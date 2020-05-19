import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ingridients from "../Ingridients/Ingridients";
import App from '../App';





const Router = ()=>{
    return(
        
        <BrowserRouter>
        <Switch>
        
          <Route path="/" component={App} exact/>
          <Route path="/meal/:idMeal" component={Ingridients}/>
        </Switch>
        </BrowserRouter>
        
       

    )
}





export default Router;