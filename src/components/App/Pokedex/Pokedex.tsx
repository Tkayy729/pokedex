import { PokemonSchema } from "../../../types/PokemonSchema";
import PokeList from "../PokeList/PokeList";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBar from "../SearchBar/SearchBar";
import "./Pokedex.css";

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  handleInputChange: (inputValue: string) =>void
}

const Pokedex = ({ searchedPokemons , handleInputChange}: PokedexProps) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBar onInputChange={handleInputChange} />
        <PokeList searchedPokemons={searchedPokemons} />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  );
};

export default Pokedex;
