// Utils
import styled from '../../style/styled'

// Local
import { Link } from '../Link'

export const Wrapper = styled.nav`
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
`

export const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 52px;
`

export const NavItem = styled.a`
  margin-left: 40px;
`

export const NavText = styled.span`
  margin-right: 12px;

  font-family: 'Rubik';
  font-weight: 500;
  line-height: 18px;
  font-size: 18px;
  text-align: right;
  color: #ffffff;
`
