import * as React from 'react'

// Local
import styled from '../../style/styled'
import Run from '../../vectors/Run'

export const BottomFooter = () => {
  return (
    <Wrapper>
      <QueryWrapper>
        <Title>Enter a query</Title>
        <ExampleBox>
          <ExampleBoxTitle>Example</ExampleBoxTitle>
        </ExampleBox>
        <ExampleBox>
          {/* CodePlace */}
          <RunButton>
            <IconWrapper>
              <Run />
            </IconWrapper>
            <span>Run query</span>
          </RunButton>
        </ExampleBox>
        <ShortHelp>or press CMD + Enter</ShortHelp>
      </QueryWrapper>
      <ResultWrapper>
        <Title>Result</Title>
      </ResultWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
`

const QueryWrapper = styled.div`
  flex-basis: 400px;

  margin-right: 64px;
`

const Title = styled.span`
  margin-bottom: 48px;
  display: inline-block;

  font-weight: 500;
  line-height: 1;
  font-size: 24px;

  color: #ffffff;
`

const ResultWrapper = styled.div`
  flex-grow: 1;
`

const ExampleBox = styled.div`
  width: 400px;
  min-height: 48px;
  margin-bottom: 16px;
  padding: 16px 20px;

  background: #1b2357;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const ExampleBoxTitle = styled.span`
  margin-right: 16px;

  font-weight: 500;
  line-height: 1;
  font-size: 16px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.33);
`

const ShortHelp = styled.div`
  width: 100%;
  height: 16px;

  font-weight: 400;
  line-height: 1;
  font-size: 16px;
  text-align: center;

  color: rgba(255, 255, 255, 0.33);
`

const RunButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 40px;
  padding: 12px;

  border: none;
  outline: none;
  background: #f531b1;
  box-shadow: 0px 4px 10px rgba(23, 43, 58, 0.25);
  border-radius: 4px;

  span {
    font-weight: 500;
    line-height: 16px;
    font-size: 16px;
    text-transform: uppercase;

    color: #ffffff;
  }
`

const IconWrapper = styled.div`
  margin-right: 8px;
`
