import * as React from 'react'

// Local
import { Container } from '../Container'
import {
  Wrapper,
  LogoWrapper,
  NavItems,
  NavItem,
  NavText,
  MenuButton,
} from './style'
import LogoSvg from './Logo'
import { Space } from '../Space'
import { Arrow } from '../../vectors/Arrow'
import Button from './Button'
import Close from './Close'

type Props = {}
type State = { isOpened: boolean }

export class Nav extends React.Component<Props, State> {
  state = { isOpened: true }

  menuClickHandler = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    })
  }
  render() {
    return (
      <Container>
        <Space height={40} heightOnMobile={32} />
        <Wrapper>
          <LogoWrapper to="/">
            <LogoSvg />
          </LogoWrapper>

          <MenuButton>
            {this.state.isOpened ? <Button /> : <Close />}
          </MenuButton>

          <NavItems isOpened={this.state.isOpened}>
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
