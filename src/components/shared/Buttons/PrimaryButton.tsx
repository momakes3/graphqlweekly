import * as React from 'react'
import styled from '../../style/styled'

interface Props {
  text: string
  icon?: any
}

export const PrimaryButton = ({ text, icon }: Props) => (
  <Wrapper>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <Text>{text}</Text>
  </Wrapper>
)

const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 0 16px;
  background: ${p => p.theme.purple};
  box-shadow: 0px 4px 10px rgba(23, 43, 58, 0.25);
  border-radius: 4px;

  border: none;
  outline: none;

  transition: transform 140ms ease-out, box-shadow 140ms ease-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 7px 16px rgba(23, 43, 58, 0.22);
  }
`

const Text = styled.span`
  font-weight: 500;
  line-height: 1;
  font-size: ${p => p.theme.fontBase}px;
  text-transform: uppercase;

  color: ${p => p.theme.white};
`

const IconWrapper = styled.div`
  margin-right: 11px;

  svg {
    display: block;
  }
`
