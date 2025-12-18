import "./PokeSearchResult.css";
import { PokemonSchema } from "../../../types/PokemonSchema";

interface PokeSearchResultProps {
  selectedPokemon: PokemonSchema | null;
}

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {
  if (!selectedPokemon) {
    return (
      <div className="poke-result-card">
        <h2>Welcome to Pokedex!</h2>
      </div>
    );
  }

  const { name, id, height, weight,base_experience } = selectedPokemon;

  return (
    <div className="poke-result-card">
      {/* add a pokemon image over here */}
      <p>Name: {name}</p>
      <p>Id: {id}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Base Exp: {base_experience}</p>
    </div>
  );
};

export default PokeSearchResult;
