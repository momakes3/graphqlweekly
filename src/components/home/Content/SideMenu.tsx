import * as React from 'react'

// Local
import styled from '../../style/styled'
interface Props {
  title: string
  items: any
}

export const SideMenu = ({ title, items }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>
        {items &&
          items.map((e: any) => (
            <Item href={e.url} selected={e.selected} title={title}>
              {e.selected && <Bullet title={title} />}
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

const Item = styled.a<{ selected?: any; title: string }>`
  margin-top: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;

  font-weight: 500;
  line-height: 18px;
  font-size: 18px;

  color: ${p =>
    p.selected ? (p.title == 'topics' ? '#009BE3' : '#D60690') : '#081146'};
`

const Bullet = styled.div<{ title: string }>`
  width: 8px;
  height: 8px;
  background: ${p => (p.title == 'topics' ? '#009BE3' : '#d60690')};
  border-radius: 50%;
  margin-left: -23px;
  margin-right: 15px;
`

const IconWrapper = styled.div`
  margin-right: 15.5px;
`
