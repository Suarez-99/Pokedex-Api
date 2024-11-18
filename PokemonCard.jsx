import { useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get(url).then((response) => setImage(response.data.sprites.front_default));
    }, [url]);

    return (
        <div className="pokemon-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};

export default PokemonCard;
