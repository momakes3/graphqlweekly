import * as React from 'react'

// Local
import { Nav } from '../../shared/Nav'
import { Space } from '../../shared/Space'
import { Container } from '../../shared/Container'
import { HeaderWrapper, PageTitle, Socials, SocialItem } from './style'
import { Subscription } from '../Subscription'
import Slack from '../../vectors/Slack'
import Twitter from '../../vectors/Twitter'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />

      <Space height={80} heightOnMobile={27} />

      <Container>
        <PageTitle>
          A weekly newsletter of the best <strong>news</strong>,{' '}
          <strong>articles</strong> and <strong>projects</strong> about GraphQL
        </PageTitle>

        <Space height={56} heightOnMobile={32} />

        <Subscription />

        <Socials>
          <SocialItem href="#">
            <Twitter />
            Twitter
          </SocialItem>
          <SocialItem href="#">
            <Slack stroke="#ffffff" />
            Slack
          </SocialItem>
        </Socials>
      </Container>
    </HeaderWrapper>
  )
}
