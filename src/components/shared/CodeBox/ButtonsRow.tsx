import styled, { css } from '../../style/styled'
import { Button } from './Button'
import { mobile, desktop } from '../../style/media'

export const ButtonsRow = styled.div<{
  noMarginBottom?: boolean
  countInARow: number
  countInARowMobile?: number
}>`
  display: flex;
  margin-bottom: ${p => (p.noMarginBottom ? 0 : 16)}px;
  flex-wrap: wrap;

  ${p =>
    desktop(css`
    ${Button}${Button}${Button}${Button}${Button} {
      flex-grow: 1;

      &:nth-child(${p.countInARow}n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + ${p.countInARow}) {
        margin-bottom: 0;
      }
    }
  `)};

  ${p =>
    mobile(css`
    ${Button}${Button}${Button}${Button}${Button} {
      flex-grow: 1;

      &:nth-child(${p.countInARowMobile}n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + ${p.countInARowMobile}) {
        margin-bottom: 0;
      }
    }
  `)};

  &:last-child {
    margin-bottom: 0;
  }
`
