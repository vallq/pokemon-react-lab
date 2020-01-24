import React from "react"
import PokemonData from "../pokemon/pokemon";

const PokemonDetailsPage = props => {
    console.log(props);
    const pokemonId = props.match.params.pokemonId;
    const currentPokemonData = PokemonData.find(pokemon => pokemon.id === Number(pokemonId));

    const englishName = currentPokemonData ? currentPokemonData.name.english : "unknown"

    return (
        <div>
            <img
            alt={englishName}
            src={`${process.env.PUBLIC_URL}/pokemonImage/${pokemonId}.png`} />
        </div>
    )
}

export default PokemonDetailsPage;