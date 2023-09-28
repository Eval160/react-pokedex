const NavBar = ({pokemonIndex, decrementPokemonIndex, incrementPokemonIndex, pokemonList}) => {
  return (
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
  )
}

export default NavBar
