import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
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

  // const decrementPokemonIndex = () => {
  //   if (pokemonIndex === 0) return
  //   setPokemonIndex(pokemonIndex - 1)
  //   console.log(pokemonIndex);
  // }

  // const incrementPokemonIndex = () => {
  //   if (pokemonIndex >= pokemonList.length -1) return

  //   setPokemonIndex(pokemonIndex + 1)
  //   console.log(pokemonIndex);
  // }

  const handlePokemonSelector = (index) => {
    console.log(index);
    setPokemonIndex(index)
  }

  return (
    <div>
      <NavBar pokemonList={pokemonList}
              handlePokemonSelector={handlePokemonSelector}/>
      <PokemonCard pokemon={pokemon}/>
    </div>
  );
}

export default App;
