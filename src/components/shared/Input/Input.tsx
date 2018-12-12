import * as React from 'react'
import styled, { css } from '../../style/styled'
import { mobile } from '../../style/media'

interface Props {
  label: string
  placeholder: string
}

export const Input = ({ label, placeholder }: Props) => (
  <Wrapper>
    <Label>{label}</Label>
    <InputTag type="text" placeholder={placeholder} />
  </Wrapper>
)

const Wrapper = styled.div`
  height: 18px;
  display: inline-flex;
  align-items: center;

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

  color: ${p => p.theme.dark};

  ${mobile(css`
    font-size: 16px;
  `)};
`

const InputTag = styled.input`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: 18px;
  width: 100%;
  padding: 0;

  font-family: 'Rubik';
  font-weight: 400;
  line-height: 1;
  font-size: 18px;

  border: none;
  outline: none;
  color: ${p => p.theme.lightDark};

  ${mobile(css`
    font-size: 16px;
  `)};
`
