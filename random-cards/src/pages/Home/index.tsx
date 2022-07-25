import { useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { wordTyped, fillArray, setWordTyped, getPokemon } = useUser()
  const history = useNavigate()

  useEffect(() => {
    fillArray()
    getPokemon()
  }, [])

  return (
    <div>
      <input value={wordTyped} onChange={(event) => setWordTyped(event.target.value as string)}></input>
      <button onClick={() => history('/results')}>Ver meus cards</button>
    </div>
  )
}

export default Home