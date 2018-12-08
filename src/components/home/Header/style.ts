import styled, { css } from '../../style/styled'
import { mobile, desktop } from '../../style/media'

let iconsWidth = 45

export const Grid = styled.div`
  display: flex;
  align-items: flex-start;

  ${mobile(css`
    flex-direction: column;
  `)};
`

export const ContentWrapper = styled.div`
  ${desktop(css`
    margin-right: 60px;
  `)};
  ${mobile(css`
    margin-bottom: 40px;
  `)};
`

export const Title = styled.h1`
  line-height: 1;
  font-weight: 700;
  margin: 0;

  ${desktop(css`
    font-size: ${p => p.theme.fontHuge48}px;
  `)};

  ${mobile(css`
    font-size: ${p => p.theme.fontLarge32}px;
  `)};
`

// -
export const Highlights = styled.div``

export const Highlight = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Icon = styled.div`
  width: ${iconsWidth}px;
  height: 55px;
  display: inline-flex;
  align-items: center;

  svg * {
    storke: ${p => p.theme.primaryLight1};
  }
`

export const HighlightText = styled.div<{ noBorder?: boolean }>`
  width: 100%;
  max-width: 430px;
  padding-top: 16px;
  padding-bottom: 16px;

  line-height: 1.2;
  font-size: ${p => p.theme.fontMedium20}px;
  font-weight: 600;

  border-bottom: 1px solid ${p => p.theme.primaryLight2};
  color: ${p => p.theme.primary};

  ${p =>
    p.noBorder &&
    css`
      border: none;
    `};

  ${mobile(css`
    font-size: ${p => p.theme.fontBase}px;
  `)};
`

export const Buttons = styled.div`
  display: inline-flex;
`

// -
export const Github = styled.a`
  display: inline-flex;
  color: ${p => p.theme.primary};
`

export const GithubIcon = styled.div`
  width: ${iconsWidth}px;
  margin-top: -2px;
  svg {
    stroke: ${p => p.theme.primaryLight1};
  }
`

// -
export const CodeWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  width: auto;
  flex-basis: 580px;
  max-width: 580px;
  height: 580px;
  margin-left: auto;
  position: relative;
  margin-bottom: -32px;
  border-radius: ${p => p.theme.radiusLarge}px;

  ${mobile(css`
    margin-left: -16px;
    margin-right: -16px;
    height: 600px;
    flex-basis: auto;
    width: calc(100% + 32px);
    max-width: 490px;

    margin-bottom: 32px;
  `)};
`
