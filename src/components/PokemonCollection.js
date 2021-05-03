import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, searchTerm }) {

  const filteredPokemon = pokemon.filter((p) => {
    if (searchTerm === '') return true

    return p.name.toUpperCase().includes(searchTerm.toUpperCase())
  })
  
  const pokemonCards = filteredPokemon.map((p) => {
    return (
      <PokemonCard 
        key={p.id}
        name={p.name}
        hp={p.hp}
        sprites={p.sprites}
      />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
