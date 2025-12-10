import PokeList from "../PokeList/PokeList";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBar from "../SearchBar/SearchBar";
import "./Pokedex.css";

const Pokedex = () => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBar />
        <PokeList />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  );
};

export default Pokedex;
