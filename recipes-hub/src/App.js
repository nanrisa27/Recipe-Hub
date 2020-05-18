import React, { Component } from 'react';
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";



class App extends Component {
  render(){
    return (
      <div className="App">
        <Form/>
        <header className= "recipe-header">

          <h1 className="title">Recipe Hub</h1>
        </header>

        <Footer/>
        
        
         
          
      </div>
    );

  }
  
}

export default App;
