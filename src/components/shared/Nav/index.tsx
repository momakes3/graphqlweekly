import * as React from 'react'

// Local
import { Container } from '../Container'
import {
  Wrapper,
  LogoWrapper,
  NavItems,
  NavItem,
  NavItemButton,
  NavText,
  MenuButton,
} from './style'
import LogoSvg from './Logo'
import { Space } from '../Space'
import Button from './Button'
import Close from './Close'
import { Arrow } from '../../vectors/Arrow'
import { SubmitForm } from '../../home/Header/SubmitForm'

type Props = {}
type State = { isOpened: boolean; SubmitForm: boolean }

export class Nav extends React.Component<Props, State> {
  state = { isOpened: false, SubmitForm: false }

  menuClickHandler = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    })
  }

  submitLinkClickHandler = () => {
    this.setState({
      SubmitForm: !this.state.SubmitForm,
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

          <MenuButton onClick={this.menuClickHandler}>
            {this.state.isOpened ? <Close /> : <Button />}
          </MenuButton>

          <NavItems isOpened={this.state.isOpened}>
            <NavItem href="https://graphqlconf.org">
              <NavText>GraphQL Conf 2019</NavText>
              <Arrow />
            </NavItem>
            <NavItem href="https://graphql.org">
              <NavText>What is GraphQL?</NavText>
              <Arrow />
            </NavItem>
            <NavItemButton onClick={this.submitLinkClickHandler}>
              <NavText>Submit a link</NavText>
            </NavItemButton>
          </NavItems>

          {this.state.SubmitForm && (
            <SubmitForm onCancelClicked={this.submitLinkClickHandler} />
          )}
        </Wrapper>
      </Container>
    )
  }
}
