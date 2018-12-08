import { css } from './styled'

export const mobile = (body: any) => css`
  @media screen and (max-width: 1200px) {
    ${body};
  }
`

export const desktop = (body: any) => css`
  @media screen and (min-width: 1201px) {
    ${body};
  }
`

export const retina = (style: any) => css`
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    ${style};
  }
`
