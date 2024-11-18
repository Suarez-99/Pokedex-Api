import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then((response) => setPokemonList(response.data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredPokemon = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home-container">
            <h1>Pokédex</h1>
            <input
                type="text"
                placeholder="Buscar Pokémon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="pokemon-grid">
                {filteredPokemon.map((pokemon, index) => (
                    <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
                ))}
            </div>
        </div>
    );
};

export default Home;
