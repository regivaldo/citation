import { styled } from 'styled-components'
import { background, color } from './ui/variables'

const Header = styled.header`
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  border-bottom: 1px solid ${color.border};
  z-index: 999;
  background-color: ${background.element};
`

export default Header
