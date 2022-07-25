import React, { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { Pokemon } from "../../types/types"

const Results = () => {
  const { wordTyped, pokemon, addPokemon, sortPokemon } = useUser()
  const history = useNavigate()

  const showCards = pokemon.map((pokemon: Pokemon) => {
    return (
      <div>
        <img src={pokemon.sprites.front_default}/>
        <img src={pokemon.sprites.back_default}/>
        <div>{pokemon.name}</div>
        <div>{pokemon.id}</div>
        <div>{pokemon.base_experience}</div> 
      </div>
    )
  })

  useEffect(() => {

  }, [pokemon])

  return (
    <div>
      {wordTyped}
      <div>
        {showCards}
      </div>
      <div>
        <button onClick={sortPokemon}>Aleatorizar Cards</button>
        <button onClick={addPokemon}>Adicionar novo jogo</button>
        <button onClick={() => history('/')}>Escolher novo nome</button>
      </div>
    </div>
  )
}

export default Results