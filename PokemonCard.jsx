import React from "react";

const PokemonCard = ({ pokemon }) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types[0].type.name;
  const imageUrl = pokemon.sprites.front_default;

  return (
    <div className="pokemon">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info">
        <span className="number">#{pokemon.id.toString().padStart(3, "0")}</span>
        <h3 className="name">{name}</h3>
        <small className="type">
          Tipo: <span>{type}</span>
        </small>
      </div>
    </div>
  );
};

export default PokemonCard;
