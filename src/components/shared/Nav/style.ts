// Utils
import styled, { css } from '../../style/styled'

// Local
import { Link } from '../Link'
import { mobile, desktop } from '../../style/media'

export const Wrapper = styled.nav`
  display: flex;
  min-height: 52px;
  justify-content: space-between;

  ${mobile(css`
    flex-wrap: wrap;
    padding-right: 24px;
    padding-left: 24px;
  `)};
`

export const LogoWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  ${mobile(css`
    /* Hieght & shadow together */
    margin-left: -5px;
    svg {
      width: auto;
      height: 56px;
    }
  `)};
`

export const NavItems = styled.div<{ isOpened: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 52px;
  overflow: hidden;

  ${mobile(css`
    width: 100%;
    height: auto;
    padding-top: 28px;

    flex-direction: column;
    align-items: center;
  `)};

  ${p =>
    p.isOpened
      ? mobile(css`
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        `)
      : mobile(css`
          height: 0;
          padding-top: 0;
        `)};
`

export const NavItem = styled.a`
  margin-left: 40px;
  cursor: pointer;

  ${mobile(css`
    margin-left: 0;
    padding: 12px 0;
  `)};
`

export const NavText = styled.span`
  margin-right: 12px;

  font-weight: 500;
  line-height: 1;
  font-size: 18px;
  color: #ffffff;
`

export const MenuButton = styled.span`
  width: auto;
  height: 20px;

  margin-top: 11px;
  margin-right: 6px;
  cursor: pointer;

  ${desktop(css`
    display: none;
  `)};
`
