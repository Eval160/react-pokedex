import { useState } from "react"
import { useEffect } from "react"
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

  useEffect(
    () => {
      console.log("hello pokemon trainer :)");
    },
    []
  );
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
    if (pokemonList[index].name === "pikachu") {
      console.log("pika pikachu !!!");
    }
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
