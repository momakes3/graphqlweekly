import * as React from 'react'
import styled, { css } from '../../style/styled'
import { Input } from '../../shared/Input/Input'
import { PrimaryButton } from '../../shared/Buttons/Index'
import Subscribe from '../../vectors/Subscribe'
import { mobile } from '../../style/media'
import { Space } from '../../shared/Space'

export const Subscription = () => (
  <BoxWrapper>
    <Input label="NAME" placeholder="Bob Loblaw" />
    <Line />
    <Input label="EMAIL" placeholder="bob@example.com" />
    <Space height={0} heightOnMobile={32} />
    <PrimaryButton text="Subscribe" icon={<Subscribe />} />
  </BoxWrapper>
)

const BoxWrapper = styled.div`
  max-width: 783px;
  min-height: 88px;
  margin: auto;
  padding: 24px;
  padding-left: 32px;
  display: flex;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(8, 17, 70, 0.1);
  border-radius: ${p => p.theme.radiusLarge}px;

  ${mobile(css`
    flex-direction: column;
    align-items: unset;
    padding-left: 24px;
  `)};
`

const Line = styled.div`
  width: 1px;
  height: 40px;
  margin: 0 24px;
  background: #dadbe3;

  ${mobile(css`
    width: auto;
    height: 1px;
    margin: 16px 0;
  `)};
`
