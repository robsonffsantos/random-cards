import { createContext, useState } from "react"
import { UserContextProps, UserContextType } from '../types/types'

export const GlobalStateContext = createContext({} as UserContextType)

const UserProvider = ({ children }: UserContextProps) => {
  const [walls, setWalls] = useState([])

  function getGames () {

  }

  const data = { walls, setWalls }

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default UserProvider