import styled, { css } from '../../style/styled'
import { mobile, desktop } from '../../style/media'

// images
import bgSvg from './bg.svg'

export const Grid = styled.div`
  display: flex;
  align-items: flex-start;

  ${mobile(css`
    flex-direction: column;
  `)};
`

export const HeaderWrapper = styled.header`
  background-image: url(${bgSvg});
  background-size: cover;
  background-position: top center;
  height: 595px;
`

export const PageTitle = styled.h1`
  margin: 0 auto;
  max-width: 667px;

  font-weight: 400;
  line-height: 1.1;
  font-size: 44px;
  text-align: center;

  color: #ffffff;

  strong {
    font-weight: 500;
  }
`
