import * as React from 'react'
import styled, { css } from '../style/styled'
import { mobile } from '../style/media'

interface Props {
  label: string
  placeholder: string
}

export const Textarea = ({ label, placeholder }: Props) => (
  <Wrapper>
    <Label>{label}</Label>
    <TextareaTag placeholder={placeholder} />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-shrink: 1;
  flex-grow: 1;
  width: auto;
`

const Label = styled.label`
  width: 100%;
  height: 18px;

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

const TextareaTag = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0;
  margin-top: 16px;

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
