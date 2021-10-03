import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomNavBar from './Components/CustomNavbar/CustomNavbar.js'
import Home from './Components/Home/Home.js';


function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <CustomNavBar />
        <Switch>
          <Route path="/home"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
