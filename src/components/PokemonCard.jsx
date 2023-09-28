const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const PokemonCard = () => {
  const pokemon = pokemonList[1]

  return (
    <>
      <figure className="card">
        {
         pokemon.imgSrc ?
          <img
            src={pokemon.imgSrc}
            alt={pokemon.name}
            className="card-img"
          /> :
          <p>???</p>

        }
        <figcaption>bulbasaur</figcaption>
      </figure>
    </>
  )
}

export default PokemonCard
