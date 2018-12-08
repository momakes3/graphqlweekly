import { darken, transparentize } from 'polished'
import posed from 'react-pose'

// Utils
import styled, { css } from '../../style/styled'

// Local
import { Link } from '../Link'
import { UpperCaseTitle } from '../UpperCaseTitle'
import { popoverPoseConfig } from '../../style/poses'
import { mobile } from '../../style/media'

const itemHeight = 28
const itemPadding = 6

const subItemHeight = 32
const subItemPadding = 8

export const Wrapper = styled.nav`
  display: flex;
  min-height: 40px;
  align-items: center;
`

export const LogoWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;

  svg {
    fill: ${p =>
      p.theme.colorSchema === 'dark'
        ? p.theme.primaryLight3
        : p.theme.primaryDark1};
  }
`

export const LogoType = styled.span`
  margin-left: 10px;

  font-size: 18px;
  font-family: 'Open Sans', var(--system-font);
  font-weight: 700;
  letter-spacing: -0.01em;
  user-select: none;
  color: ${p =>
    p.theme.colorSchema === 'dark'
      ? p.theme.primaryLight3
      : p.theme.primaryDark1};
`

// ---
export const Items = styled.div`
  display: flex;
  margin-left: auto;
  line-height: 1;
`

export const Item = styled(Link)<{
  onMouseOver?: any
  onMouseOut?: any
  noMarginRight?: boolean
  hideOnMobile?: boolean
}>`
  position: relative;
  display: flex;
  height: ${itemHeight}px;
  padding: ${itemPadding}px;
  font-size: ${p => p.theme.fontBase}px;
  color: ${p =>
    p.theme.colorSchema === 'dark' ? p.theme.primaryLight3 : p.theme.primary};
  border-radius: ${p => p.theme.radius}px;
  cursor: pointer;
  margin-right: ${p => (p.noMarginRight ? 0 : 32 - itemPadding)}px;

  transition: background 140ms ease-out, color 140ms ease-out;

  &:hover {
    background: ${p =>
      p.theme.colorSchema === 'light'
        ? p.theme.primaryLight3
        : transparentize(0.8, p.theme.primaryLight1)};
    color: ${p =>
      p.theme.colorSchema === 'light' ? p.theme.primary : `white`};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px white, 0 0 0 3px ${p => p.theme.primaryLight2};
  }

  ${p =>
    p.hideOnMobile &&
    mobile(css`
      display: none;
    `)};
`

export const ItemDiv = Item.withComponent('div')

export const SubItem = styled(Item)`
  width: 100%;
  height: ${subItemHeight}px;
  padding: ${subItemPadding}px;

  &:hover {
    background: ${p =>
      p.theme.colorSchema === 'light'
        ? transparentize(0.4, p.theme.primaryLight2)
        : transparentize(0.8, p.theme.primaryLight1)};
    color: ${p =>
      p.theme.colorSchema === 'light' ? p.theme.primary : `white`};
  }
`

const Posed = posed.div({
  ...popoverPoseConfig,
  passive: {
    // center
    x: ['y', () => '-50%'],
  },
})

export const SubMenu = styled(Posed)`
  position: absolute;
  top: ${itemHeight}px;
  left: 50%;
  z-index: ${p => p.theme.popoverZIndex};
  padding-top: 5px;

  /* inital pose */
  transform-origin: top center;
  transform: translateX(-50%);
  opacity: 0;
`

export const Stack = styled.div`
  display: flex;
`

export const InnerPopover = styled.div<{ width: number; textItems?: boolean }>`
  padding: 16px;
  width: ${p => p.width}px;
  display: flex;
  flex-direction: column;

  ${p =>
    p.textItems &&
    css`
      align-items: center;
    `};
`

export const GroupTitle = styled(UpperCaseTitle)<{ noMarginTop?: boolean }>`
  color: ${p => p.theme.primaryLight1};

  margin-left: 16px;
  margin-top: ${p => (p.noMarginTop ? '0' : 24)}px;
  margin-bottom: 16px;
`
