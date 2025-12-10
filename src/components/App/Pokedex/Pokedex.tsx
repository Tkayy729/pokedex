import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import "./Pokedex.css"

const Pokedex = () => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <p>Pokemon list</p>
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  );
};

export default Pokedex;
