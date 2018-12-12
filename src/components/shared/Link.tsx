import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'

// Local
import { UnstyledButton } from './general'

type Props = {
  /** For local gaysby routes/links */
  to?: string
  /** For external links with e.g. https://google.com outside Gatsby */
  href?: string
  children?: any

  // other
  target?: string
  rel?: string
  className?: string
  style?: any
  onClick?: any
  onMouseOver?: any
  onMouseEnter?: any
  onMouseOut?: any
}

export const Link = ({
  to,
  href,
  children,
  target,
  rel,
  className,
  style,
  onClick,
  onMouseOver,
  onMouseEnter,
  onMouseOut,
}: Props) => {
  const rest = {
    target,
    rel,
    className,
    style,
    onClick,
    onMouseOver,
    onMouseEnter,
    onMouseOut,
  }

  let Wrapper = to ? GatsbyLink : href ? 'a' : UnstyledButton
  let props = to ? { to, ...rest } : href ? { href, ...rest } : { ...rest }

  // @ts-ignore
  return <Wrapper {...props}>{children}</Wrapper>
}
