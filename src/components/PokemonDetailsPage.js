import React from "react"
import PokemonData from "../pokemon/pokemon";

const PokemonDetailsPage = props => {
    const pokemonId = props.match.params.pokemonId;
    const currentPokemonData = PokemonData.find(pokemon => pokemon.id === Number(pokemonId));
    console.log(currentPokemonData);
    const englishName = currentPokemonData ? currentPokemonData.name.english : "unknown"

    return (
        <div>
            <img
            alt={englishName}
            src={`${process.env.PUBLIC_URL}/pokemonImage/${pokemonId}.png`} />
            <h1>{currentPokemonData.name.english}</h1>
        </div>
    )
}

export default PokemonDetailsPage;