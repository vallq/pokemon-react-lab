import React from "react";
import axios from "axios";
//import ReactLoading from "react-loading";
//import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";
import "./PokemonGallery.css";
class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuery: "",
      status: "",
      isLoading: false,
      pokemonData: [],
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.setState({
      errorMessage: ""
    });

    axios(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then(response => {
        this.setState({
          status: response.status,
          pokemonData: response.data
        });
        return response;
      })
      .catch(error => {
        this.setState({
          errorMessage: "something went wrong"
        });
      });
  }

  getFilteredPokemon(pokemonData, userQuery) {
    const filteredPokemon = pokemonData
      .filter(aPokemon =>
        aPokemon.name.english.toLowerCase().startsWith(userQuery.toLowerCase())
      )
      .map(p => {
        return <PokemonCard pokemon={p} />;
      });
    return filteredPokemon;
  }

  updateQuery = event => {
    this.setState({
      userQuery: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="pokemon-gallery__title">
          <h1>Pokedex</h1>
        </div>
        <div className="pokemon-gallery__searchbar">
          <input
            type="text"
            placeholder="Search Pokedex"
            onChange={this.updateQuery}
          />
        </div>
        <div className="pokemon-gallery">
          {!!this.state.isLoading && <p>is loading</p>}
          {!!this.state.errorMessage && <div>{this.state.errorMessage}</div>}
          {this.getFilteredPokemon(
            this.state.pokemonData,
            this.state.userQuery
          )}
        </div>
      </div>
    );
  }
}

export default PokemonGallery;
