import React from "react"
import { useUser } from "../../context/GlobalStateContext"

const Home = () => {
  const { wordTyped, fillArray, setWordTyped, gamesIdArray } = useUser()

  return (
    <div>
      <input value={wordTyped} onChange={(event) => setWordTyped(event.target.value as string)}></input>
      <button onClick={fillArray}>Ver meus cards</button>
      {gamesIdArray}
    </div>
  )
}

export default Home