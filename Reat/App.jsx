import React from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import "./styles/pokedex.css";

const App = () => {
  return (
    <div className="pokedex-container">
      <Header />
      <PokemonList />
    </div>
  );
};

export default App;


