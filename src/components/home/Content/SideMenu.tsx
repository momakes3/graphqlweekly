import * as React from 'react'

// Local
import styled from '../../style/styled'
interface Props {
  heading: string
  primaryColor?: string
  items: Array<{
    url: string
    selected?: boolean
    icon?: React.ReactNode
    text: string
    extraTop?: boolean
  }>
}

export const SideMenu = ({ heading, primaryColor, items }: Props) => {
  return (
    <Wrapper>
      <Title>{heading}</Title>
      <div>
        {items &&
          items.map((e, i) => (
            <Item
              href={e.url}
              selected={e.selected}
              primaryColor={primaryColor}
              extraTop={e.extraTop}
              key={e.text + i}
            >
              {e.selected && <Bullet primaryColor={primaryColor} />}
              {e.icon && <IconWrapper>{e.icon}</IconWrapper>}
              {e.text}
            </Item>
          ))}
      </div>
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

const Item = styled.a<{
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
