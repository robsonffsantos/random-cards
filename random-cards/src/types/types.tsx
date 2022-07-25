import { ReactNode } from "react"

export type Pokemon = {
  id: number,
  name: string,
  base_experience: number,
  location_area_encounters: string,
  sprites: {
    back_default: string,
    front_default: string,
  }
}

export type UserContextType = {
  pokemonIdArray : number[],
  wordTyped: string,
  setWordTyped: (value: string) => void,
  getPokemon: () => void,
  pokemon: Pokemon[],
  fillArray: () => void,
  addPokemon: () => void,
  sortPokemon: () => void,
  getRandomGrade: () => void
}

export type UserContextProps = {
  children: ReactNode
}