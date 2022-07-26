import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: 15vw 15vw 15vw 15vw;
  grid-template-rows: 25vh 25vh;
  row-gap: 15px;
  column-gap: 15px;
  padding: 15px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 30vw 30vw;
    grid-template-rows: 35vw 35vw 35vw 35vw;
    overflow-y: scroll;
    margin-bottom: 2vh;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 50vw;
    grid-template-rows: 30vh;
    overflow-y: scroll;
    margin-bottom: 2vh;
  }
`

export const CardsContainer = styled.div`
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 3vmax;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70vw;
  }

  @media screen and (max-width: 767px) {
    width: 60vw;
  }
`

export const Title = styled.h2`
  display: flex;
  width: 80%;
  justify-content: end;
`

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`

export const PokemonName = styled.h3`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 12vh;
`

export const Image = styled.img`
  border: 1px solid black;
  border-radius: 4px;
  width: 6vw;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 12vw;
  }

  @media screen and (max-width: 767px) {
    width: 20vw;
  }
`

export const Attributes = styled.div`
  display: flex;
  height: 5vh;
  justify-content: space-evenly;
  margin-top: 1vh;
`

export const Attribute = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 18;
`

export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    height: 10vh;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    height: 10vh;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`