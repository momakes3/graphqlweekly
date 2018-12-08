import styled, { css } from '../../style/styled'
import { InputColor } from '../../style/theme'
import { removeScrollbars } from '../../style/snippets'

const caretWidth = 24
const caretHeight = 10

type CaretProps = {
  setByPopper?: boolean
  angle?: 'horizental' | 'vertical'
  isCaretFliped?: boolean
  isCaretFirst?: boolean
  arrowColor?: InputColor
  arrowLeftOrTop?: string
}
export const CaretWrapper = styled.div<CaretProps>`
  ${p =>
    !p.setByPopper
      ? css`
          width: ${p.angle === 'horizental' ? '100%' : `${caretHeight}px`};
          height: ${p.angle === 'horizental' ? `${caretHeight}px` : '100%'};
        `
      : css`
          width: ${caretWidth}px;
        `};

  display: flex;
  justify-content: center;
  flex-direction: ${p => (p.angle === 'horizental' ? 'row' : 'column')};

  ${p =>
    p.arrowLeftOrTop &&
    css`
      justify-content: flex-start;
      padding-${p => (p.angle === 'horizental' ? 'left' : 'top')}: ${
      p.arrowLeftOrTop
    };
    `};

  /* for border */
  position: relative;
  z-index: ${p => p.theme.popoverZIndex};

  transform: ${p =>
    p.isCaretFliped
      ? p.angle === 'horizental'
        ? 'scaleY(-1)'
        : 'scaleX(-1)'
      : 'initial'};
  order: ${p => (p.isCaretFirst ? '0' : '1')};

  flex-basis: ${p => (p.angle === 'horizental' ? caretHeight : caretHeight)}px;
  flex-grow: 0;
  flex-shrink: 0;

  svg {
    fill: ${p =>
      p.arrowColor
        ? p.arrowColor
        : p.theme.colorSchema === 'dark'
          ? p.theme.primaryDark1
          : p.theme.primaryLight3};
  }
`

type RectProps = {
  caretPosition?: string
  bgColor?: InputColor
  maxHeight?: number
  maxWidth?: number
  hasShadow?: boolean
}

export const Rectangle = styled.div<RectProps>`
  ${removeScrollbars};

  ${p =>
    p.caretPosition &&
    css`
      margin-${p.caretPosition}: -1px;
    `};

  /* ^^^ For caret border to seamlessly join the rectangle border */

  flex-grow: 1;
  flex-basis: auto;
  height: 100%;
  width: 100%;
  max-height: ${p => (p.maxHeight ? p.maxHeight + `px` : 'auto')};
  max-width: ${p => (p.maxWidth ? p.maxWidth + `px` : 'auto')};
  overflow: auto;
  position: relative;

  border-radius: ${p => p.theme.radiusLarge}px;
  background: ${p =>
    p.bgColor
      ? p.bgColor
      : p.theme.colorSchema === 'dark'
        ? `linear-gradient(180deg, #0C344B 0%, #295166 100%);`
        : p.theme.primaryLight3};

  ${p =>
    p.hasShadow &&
    css`
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.03);
    `};
`

type PopoverWrapper = {
  angle?: 'horizental' | 'vertical'
  width?: number
  height?: number
}

export const PopoverWrapper = styled.div<PopoverWrapper>`
  display: flex;
  flex-direction: ${p => (p.angle === 'horizental' ? 'column' : 'row')};

  width: ${p => (p.width ? `${p.width}px` : 'auto')};
  height: ${p => (p.height ? `${p.height}px` : 'auto')};
  align-items: stretch;
  flex-basis: 100%;

  position: relative;
  z-index: 999;
`
