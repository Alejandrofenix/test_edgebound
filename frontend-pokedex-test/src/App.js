import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './views/pages/Home/Home';
import PokemonInfo from './views/pages/PokemonInfo/PokemonInfo';
import { GENERATE_ROUTE, HOME_PATH, POKEMON_PATH } from './constants/routes.constants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={GENERATE_ROUTE(HOME_PATH)} element={<Home />} />
        <Route path={GENERATE_ROUTE('')} element={<Home />} />
        <Route path={GENERATE_ROUTE(POKEMON_PATH)} element={<PokemonInfo />}>
          <Route path=':pokemonName' element={<PokemonInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
