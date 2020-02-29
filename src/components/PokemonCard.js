import React from "react";
import "./PokemonCard.css";
import {PokemonType} from "./PokemonType.js";
import "./PokemonType.css";
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <Link to={`/${id}`}>
    <div className="pokemon-card">
      <div className="pokemon-card__div">
        <img className="pokemon-card__image" src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`} alt={name.english}></img>
      </div>
      <div className="pokemon-card__name">{name.english}</div>
      <div className="pokemon-card__type">
        {type.map(t => (
          <PokemonType type={t}></PokemonType>
        ))}
      </div>
      {Object.entries(base).map(eachBase => {
        return <p className="pokemon-card__base">{eachBase[0] + ": " + eachBase[1]}</p>;
      })}
    </div>
    </Link>
  );
}

export default PokemonCard;