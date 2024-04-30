import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };
    fetchPokemonList();
  }, []);

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
