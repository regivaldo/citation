import { styled } from 'styled-components'
import { background, color } from './ui/variables'

const Field = styled.textarea`
  padding: 1rem;
  border: 1px solid ${color.primary};
  border-radius: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: ${background.body};
`

export default Field
