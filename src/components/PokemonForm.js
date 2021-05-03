import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemonList, setPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })

  function handleChange(e) {
    if (e.target.name === "front" || e.target.name === "back"){
      setFormData({
        ...formData,
        sprites: {
          ...formData.sprites,
          [e.target.name]: e.target.value
        }
      })
    }
    else if (e.target.name === 'hp') {
      setFormData({
        ...formData,
        hp: parseInt(e.target.value)
      })
    } 
    else {
      setFormData({
        ...formData, 
        [e.target.name]: e.target.value
      })
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({...formData})
    })
    .then(resp => resp.json())
    .then((pokemon) => setPokemon([...pokemonList, pokemon]))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
        onChange={handleChange}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp"
            value={formData.hp} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
