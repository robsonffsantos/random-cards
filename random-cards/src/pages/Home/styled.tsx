import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 4px;
  height: 25vh;
  width: 30vw;
  justify-content: space-evenly;
  align-items: center;
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

export const Input = styled.input`
  border: 2px solid black;
  border-radius: 4px;
  width: 20vw;
  padding: 1vmax;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50vw;
    font-size: 20px;
  }

  @media screen and (max-width: 767px) {
    width: 40vw;
    font-size: 20px;
  }
`