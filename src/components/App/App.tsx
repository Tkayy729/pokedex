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
    allPokemons: [],
    searchedPokemons: [],
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
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex!</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
