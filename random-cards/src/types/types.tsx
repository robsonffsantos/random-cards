import { ReactNode } from "react"

export type UserContextType = {
  walls: [],
  setWalls: (id: number) => void
}

export type UserContextProps = {
  children: ReactNode
}