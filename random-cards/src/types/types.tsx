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
  },
  deals: [
    {
      storeID: string,
      dealID: string,
      price: string,
      retailPrice: string,
      savings: string
    }
  ]
}

export type UserContextType = {
  gamesIdArray : number[],
  wordTyped: string,
  setWordTyped: (value: string) => void,
  getGames: () => void,
  games: Games[],
  fillArray: () => void,
  addGame: () => void,
  sortGames: () => void,
  getRandomGrade: () => void
}

export type UserContextProps = {
  children: ReactNode
}