import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.article``

const Container = styled.section``

export default function FrontofficeTemplate() {
  return (
    <Main>
      <Container>
        <Outlet />
      </Container>
    </Main>
  )
}
