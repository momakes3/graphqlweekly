import * as React from 'react'

// Local
import { Container } from '../Container'
import { Wrapper, LogoWrapper, LogoType, Items } from './style'

type Props = {}
type State = { hovered: string | null; clicked: string | null }

export class Nav extends React.Component<Props, State> {
  state = { hovered: null, clicked: null }

  render() {
    return (
      <Container>
        <Wrapper>
          <LogoWrapper to="/">
            <LogoType>Prisma</LogoType>
          </LogoWrapper>

          <Items />
        </Wrapper>
      </Container>
    )
  }

  handleHover = (key: string) => {
    return {
      // -- FOR MOBILE --
      onClick: () =>
        // toggle
        this.setState(prev => ({
          clicked: prev.clicked === key ? null : key,
          hovered: null,
        })),
    }
  }
}
