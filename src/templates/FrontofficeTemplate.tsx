import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.article``

export default function FrontofficeTemplate() {
  return (
    <Main>
      <Outlet />
    </Main>
  )
}
