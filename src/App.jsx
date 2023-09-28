import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import "./App.css";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const pokemon = pokemonList[pokemonIndex]

  const decrementPokemonIndex = () => {
    if (pokemonIndex === 0) return
    setPokemonIndex(pokemonIndex - 1)
    console.log(pokemonIndex);
  }

  const incrementPokemonIndex = () => {
    if (pokemonIndex >= pokemonList.length -1) return

    setPokemonIndex(pokemonIndex + 1)
    console.log(pokemonIndex);
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon}/>
      <div>
        {
          pokemonIndex > 0 &&
            <button onClick={decrementPokemonIndex}>Précédent</button>
        }

        {
          pokemonIndex < pokemonList.length - 1&&
            <button onClick={incrementPokemonIndex}>Suivant</button>
        }
      </div>
    </div>
  );
}

export default App;
