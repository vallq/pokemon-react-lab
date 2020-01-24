import React from "react";
import "./PokemonType.css";

const getTypeClassName = type => {
  //"fire", "water" etc
  switch (type.toLowerCase()) {
    case "fire":
      return "fire";
    case "water":
      return "water";
    case "grass":
      return "grass";
    case "poison":
      return "poison";
    case "electric":
      return "electric";
    case "ground":
      return "ground";
    case "fairy":
      return "fairy";
    case "bug":
      return "bug";
    case "flying":
      return "flying";
    default:
      return "default";
  }
};

export const PokemonType = ({ type: aSingleType }) => {
  return (
    <span className={`pokemon-card__type ${getTypeClassName(aSingleType)}`}>
      {aSingleType}
    </span>
  );
};
