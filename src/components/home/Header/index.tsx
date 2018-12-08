import * as React from 'react'

// Local
import { Nav } from '../../shared/Nav'
import { Space } from '../../shared/Space'
import { Container } from '../../shared/Container'

export const Header = () => {
  return (
    <header style={{ background: 'white' }}>
      <Nav />

      <Space height={100} heightOnMobile={64} />

      <Container />
    </header>
  )
}
