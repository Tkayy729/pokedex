import "./PokeCard.css";

interface PokeCardProps {
  name?: string;
  spriteUrl?: string;
}

const PokeCard = ({ name, spriteUrl }: PokeCardProps) => {
  return (
    <div className="poke-card">
      <img alt={name} src={spriteUrl} />
      <p>{name}</p>
    </div>
  );
};

export default PokeCard;
