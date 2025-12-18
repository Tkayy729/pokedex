import { useState } from "react";
import { PokemonSchema } from "../../../types/PokemonSchema";
import PokeList from "../PokeList/PokeList";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBar from "../SearchBar/SearchBar";
import "./Pokedex.css";

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  handleInputChange: (inputValue: string) => void;
}

const Pokedex = ({ searchedPokemons, handleInputChange }: PokedexProps) => {
  const [selectedPokemon, setSelectedPoke] = useState<PokemonSchema | null>(
    null
  );

  const handleSelectPoke = (pokeId?: string) => {
    if (!pokeId) return;
    const foundPokemon = searchedPokemons.find(({ id }) => id === pokeId);

    foundPokemon && setSelectedPoke(foundPokemon);
  };

  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBar onInputChange={handleInputChange} />
        <PokeList
          showThisPoke={handleSelectPoke}
          searchedPokemons={searchedPokemons}
        />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default Pokedex;
