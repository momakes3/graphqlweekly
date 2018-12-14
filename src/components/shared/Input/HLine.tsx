import styled, { css } from '../../style/styled'
import { mobile } from '../../style/media'

export const HLine = styled.div`
  width: auto;
  height: 1px;
  margin: 40px 0;
  background: #dadbe3;

  ${mobile(css`
    margin: 24px 0;
  `)};
`
