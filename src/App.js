import './App.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CustomNavBar from './Components/CustomNavbar/CustomNavbar.js'
import Home from './Components/Home/Home.js';


function App() {
  return (
    <div className="Container">
      <HashRouter basename='/'>
        <CustomNavBar />
        <Switch>
          <Route path="/"><Home /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
