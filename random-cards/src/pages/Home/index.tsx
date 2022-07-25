import React, { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { wordTyped, fillArray, setWordTyped, getGames, games } = useUser()
  const history = useNavigate()

  const teste = () => {
    fillArray(),
    getGames()
    history('/results')
  }

  return (
    <div>
      <input value={wordTyped} onChange={(event) => setWordTyped(event.target.value as string)}></input>
      <button onClick={teste}>Ver meus cards</button>
      <div>
      
      </div>
    </div>
  )
}

export default Home