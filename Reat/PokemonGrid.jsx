import React, { useState, useEffect } from "react";

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  return (
    <div className="pokedex__pokemon-content" id="pokemonContent">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PokemonGrid;
