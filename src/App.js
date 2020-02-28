import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import  Navbar  from "./Components//Navbar/Navbar";
import SearchArea from './Components/SearchArea/SearchArea';
import Favourties from './Components/Favourites/Favourties';
import ModelManager from './Components/ModelManager/ModelManager';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <ModelManager/>
      <Navbar />
      <Switch>
        <Route path="/" exact  component={SearchArea} />
        <Route path="/favourties"  component={Favourties} />
        <Route path="/login"  component={Login} />
        <Route path="/register"  component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;