import * as React from 'react'
import styled from '../style/styled'
import { Arrow } from '../vectors/Arrow'

interface props {
  text: string
  href: string
}

export const ArrowLink = ({ text, href }: props) => {
  return (
    <LinkWrapper href={href}>
      <>
        <LinkText>{text}</LinkText>
        <Arrow />
      </>
    </LinkWrapper>
  )
}

const LinkWrapper = styled.a``

const LinkText = styled.span`
  margin-right: 12px;

  font-family: 'Rubik';
  font-weight: 500;
  line-height: 18px;
  font-size: 18px;
  text-align: right;
  color: #ffffff;
`
