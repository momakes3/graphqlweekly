import * as React from 'react'
import styled from '../../style/styled'
import ArrowLeft from '../../vectors/ArrowLeft'
import ArrowRight from '../../vectors/ArrowRight'

// Local

export const NavIssue = () => (
  <Wrapper>
    <ViewLink href="#">
      <ArrowLeft />
      <span>View issue 86</span>
    </ViewLink>
    <ViewLink href="#">
      <span>View issue 86</span>
      <ArrowRight />
    </ViewLink>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 32px 41px 62px 41px;
`

const ViewLink = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  font-size: 18px;

  color: #081146;

  span {
    margin: 0 10px;
  }
`
