import { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { wordTyped, fillArray, setWordTyped, getGames } = useUser()
  const history = useNavigate()

  useEffect (() => {
    fillArray()
    getGames()
  }, [])

  return (
    <div>
      <input value={wordTyped} onChange={(event) => setWordTyped(event.target.value as string)}></input>
      <button onClick={() => history('/results')}>Ver meus cards</button>
      <div>
      
      </div>
    </div>
  )
}

export default Home