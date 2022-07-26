import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  height: 6vh;
  width: 10vw;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  color: white;
  background-color: #6184D8;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 20vw;
    font-size: 18px;
    height: 6vh;
    margin: 1vmax;
  }

  @media screen and (max-width: 767px) {
    width: 15vw;
    height: 6vh;
    font-size: 12px;
    margin: 1vmax;
  }
`