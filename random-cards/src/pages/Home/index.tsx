import { ChangeEvent, useEffect } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { Input, InputContainer } from "./styled"
import { Button } from "../components/button"
import { MainContainer } from "../components/mainContainer"

const Home = () => {
  const { wordTyped, fillArray, setWordTyped, getPokemon } = useUser()
  const history = useNavigate()

  useEffect(() => {
    fillArray()
    getPokemon()
  }, [])

  return (
    <MainContainer>
      <InputContainer>
        <Input value={wordTyped} onChange={(event: ChangeEvent <HTMLInputElement>) => setWordTyped(event.target.value as string)}></Input>
        <Button onClick={() => history('/results')} disabled={!wordTyped}>Ver meus cards</Button>
      </InputContainer>
    </MainContainer>
  )
}

export default Home