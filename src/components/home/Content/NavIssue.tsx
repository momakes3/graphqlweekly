import * as React from 'react'
import { Link } from 'gatsby'
import styled from '../../style/styled'
import ArrowLeft from '../../vectors/ArrowLeft'
import ArrowRight from '../../vectors/ArrowRight'
import { Space } from '../../shared/Space'

// Local

export const NavIssue = ({
  prevNumber,
  nextNumber,
  firstIssueNumber,
  lastIssueNumber,
}: {
  prevNumber: number
  nextNumber: number
  firstIssueNumber?: number
  lastIssueNumber?: number
}) => (
  <Wrapper>
    {prevNumber &&
      firstIssueNumber !== prevNumber + 1 && (
        <ViewLink to={`/issue/${prevNumber}/#content`}>
          <ArrowLeft />
          <span>View issue {prevNumber}</span>
        </ViewLink>
      )}

    <Space fillRow />

    {nextNumber &&
      lastIssueNumber !== nextNumber - 1 && (
        <ViewLink to={`/issue/${nextNumber}/#content`}>
          <span>View issue {nextNumber}</span>
          <ArrowRight />
        </ViewLink>
      )}
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 32px 41px 62px 41px;
`

const ViewLink = styled(Link)`
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
