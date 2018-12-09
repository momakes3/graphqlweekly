import * as React from 'react'
import styled from '../../style/styled'

interface Props {
  text: String
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

  padding: 12px 17px;
  background: ${p => p.theme.purple};
  box-shadow: 0px 4px 10px rgba(23, 43, 58, 0.25);
  border-radius: 4px;

  border: none;
  outline: none;
`

const Text = styled.span`
  font-weight: 500;
  line-height: 1;
  font-size: ${p => p.theme.fontBase}px;
  text-transform: uppercase;

  color: ${p => p.theme.white};
`

const IconWrapper = styled.div`
  margin-right: 12px;
`
