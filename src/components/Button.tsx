import { styled } from 'styled-components'
import { color, text } from './ui/variables'

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: ${text.light};
  border: 0;
  font-size: 1rem;
  border-radius: 2rem;
  background-color: ${color.primary};
  cursor: pointer;

  &:hover {
    color: ${text.light};
    background-color: ${color.highlight};
  }
`

export default Button
