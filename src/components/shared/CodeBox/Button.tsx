import { transparentize } from 'polished'
import styled, { css } from '../../style/styled'
import { unsetButton } from '../../style/snippets'

type Props = { isActive?: boolean; showGrow?: boolean; noMarginRight?: boolean }

export const Button = styled.button<Props>`
  ${unsetButton};

  border-radius: ${p => p.theme.radius}px;
  background: ${p =>
    p.isActive ? 'white' : transparentize(0.8, p.theme.primaryLight3)};
  color: ${p => (p.isActive ? p.theme.primary : p.theme.primaryLight3)};

  height: 36px;
  width: auto;
  padding-left: 14px;
  padding-right: 14px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: ${p => p.theme.fontSmall14}px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  margin-bottom: 8px;
  margin-right: ${p => (p.noMarginRight ? 0 : 8)}px;

  ${p =>
    p.showGrow &&
    css`
      flex-grow: 1;
    `};

  cursor: pointer;
  transition: background 140ms ease-out;

  &:hover {
    background: ${p =>
      p.isActive ? 'white' : transparentize(0.7, p.theme.primaryLight3)};
  }
`
