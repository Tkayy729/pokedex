import React from "react";
import "./App.css";
import { pokemonData } from "../../data/pokemondata";
import Pokedex from "./Pokedex/Pokedex";
import {
  PokemonSchema,
  PokemonSpriteSchema,
  UnpatchedPokemonSchema,
} from "../../types/PokemonSchema";

interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
  state = {
    searchField: "",
    allPokemons: [] as PokemonSchema[],
    searchedPokemons: [] as PokemonSchema[],
    selectedPokemon: undefined,
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]): PokemonSchema[] => {
    const patchedPokemons = pokemonData.map((pokemon) => {
      let parsedSprites: PokemonSpriteSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e: any) {
        console.log("Exception while parsing Sprites", e);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemon;
    });

    return patchedPokemons;
  };

  componentDidMount(): void {
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);

    this.setState({
      searchField: "",
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  handleInputChange = (searchInput: string): void => {
    const filteredPokes = this.state.allPokemons.filter(
      ({ name }) =>
        name && name.toLowerCase().includes(searchInput.toLowerCase())
    );

    this.setState({
      searchField: searchInput,
      searchedPokemons: filteredPokes,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Pokedex!</h1>
        <Pokedex
          handleInputChange={this.handleInputChange}
          searchedPokemons={this.state.searchedPokemons}
        />
      </div>
    );
  }
}

export default App;
