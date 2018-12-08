import * as React from 'react'
import styled from '../../style/styled'

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
  display: inline-flex;
  padding: 10px 0;
  flex-shrink: 1;
  width: auto;
`

const Label = styled.label`
  width: 62px;
  height: 18px;

  margin-right: 16px;
  font-weight: 500;
  line-height: 1;
  font-size: 18px;
  text-transform: uppercase;

  color: ${p => p.theme.dark};
`

const InputTag = styled.input`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: 18px;
  width: 100%;

  font-family: 'Rubik';
  font-weight: 400;
  line-height: 1;
  font-size: 18px;

  border: none;
  outline: none;
  color: ${p => p.theme.lightDark};
`
