import { ReactNode } from "react"

export interface Iwall {
  id: number,
  height: number,
  width: number,
  door: number,
  window: number,
  status: boolean
}

export type UserContextType = {
  walls: Iwall[],
  setWalls: (id: number) => void
}

export type UserContextProps = {
  children: ReactNode
}