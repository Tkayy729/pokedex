import { PokemonSchema } from "../../../types/PokemonSchema";
import "./PokeCard.css";

interface PokeCardProps {
  name?: string;
  pokeId?: string;
  spriteUrl?: string;
  showThisPoke: (pokeId?: string) => void;
}

const PokeCard = ({ name, spriteUrl, pokeId, showThisPoke }: PokeCardProps) => {
  return (
    <div onClick={() => showThisPoke(pokeId)} className="poke-card">
      <img alt={name} src={spriteUrl} />
      <p>{name}</p>
    </div>
  );
};

export default PokeCard;
