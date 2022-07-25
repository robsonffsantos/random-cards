import { createContext, useState, useContext, useMemo } from "react"
import { UserContextProps, UserContextType, Games } from '../types/types'
import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [gamesIdArray, setGamesIdArray] = useState<number[]>([])
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
    gamesIdArray = []
    const gamesId = gamesIdArray
    for (let i = 0; i <= 4; i++) {
      let x = getRandomNumber()
      gamesId.push(x)
    }

    setGamesIdArray(gamesId)
    console.log(gamesIdArray)
  }

  const addGame = () => {
    let x = getRandomNumber()
    gamesIdArray.push(x)
  }

  const sortGames = () => {
    games.sort(function(a, b){return 0.5 - Math.random()})
  }

  const getGames = () => {
    for (let i = 0; i <= gamesIdArray.length; i++) {
      axios.get(`${BASE_URL}/games?id=${gamesIdArray[i]}`)
      .then((res) => {
        setGames(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    console.log(games)
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