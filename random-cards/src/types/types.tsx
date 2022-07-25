import { ReactNode } from "react"

export type Games = {
  info: {
    title: string,
    steamAppID: string,
    thumb: string
  },
  cheapestPriceEver: {
    price: string,
    date: Date
  }
}

export type UserContextType = {
  gamesIdArray : number[],
  wordTyped: string,
  setWordTyped: (value: string) => void,
  getGames: () => void,
  games: Games[],
  fillArray: () => void,
  addGame: () => void,
  sortGames: () => void
}

export type UserContextProps = {
  children: ReactNode
}