import * as React from 'react'

// Local
import { Container } from '../../shared/Container'
import styled from '../../style/styled'
import { Topics } from './Topics'

export const Content = () => {
  return (
    <Container>
      <LayoutWrapper>
        <Topics />
        <div>SideBar</div>
      </LayoutWrapper>
    </Container>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
  margin-top: -60px;
`
