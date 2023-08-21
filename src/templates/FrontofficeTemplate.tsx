import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export default function FrontofficeTemplate() {
  return (
    <Main>
      <Outlet />
    </Main>
  )
}
