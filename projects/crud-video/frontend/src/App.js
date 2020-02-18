import React from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter,Route} from "react-router-dom"
import Create from './components/Create';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/create" component = {Create}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
