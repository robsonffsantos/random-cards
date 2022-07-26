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
`

export const Input = styled.input`
  border: 2px solid black;
  border-radius: 4px;
  /* height: 2vh; */
  width: 20vw;
  padding: 1vmax;
`