import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then((pokemonArr) => setPokemon(pokemonArr))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonList={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokemon={pokemon} searchTerm={searchTerm} />
    </Container>
  );
}

export default PokemonPage;
