import { PokemonSchema } from "../../../types/PokemonSchema";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";
interface PokeListProps {
  searchedPokemons: PokemonSchema[];
}

const PokeList = ({ searchedPokemons }: PokeListProps) => {
  return (
    <div className="poke-list">
      {searchedPokemons.map(({ id, sprites, name }) => {
        return (
          name &&  <PokeCard name={name} spriteUrl={sprites?.normal} key={id} />
        );
      })}
    </div>
  );
};

export default PokeList;
