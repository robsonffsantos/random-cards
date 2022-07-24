import { createContext, useEffect, useState } from "react"
import { UserContextProps, UserContextType } from '../types/types'
import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GlobalStateContext = createContext({} as UserContextType)

const UserProvider = ({ children }: UserContextProps) => {
  const arr : number[] = []
  let min: number = 0
  let max: number = 889
  const wordTyped: string = ''

  const getRandomNumber = () => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }  

  const getGames = () => {
    axios.get(`${BASE_URL}/`)
  }

  const data = { getRandomNumber, getGames }

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default UserProvider