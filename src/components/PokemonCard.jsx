const PokemonCard = ({pokemon}) => {

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
