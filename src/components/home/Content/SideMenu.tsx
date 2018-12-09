import * as React from 'react'

// Local
import styled from '../../style/styled'
interface Props {
  title: string
  items: React.ReactNodeArray
}

export const SideMenu = ({ title, items }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>
        {items &&
          items.map((e: any) => (
            <Item href={e.url} selected={e.selected}>
              {e.selected && <Bullet />}
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

const Item = styled.a<{ selected?: any }>`
  margin-top: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;

  font-weight: 500;
  line-height: 18px;
  font-size: 18px;

  color: ${p => (p.selected ? '#D60690' : '#081146')};
`

const Bullet = styled.div`
  width: 8px;
  height: 8px;
  background: #d60690;
  border-radius: 50%;
  margin-left: -23px;
  margin-right: 15px;
`

const IconWrapper = styled.div`
  margin-right: 15.5px;
`
