import React from "react"
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "../PokemonCard";
import "./PokemonGallery.css";

export default () => {
    return (
    <div>
        <div>
            <h1 className="pokemon_gallery__title">Pokedex</h1>
            <br></br>
        </div>
        <div>
            
        </div>
        <div className="pokemon-gallery">
            {pokemonData.map(p => {
                return <PokemonCard pokemon = {p}/>
            })}
        </div>
    </div>
    );
}
