import { useEffect, useState } from 'react';
import DetailPage from '../DetailPage';
import { getFirstAbility, convertPoundsToKilograms } from './Pokemon.service';

function Pokemon(props) {

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [pokemon]);

  const fetchPokemon = () => {
    setIsLoading(true);
    props.idPokemon && fetch("https://pokeapi.co/api/v2/pokemon/" + props.idPokemon)
      .then((response) => response.json())
      .then((json) => setPokemon(json))
      .catch((error) => console.error(error));
  };

  return (
      <div>
        { !isLoading && <div className="pokemon-container">
            <div className="pokemon-image-container">
                { pokemon.sprites && <img src={pokemon.sprites['front_default']} /> }
            </div>
            <div className="pokemon-details-container">
                <p>Pokemon: {pokemon.name}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {convertPoundsToKilograms(pokemon.weight)}</p>
                <p>First Ability: {getFirstAbility(pokemon)}</p>
            </div> 
        </div> }
      </div>
  );
}

export default Pokemon;