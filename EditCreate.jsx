import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditCreate = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPokemon = { name, description };
        const existingData = JSON.parse(localStorage.getItem("customPokemon")) || [];
        localStorage.setItem("customPokemon", JSON.stringify([...existingData, newPokemon]));
        navigate("/home");
    };

    return (
        <div className="edit-create-container">
            <h1>Crear/Editar Pokémon</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default EditCreate;
