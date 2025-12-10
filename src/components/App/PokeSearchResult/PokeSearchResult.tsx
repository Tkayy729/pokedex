import React, { useState } from "react";
import "./PokeSearchResult.css";

const PokeSearchResult = () => {
  const [isPokemonSelected, SetIsPokemonSelected] = useState(true);
  return (
    <div className="poke-result-card">
      {isPokemonSelected ? (
        <div>
          {/*add a pokemon image over here*/}
          <p>Name: Pokemon</p>
          <p>Id: some Id</p>
          <p>Height: some Height</p>
          <p>Weight: some Weight</p>
          <p>Base Exp: 100xp</p>
        </div>
      ) : (
        <div>
            <h2>Welcome to Pokedex!</h2>
        </div>
      )}
    </div>
  );
};

export default PokeSearchResult;
