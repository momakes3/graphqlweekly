import styled, { css } from '../../style/styled'
import { mobile, desktop } from '../../style/media'

// images
import bgSvg from './bg.svg'
import bgMobile from './bg-mobile.jpg'

export const Grid = styled.div`
  display: flex;
  align-items: flex-start;

  ${mobile(css`
    flex-direction: column;
  `)};
`

export const HeaderWrapper = styled.header`
  background-color: #d60690;
  background-image: url(${bgSvg});
  background-repeat: no-repeat;
  background-position: top center;
  min-height: 595px;

  ${mobile(css`
    padding-bottom: 100px;
    background-image: url(${bgMobile});
  `)};
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

  ${mobile(css`
    line-height: 1.33;
    font-size: 24px;
    padding: 0 17px;
  `)};
`

export const Socials = styled.div`
  width: auto;
  display: flex;
  justify-content: center;

  margin-top: 40px;
  padding: 0 50px;

  ${desktop(css`
    display: none;
  `)};
`

export const SocialItem = styled.a`
  width: auto;
  height: 22px;
  display: flex;
  align-items: center;

  font-weight: 500;
  line-height: 1;
  font-size: 18px;

  color: #ffffff;

  svg {
    margin-right: 16px;
    opacity: 0.8;
  }
  path {
    stroke: #fff;
  }

  &:nth-child(2n) {
    margin-left: 40px;
  }
`
