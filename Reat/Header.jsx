import React, { useState } from "react";

const Header = ({ onSearch, onChangeGeneration }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <div className="pokedex__header">
      <div className="pokedex__header-title">
        <h1>POKEDEX</h1>
      </div>
      <div className="pokedex__header-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar Pokémon"
          />
          <button type="submit">
            <img src="/pokeball.png" alt="pokeball" />
          </button>
        </form>
      </div>
      <div className="pokedex__header-aline">
        <div
          className="arrow-left"
          onClick={() => onChangeGeneration("prev")}
        ></div>
        <div className="order">Gen {onChangeGeneration.currentGen}</div>
        <div
          className="arrow-right"
          onClick={() => onChangeGeneration("next")}
        ></div>
      </div>
    </div>
  );
};

export default Header;
