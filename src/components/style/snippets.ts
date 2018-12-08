import { css } from './styled'

export const unsetButton = css`
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: inherit;
`

export const unsetInput = css`
  padding: 0;
  background: none;
  border: none;
  outline: none;
  color: inherit;
`

export const removeScrollbars = css`
  ::-webkit-scrollbar {
    display: none;
  }
`
