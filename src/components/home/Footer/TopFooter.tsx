import * as React from 'react'

// Local
import styled from '../../style/styled'
import { ArrowLink } from '../../shared/ArrowLink'

export const TopFooter = () => {
  return (
    <Wrapper>
      <Feeling>
        Feeling nerdy? Query issues of GraphQL Weekly, with GraphQL itself!
      </Feeling>
      <Rights>
        Powered by the <ArrowLink text="GraphQL Playground" href="#" />
      </Rights>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`

const Rights = styled.div`
  font-weight: 400;
  line-height: 24px;
  font-size: 18px;

  color: rgba(255, 255, 255, 0.33);
`

const Feeling = styled.div`
  max-width: 376px;

  font-weight: 400;
  line-height: 24px;
  font-size: 18px;

  color: rgba(255, 255, 255, 0.33);
`
