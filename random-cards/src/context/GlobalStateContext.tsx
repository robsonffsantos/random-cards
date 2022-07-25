import { createContext, useState, useContext, useMemo } from "react"
import { UserContextProps, UserContextType, Games } from '../types/types'
import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GlobalStateContext = createContext({} as UserContextType)

const UserProvider = ({ children }: UserContextProps) => {
  const [gamesIdArray, setGamesIdArray] = useState<number[]>([])
  const valuesOfArray = useMemo(() => gamesIdArray.values(), [gamesIdArray])
  let min: number = 1
  let max: number = 889
  const [wordTyped, setWordTyped] = useState<string>('teste')
  const [games, setGames] = useState<Games[]>([])

  const getRandomNumber = () => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  const fillArray = () => {
    const gamesId = gamesIdArray
    for (let i = 0; i <= 4; i++) {
      let x = getRandomNumber()
      gamesId.push(x)
    }

    setGamesIdArray(gamesId)
  }

  const addGame = () => {
    let x = getRandomNumber()
    gamesIdArray.push(x)
  }

  const sortGames = () => {
    games.sort(function(a, b){return 0.5 - Math.random()})
  }

  const getGames = () => {
    for (const values of valuesOfArray) {
      axios.get(`${BASE_URL}/games?id=${values}`)
      .then((res) => {
        setGames(res.data)
      })
    }
  }

  const data = { games, wordTyped, gamesIdArray, fillArray, getGames, setWordTyped, addGame, sortGames }

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