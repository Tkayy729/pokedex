import "./SearchBar.css";

interface SearchProps {
  onInputChange: (inputValue: string) => void
}

const SearchBar = ({onInputChange}: SearchProps) => {
  return (
    <input onChange={(e) => onInputChange(e.target.value)} className="search" type="search" placeholder="Search Pokemons" />
  );
};

export default SearchBar;
