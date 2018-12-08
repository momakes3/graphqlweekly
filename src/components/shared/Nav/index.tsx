import * as React from 'react'

// Local
import { Container } from '../Container'
import {
  Wrapper,
  LogoWrapper,
  LogoType,
  Items,
  Item,
  SubItem,
  SubMenu,
  InnerPopover,
  GroupTitle,
  Stack,
  ItemDiv,
} from './style'
import { Popover } from '../Popover'
import Logo from '../../vectors/Logo'
import { Space } from '../Space'
import { ItemBox } from './ItemBox'
import { PoseGroup } from 'react-pose'
import { InvertColorSchemeProvider } from '../ColorSchemaProvider'
import { LanguageContext } from '../Language'

type Props = {}
type State = { hovered: string | null; clicked: string | null }

const poseGroupProps = {
  enterPose: 'open',
  exitPose: 'closed',
  preEnterPose: 'closed',
}

export class Nav extends React.Component<Props, State> {
  state = { hovered: null, clicked: null }

  render() {
    const openedKey = this.state.hovered || this.state.clicked

    return (
      <Container>
        <Space height={40} heightOnMobile={32} />
        <Wrapper>
          <LogoWrapper to="/">
            <Logo />
            <LogoType>Prisma</LogoType>
          </LogoWrapper>

          <Items>
            <ItemDiv {...this.handleHover('products')} hideOnMobile>
              Products
              <AnimatedPopover isOpen={openedKey === 'products'}>
                <InnerPopover width={710}>
                  <GroupTitle noMarginTop>For Developers</GroupTitle>

                  <Stack>
                    <LanguageContext.Consumer>
                      {({ activeLanguage }) => (
                        <ItemBox
                          to={`/client/client-${activeLanguage.toLowerCase()}`}
                          tag="Access"
                          title="Prisma Client"
                          desc="Type-safe data access for your applications"
                          primaryColor={p => p.theme.green}
                          secondaryColor={p => p.theme.greenLight2}
                        />
                      )}
                    </LanguageContext.Consumer>
                    <Space width={8} />
                    <ItemBox
                      to="/migrate"
                      tag="Migrate"
                      title="Prisma Migrate"
                      desc="Seamless database migrations using SDL"
                      primaryColor={p => p.theme.teal}
                      secondaryColor={p => p.theme.tealLight2}
                    />
                    <Space width={8} />
                    <ItemBox
                      to="/admin"
                      tag="Manage"
                      title="Prisma Admin"
                      desc="Beautiful database GUI for developers"
                      primaryColor={p => p.theme.blue}
                      secondaryColor={p => p.theme.blueLight2}
                    />
                  </Stack>

                  <GroupTitle>For Teams & Companies</GroupTitle>

                  <Stack>
                    <ItemBox
                      href="/cloud"
                      outline={true}
                      title="Prisma Cloud"
                      desc="One tool for your entire team to work with Prisma"
                    />
                    <Space width={12} />
                    <ItemBox
                      href="/enterprise"
                      outline={true}
                      title="Prisma Enterprise"
                      desc="A unified data access layer for your entire organization"
                    />
                  </Stack>
                </InnerPopover>
              </AnimatedPopover>
            </ItemDiv>

            <ItemDiv {...this.handleHover('usecases')} hideOnMobile>
              Use Cases
              <AnimatedPopover isOpen={openedKey === 'usecases'}>
                <InnerPopover width={240}>
                  <SubItem to="/with-graphql">GraphQL Stack</SubItem>
                  <Space height={4} />
                  <SubItem to="/with-rest">REST Stack</SubItem>
                  <Space height={4} />
                  <SubItem to="/with-db-microservices">
                    Database Microservices
                  </SubItem>
                </InnerPopover>
              </AnimatedPopover>
            </ItemDiv>

            <ItemDiv {...this.handleHover('community')} hideOnMobile>
              Community
              <AnimatedPopover isOpen={openedKey === 'community'}>
                <InnerPopover width={210}>
                  <SubItem to="/community">Meet the Community</SubItem>
                  <Space height={4} />
                  <SubItem href="https://slack.prisma.io">Slack</SubItem>
                  <Space height={4} />
                  <SubItem href="https://www.prisma.io/forum/">Forum</SubItem>
                </InnerPopover>
              </AnimatedPopover>
            </ItemDiv>

            <Item href="/blog" hideOnMobile>
              Blog
            </Item>
            <Item href="https://app.prisma.io" hideOnMobile>
              Sign In
            </Item>
            <Item href="https://prisma.io/docs" noMarginRight>
              Documentation
            </Item>
          </Items>
        </Wrapper>
      </Container>
    )
  }

  handleHover = (key: string) => {
    return {
      // -- FOR MOBILE --
      // onClick: () =>
      //   // toggle
      //   this.setState(prev => ({
      //     clicked: prev.clicked === key ? null : key,
      //     hovered: null,
      //   })),
      onMouseOver: () =>
        this.state.hovered !== key &&
        this.setState(
          (prev: State) => (prev.hovered === key ? prev : { hovered: key }),
        ),
      onMouseOut: () => this.setState({ hovered: null }),
    }
  }
}

const AnimatedPopover = ({
  isOpen,
  children,
}: {
  isOpen: boolean
  children: any
}) => (
  <InvertColorSchemeProvider>
    <PoseGroup {...poseGroupProps}>
      {isOpen && (
        <SubMenu key={1}>
          <Popover position="bottom">{children}</Popover>
        </SubMenu>
      )}
    </PoseGroup>
  </InvertColorSchemeProvider>
)
