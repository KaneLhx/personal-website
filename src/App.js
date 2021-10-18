import './App.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CustomNavBar from './Components/CustomNavbar/CustomNavbar.js'
import BusinessCard from './Components/BusinessCard/BusinessCard.js';
import Home from './Components/Home/Home.js';
import TicTacToe from './Components/TicTacToe/TicTacToe.js';
import PlayerOption from './Components/PlayerOption/PlayerOption.js';


function App() {
  return (
      <HashRouter basename='/'>
        <CustomNavBar />
        <Switch>
        <Route path="/business-card"><BusinessCard /></Route>
        <Route path="/tic-tac-toe/:player_option" children={<TicTacToe />}></Route>
        <Route path="/tic-tac-toe"><PlayerOption /></Route>
        <Route path="/"><Home /></Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
