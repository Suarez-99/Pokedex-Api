import React, { useState } from "react";

function App() {
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setPokemonData(null);
    }
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <input
        type="number"
        placeholder="Enter Pokémon ID"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
      />
      <button onClick={fetchPokemon}>Search</button>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
        </div>
      )}
    </div>
  );
}

export default App;
