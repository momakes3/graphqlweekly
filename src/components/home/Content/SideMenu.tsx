import * as React from 'react'
import { Link } from '../../shared/Link'

// Local
import styled from '../../style/styled'
import { getTopicColor } from '../topicColors'
interface Props {
  heading: string
  primaryColor?: string
  items: Array<{
    to?: string
    href?: string
    selected?: boolean
    icon?: React.ReactNode
    text: string
    extraTop?: boolean
    onClick?: (e?: any) => void
  }>
}

export const SideMenu = ({ heading, primaryColor, items }: Props) => {
  return (
    <Wrapper>
      <Title>{heading}</Title>
      <ItemsWrapper>
        {items &&
          items.map((e, i) => (
            <Item
              to={e.to}
              href={e.href}
              selected={e.selected}
              primaryColor={getTopicColor(e.text)}
              extraTop={e.extraTop}
              key={e.text + e.to}
              onClick={e.onClick}
            >
              {e.selected && <Bullet primaryColor={getTopicColor(e.text)} />}
              {e.icon && <IconWrapper>{e.icon}</IconWrapper>}
              {e.text}
            </Item>
          ))}
      </ItemsWrapper>
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div`
  margin-left: 23px;
`

const Title = styled.div`
  margin-bottom: 8px;

  font-weight: 500;
  line-height: 1;
  font-size: 18px;
  text-transform: uppercase;

  color: #9da0b5;
`

const Item = styled(Link)<{
  selected?: any
  primaryColor?: string
  extraTop?: boolean
}>`
  margin-top: ${p => (p.extraTop ? 24 : 16)}px;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;

  font-weight: 500;
  line-height: 18px;
  font-size: 18px;
  vertical-align: middle;

  color: ${p => (p.selected ? p.primaryColor || '#081146' : '#081146')};
`

const Bullet = styled.div<{ primaryColor?: string }>`
  width: 8px;
  height: 8px;
  background: ${p => p.primaryColor || '#081146'};
  border-radius: 50%;
  margin-left: -23px;
  margin-right: 15px;
`

const IconWrapper = styled.div`
  margin-right: 15px;
  margin-top: 1px;
  margin-bottom: -1px;
`

const ItemsWrapper = styled.div`
  overflow: auto;
  max-height: 900px;
`
