import React, { useEffect, useState } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { Pokemon } from "../../types/types"

const Results = () => {
  const { wordTyped, pokemon, addPokemon, sortPokemon, pokemonIdArray } = useUser()
  const history = useNavigate()
  let disableCount = 0
  const [disable, setDisable] = useState<boolean>(false)

  const showCards = pokemon.map((pokemon: Pokemon) => {
    return (
      <div>
        <div>{pokemon.name}</div>
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.back_default} />
        <div>{pokemon.id}</div>
        <div>{pokemon.base_experience}</div>
      </div>
    )
  })

  const onClickAdd = () => {
    if (disableCount < 3) {
      disableCount++
      addPokemon
    } else {
      setDisable(true)
      alert()
    }
  }

  useEffect(() => {
    showCards
  }, [pokemonIdArray])

  return (
    <div>
      {wordTyped}
      <div>
        {showCards}
      </div>
      <div>
        <button onClick={sortPokemon}>Aleatorizar Cards</button>
        <button onClick={onClickAdd} disabled={disable}>Adicionar novo pokémon</button>
        <button onClick={() => history('/')}>Escolher novo nome</button>
      </div>
    </div>
  )
}

export default Results