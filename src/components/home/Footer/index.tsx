import * as React from 'react'

// Local
import { Container } from '../../shared/Container'
import styled, { css } from '../../style/styled'
import { TopFooter } from './TopFooter'
import { Playground } from './Playground'
import { FooterLine } from './FooterLine'
import { mobile } from '../../style/media'

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <TopFooter />
        <FooterLine />
        <Playground />
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: relative;
  min-height: 1048px;
  padding: 64px 0;
  background: #081146;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    content: '';

    background: linear-gradient(
      180deg,
      rgba(4, 11, 54, 0.33) 0%,
      rgba(4, 11, 54, 0) 100%
    );
  }

  ${mobile(css`
    display: none;
  `)};
`
