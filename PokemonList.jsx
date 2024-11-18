import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentGen, setCurrentGen] = useState(1);
  const [searchResult, setSearchResult] = useState(null);

  const pokemonGen = {
    1: [1, 151],
    2: [152, 251],
    3: [252, 386],
    4: [387, 493], // Ajustado para Gen 4
  };

  const fetchPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    return response.json();
  };

  const loadGeneration = async (gen) => {
    const [start, end] = pokemonGen[gen];
    const promises = [];
    for (let i = start; i <= end; i++) {
      promises.push(fetchPokemon(i));
    }
    const results = await Promise.all(promises);
    setPokemonList(results);
  };

  useEffect(() => {
    loadGeneration(currentGen);
  }, [currentGen]);

  const handleSearch = async (name) => {
    const result = await fetchPokemon(name.toLowerCase());
    setSearchResult(result);
  };

  const handleChangeGeneration = (direction) => {
    if (direction === "next" && currentGen < 4) {
      setCurrentGen(currentGen + 1);
    } else if (direction === "prev" && currentGen > 1) {
      setCurrentGen(currentGen - 1);
    }
  };

  return (
    <div>
      <Header
        onSearch={handleSearch}
        onChangeGeneration={{ currentGen, handleChangeGeneration }}
      />
      <div className="pokedex__pokemon-content">
        {searchResult ? (
          <PokemonCard pokemon={searchResult} />
        ) : (
          pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonList;
