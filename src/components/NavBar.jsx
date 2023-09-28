const NavBar = ({pokemonList, handlePokemonSelector}) => {
  return (
    <div>
      { pokemonList.map((pokemon, index) => (

        <button key={index} onClick={() => {handlePokemonSelector(index)}}>{pokemon.name}</button>
      ))}
    </div>
  )
}

export default NavBar
