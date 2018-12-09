import * as React from 'react'

// Local
import { Container } from '../../shared/Container'
import styled from '../../style/styled'
import { Topics } from './Topics'
import { Sidebar } from './Sidebar'

export const Content = () => {
  return (
    <Container>
      <LayoutWrapper>
        <Topics />
        <Sidebar />
      </LayoutWrapper>
    </Container>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
`
