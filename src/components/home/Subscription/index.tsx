import * as React from 'react'
import styled from '../../style/styled'
import { Input } from '../../shared/Input/Input'
import { VLine } from '../../shared/Input/VLine'
import { PrimaryButton } from '../../shared/Buttons/Index'
import Subscribe from '../../vectors/Subscribe'

export const Subscription = () => (
  <BoxWrapper>
    <Input label="NAME" placeholder="Bob Loblaw" />
    <VLine />
    <Input label="EMAIL" placeholder="bob@example.com" />
    <PrimaryButton text="Subscribe" icon={<Subscribe />} />
  </BoxWrapper>
)

const BoxWrapper = styled.div`
  width: 783px;
  min-height: 88px;
  margin: auto;
  padding: 24px 24px 24px 32px;
  display: flex;

  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(8, 17, 70, 0.1);
  border-radius: ${p => p.theme.radiusLarge}px;
`
