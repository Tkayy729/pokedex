import { PokemonSchema } from "../../../types/PokemonSchema";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";
interface PokeListProps {
  searchedPokemons: PokemonSchema[];
  showThisPoke: (pokeId?: string) => void;
}

const PokeList = ({
  searchedPokemons,
  showThisPoke,
}: PokeListProps) => {
  return (
    <div className="poke-list">
      {searchedPokemons.map(({ id, sprites, name }) => {
        return (
          name && (
            <PokeCard
              pokeId={id}
              showThisPoke={showThisPoke}
              name={name}
              spriteUrl={sprites?.normal}
              key={id}
            />
          )
        );
      })}
    </div>
  );
};

export default PokeList;
