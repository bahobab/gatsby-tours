import styled from "styled-components"

const Button = styled.button`
  color: ${props => props.color};
  background: yellow;
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  font-weight: bolder;
  padding: 1rem;
  margin: 1.5rem;
`

export default Button
