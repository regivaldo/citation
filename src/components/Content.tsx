import { styled } from 'styled-components'
import { background, size } from './ui/variables'

const Content = styled.section`
  width: ${size.desktop};
  min-height: 100vh;
  background-color: ${background.element};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`

export default Content
