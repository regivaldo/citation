import { styled } from 'styled-components'
import { color, fontFamily } from './ui/variables'

const Signature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: ${color.primary};
  font-family: ${fontFamily.highlight};

  &:before {
    content: ' ';
    width: 6rem;
    height: 1px;
    background-color: ${color.primary};
  }
`

export default Signature
