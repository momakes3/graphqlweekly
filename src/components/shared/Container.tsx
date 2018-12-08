import styled, { css } from '../style/styled'
import { mobile } from '../style/media'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  ${mobile(css`
    max-width: 600px;
    padding-left: 21px;
    padding-right: 21px;
    box-sizing: content-box;
    overflow: hidden;
  `)};
`
