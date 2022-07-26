import { useEffect, useState } from "react"
import { useUser } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { Pokemon } from "../../types/types"
import { MainContainer } from "../components/mainContainer"
import { Cards, CardsContainer, ImageContainer, MainCard, PokemonName, Title, Image, Attributes, Attribute, DivButtons } from "./styled"
import { Button } from "../components/button"

const Results = () => {
  const { wordTyped, pokemon, addPokemon, sortPokemon } = useUser()
  const history = useNavigate()
  const [disableCount, setDisableCount] = useState(0)
  const [disable, setDisable] = useState<boolean>(false)
  const [count, setCount] = useState(0)

  const onClickAdd = () => {
    if (disableCount < 3) {
      setDisableCount(disableCount + 1)
      addPokemon()
    } else {
      setDisable(true)
      alert('Você só pode adicionar 3 pokémon a sua lista!')
    }
  }

  return (
    <MainContainer>
      <CardsContainer>
        <Title>
          {wordTyped}
        </Title>
        <Cards>
          {pokemon.map((pokemon: Pokemon) => {
            return (
              <MainCard>
                <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
                <ImageContainer>
                  <Image src={pokemon.sprites.front_default} />
                  <Image src={pokemon.sprites.back_default} />
                </ImageContainer>
                <Attributes>
                  Número
                  <Attribute>{pokemon.id}</Attribute>
                </Attributes>
                <Attributes>
                  Experiência base
                  <Attribute>{pokemon.base_experience}</Attribute>
                </Attributes>
              </MainCard>
            )
          })}
        </Cards>
        <DivButtons>
          <Button onClick={sortPokemon}>Aleatorizar Cards</Button>
          <Button onClick={onClickAdd} disabled={disable}>Adicionar novo pokémon</Button>
          <Button onClick={() => history('/')}>Escolher novo nome</Button>
        </DivButtons>
      </CardsContainer>
    </MainContainer>
  )
}

export default Results