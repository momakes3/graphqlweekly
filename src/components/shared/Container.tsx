import styled, { css } from '../style/styled'
import { mobile } from '../style/media'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  ${mobile(css`
    max-width: 600px;
    padding-left: 8px;
    padding-right: 8px;
    box-sizing: content-box;
  `)};
`
