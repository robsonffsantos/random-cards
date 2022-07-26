import styled from 'styled-components'
import Background from '../../assets/background.png'

export const MainContainer = styled.div`
  display: flex;
  height: 95vh;
  width: 99vw;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-image: url(${Background});
  background-size: contain;
  font-family: Arial, Helvetica, sans-serif
`