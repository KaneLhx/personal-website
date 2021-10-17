import './App.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CustomNavBar from './Components/CustomNavbar/CustomNavbar.js'
import BusinessCard from './Components/BusinessCard/BusinessCard.js';
import Home from './Components/Home/Home.js';
import TicTacToe from './Components/TicTacToe/TicTacToe';


function App() {
  return (
      <HashRouter basename='/'>
        <CustomNavBar />
        <Switch>
        <Route path="/business-card"><BusinessCard /></Route>
        <Route path="/tic-tac-toe"><TicTacToe /></Route>
        <Route path="/"><Home /></Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
