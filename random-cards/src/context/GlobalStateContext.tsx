import { createContext, useState, useContext, useMemo } from "react"
import { UserContextProps, UserContextType, Pokemon } from '../types/types'
import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [pokemonIdArray, setPokemonIdArray] = useState<number[]>([])
  let min: number = 1
  let max: number = 889
  const [wordTyped, setWordTyped] = useState<string>('')
  let [pokemon, setPokemon] = useState<Pokemon[]>([])

  const getRandomNumber = () => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  const fillArray = () => {
    pokemonIdArray = []
    pokemon = []
    const gamesId = pokemonIdArray
    for (let i = 0; i <= 4; i++) {
      let x = getRandomNumber()
      gamesId.push(x)
    }

    setPokemonIdArray(gamesId)
  }

  const addPokemon = () => {
    const gamesId = pokemonIdArray
    let x = getRandomNumber()
    gamesId.push(x)

    console.log(gamesId)

    setPokemonIdArray(gamesId)
  }

  const sortPokemon = () => {
    pokemon.sort(function(a, b){return 0.5 - Math.random()})
    
  }

  const getPokemon = async() => {
    const catchPokemon = pokemon
    for (let i = 0; i < pokemonIdArray.length; i++) {
      await axios.get(`${BASE_URL}/${pokemonIdArray[i]}`)
      .then((res) => {
        console.log(res.data)
        catchPokemon.push(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    setPokemon(catchPokemon)
    console.log(pokemon)
  }

  const data = { pokemon, wordTyped, pokemonIdArray, fillArray, getPokemon, setWordTyped, addPokemon, sortPokemon }

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export function useUser(): UserContextType {
  const context = useContext(GlobalStateContext)

  if (!context) {
    throw new Error('UserProvider Error')
  }

  return context
}