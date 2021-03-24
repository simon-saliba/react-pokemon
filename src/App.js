import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Pokemon from './components/Pokemon.js';
import DetailPage from './DetailPage.js';

function App() {

  const [pokemonIds, setPokemonIds] = useState([]);

  useEffect(() => {
    setPokemonIds([1,2,3,4,5,6,7,8,9]);
  },[]);

  return (
    <div>
        <div className="App">
        {pokemonIds.map((pokemonId, index) => (
          <Link to={`/detail-page/${pokemonId}`}>
            <Pokemon idPokemon={pokemonId} key={pokemonId}></Pokemon>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default App;
