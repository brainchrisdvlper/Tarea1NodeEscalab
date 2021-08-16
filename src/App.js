import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

// Paginas
import Autos from "./pages/Autos"
import Home from "./pages/Home"
import Header from "./components/nav/Header"



const App = () =>{
  return (
   <>
   <Header/>
   <ToastContainer />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Autos" component={Autos} />
      </Switch>  
  </>
  );
};

export default App;