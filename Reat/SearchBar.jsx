import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchTerm}`);
    // Aquí puedes manejar la búsqueda.
  };

  return (
    <div className="pokedex__header-search">
      <form id="searchPokemon" onSubmit={handleSubmit}>
        <input
          type="text"
          id="pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar Pokémon"
        />
        <button>
          <img src="pokeball.png" alt="pokeball" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
