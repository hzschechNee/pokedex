import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect} from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import Pokemon from './pages/Pokemons';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="center container">
      <div className="pokedex">
        <Router>
        <Switch>
          <Route path={"/"} exact component={PokemonList}/>
          <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
          <Redirect to={"/"}/>
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
