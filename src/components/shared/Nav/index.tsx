import * as React from 'react'

// Local
import { Container } from '../Container'
import { Wrapper, LogoWrapper, NavItems, NavItem, NavText } from './style'
import LogoSvg from './Logo'
import { Space } from '../Space'
import { Arrow } from '../../vectors/Arrow'

type Props = {}
type State = { hovered: string | null; clicked: string | null }

export class Nav extends React.Component<Props, State> {
  state = { hovered: null, clicked: null }

  render() {
    return (
      <Container>
        <Space height={40} heightOnMobile={32} />
        <Wrapper>
          <LogoWrapper to="/">
            <LogoSvg />
          </LogoWrapper>

          <NavItems>
            <NavItem href="#">
              <NavText>What is GraphQL?</NavText>
              <Arrow />
            </NavItem>
            <NavItem href="#">
              <NavText>What is GraphQL?</NavText>
              <Arrow />
            </NavItem>
            <NavItem href="#">
              <NavText>Submit a link</NavText>
            </NavItem>
          </NavItems>
        </Wrapper>
      </Container>
    )
  }
}
