const pokeContent = document.getElementById('pokemonContent');
let pokeForm = document.getElementById('searchPokemon');
let generationshow = 1;
const modalSearch = document.getElementById('pokemonContent');
const divGeneration = document.getElementById('textGen');

/* Ordenar por generación */
/* Primera Gen 1-151 */
/* Segunda Gen 152-251 */
/* Tercera Gen 252-386 */

function showPokemonGen(gen) {
    const pokemonGen = {
        1: [1, 151],
        2: [152, 251],
        3: [252, 386],
        4: [252, 386], // Esto parece ser un error, deberías ajustar esto según corresponda
    };

    const pokemonGenDefault = [1, 151];
    const generacion = pokemonGen[gen] || pokemonGenDefault;
    return generacion;
}

let pokemonGeneration = showPokemonGen(generationshow);

/* Cambiar de generación */

let arrowRight = document.getElementById('arrow-right').addEventListener('click', e => {
    if (generationshow < 4) {
        modalSearch.innerHTML = '';
        generationshow += 1;
        pokemonGeneration = showPokemonGen(generationshow);
        divGeneration.innerHTML = 'Gen ' + generationshow;
        drawPokemon();
    }
});

let arrowleft = document.getElementById('arrow-left').addEventListener('click', e => {
    if (generationshow > 0) {
        modalSearch.innerHTML = '';
        generationshow -= 1;
        pokemonGeneration = showPokemonGen(generationshow);
        divGeneration.innerHTML = 'Gen ' + generationshow;
        drawPokemon();
    }
});

const drawPokemon = async () => {
    for (let i = pokemonGeneration[0]; i <= pokemonGeneration[1]; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id, modal) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    createPokemon(pokemon, modal);
};

/* Pintar card pokemon */
const createPokemon = (pokemon, modal) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type = pokemon.types[0].type.name; // Tomamos solo el primer tipo
    const imageUrl = pokemon.sprites.front_default;

    pokemonEl.innerHTML = `
        <div class="img-container">
            <img src="${imageUrl}" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Tipo: <span>${type}</span></small>
        </div>
    `;

    if (modal !== true) {
        pokeContent.appendChild(pokemonEl);
    } else {
        modalSearch.innerHTML = '';
        modalSearch.appendChild(pokemonEl);
    }
};

/* Buscar pokemon */

pokeForm.addEventListener('submit', e => {
    e.preventDefault();
    let searchPokemon = document.getElementById('pokemon').value;
    getPokemon(searchPokemon, true);
});

function exitModal() {
    const modalPokemon = document.getElementById('modalPokemon');
    modalPokemon.style.display = 'none';
    drawPokemon();
}

drawPokemon();
