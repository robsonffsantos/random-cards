import React, { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { Games } from "../../types/types"

const Results = () => {
  const { wordTyped, games, addGame, sortGames, fillArray, getGames } = useUser()
  const history = useNavigate()

  // const fillInfo = () => {
  //   fillArray()
  //   getGames()
  // }

  const showCards = games.map((games: Games) => {
    return (
      <div>
        <img src={games.info.thumb}/>
        <div>{games.info.title}</div>
        <div>{games.cheapestPriceEver.price}</div>  
      </div>
    )
  })

  useEffect(() => {
    console.log(games)
  }, [games])

  return (
    <div>
      {wordTyped}
      <div>
        {showCards}
      </div>
      <div>
        <button onClick={sortGames}>Aleatorizar Cards</button>
        <button onClick={addGame}>Adicionar novo jogo</button>
        <button onClick={() => history('/')}>Escolher novo nome</button>
      </div>
    </div>
  )
}

export default Results