import * as React from 'react'
import styled, { css } from '../../style/styled'
import { mobile } from '../../style/media'

interface Props {
  label: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
}

export const Input = ({
  label,
  placeholder,
  onChange,
  value,
  name,
  ...props
}: Props) => (
  <Wrapper>
    <Label>{label}</Label>
    <InputTag
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      {...props}
    />
  </Wrapper>
)

const Wrapper = styled.div`
  height: 40px;
  display: inline-flex;
  align-items: stretch;

  flex-shrink: 1;
  flex-grow: 1;
  width: auto;
`

const Label = styled.label`
  width: 69px;

  flex-shrink: 0;
  font-weight: 500;
  line-height: 1;
  font-size: 18px;
  text-transform: uppercase;
  align-self: center;

  color: ${p => p.theme.dark};

  ${mobile(css`
    font-size: 16px;
  `)};
`

const InputTag = styled.input`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: 40px;
  width: 100%;
  padding: 0;

  font-family: 'Rubik';
  font-weight: 400;
  line-height: 1;
  font-size: 18px;

  border: none;
  outline: none;
  color: #081146;

  ${mobile(css`
    font-size: 16px;
  `)};

  ::placeholder {
    color: ${p => p.theme.lightDark};
  }
`
