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
            <NavItem href="#">
              <NavText>What is GraphQL?</NavText>
              <Arrow />
            </NavItem>
            <NavItem href="#">
              <NavText>What is GraphQL?</NavText>
              <Arrow />
            </NavItem>
            <NavItem onClick={this.submitLinkClickHandler}>
              <NavText>Submit a link</NavText>
            </NavItem>
          </NavItems>

          {this.state.SubmitForm && (
            <SubmitForm onCancelClicked={this.submitLinkClickHandler} />
          )}
        </Wrapper>
      </Container>
    )
  }
}
