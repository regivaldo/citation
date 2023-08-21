import { styled } from 'styled-components'
import { color, fontFamily } from './ui/variables'

const Item = styled.li`
  position: relative;
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid ${color.primary};
  align-items: flex-end;

  &:before,
  &:after {
    content: '"';
    position: absolute;
    top: -20px;
    left: 0;
    rotate: -20deg;
    font-size: 4rem;
    color: ${color.second};
    font-family: ${fontFamily.default};
  }

  &:after {
    align-self: flex-end;
    left: unset;
    right: 0;
    rotate: 20deg;
  }
`

export default Item
