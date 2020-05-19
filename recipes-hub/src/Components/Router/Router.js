import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ingridients from "../Ingridients/Ingridients";
import App from '../Apps/App';
import Form from '../Form/Form';



const Router = ()=>{
    return(
        
        <BrowserRouter>
        <Switch>
        
          <Route path="/" component={App} exact/>
          <Route path="/meal/:id" component={Ingridients}/>
        </Switch>
        </BrowserRouter>
       

    )
}





export default Router;