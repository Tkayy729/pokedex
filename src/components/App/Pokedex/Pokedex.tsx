import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBar from "../SearchBar/SearchBar";
import "./Pokedex.css";

const Pokedex = () => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBar />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  );
};

export default Pokedex;
