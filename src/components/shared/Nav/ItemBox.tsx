import * as React from 'react'

// Local
import styled, { css } from '../../style/styled'
import ChevronRight from '../../vectors/ChevronRight'
import { ThemedProps } from '../../style/theme'
import { Link } from '../Link'

type Props = {
  tag?: string
  outline?: boolean
  to?: string
  href?: string
  title: string
  desc: string
  primaryColor?: (p: ThemedProps) => string
  secondaryColor?: (p: ThemedProps) => string
}

export const ItemBox = (props: Props) => {
  return (
    <Wrapper to={props.to} href={props.href} outline={props.outline}>
      {props.tag && (
        <Tag
          primaryColor={props.primaryColor}
          secondaryColor={props.secondaryColor}
        >
          {props.tag}
        </Tag>
      )}
      <Title outline={props.outline}>
        {props.title}
        <ChevronRight opacity={0.5} />
      </Title>

      <Desc> {props.desc}</Desc>
    </Wrapper>
  )
}

const Wrapper = styled(Link)<{ outline?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: ${p => p.theme.radius}px;
  background: ${p => (p.outline ? 'none' : 'white')};
  box-shadow: 0px 3px 6px rgba(8, 35, 51, 0.05);
  transition: background 140ms ease-out;
  user-select: none;
  cursor: pointer;

  width: 50%;
  flex-shrink: 1;
  flex-grow: 0;
  flex-basis: auto;

  &:hover {
    background: ${p => p.theme.primaryLight3};
  }

  &:active {
    background: ${p => p.theme.primaryLight2};
  }

  ${p =>
    p.outline
      ? css`
          background: none;
          box-shadow: 0 0 1px
            ${p =>
              p.theme.colorSchema === 'dark'
                ? p.theme.primaryLight3
                : p.theme.primaryLight1};
          transition: background 140ms ease-out;

          &:hover {
            background: rgba(90, 120, 150, 0.2);
          }

          &:active {
            background: rgba(90, 120, 150, 0.3);
          }
        `
      : css`
          background: white;
          box-shadow: 0px 3px 6px rgba(8, 35, 51, 0.05);
          transition: background 140ms ease-out;

          &:hover {
            background: #f7f9fa;
          }

          &:active {
            background: ${p => p.theme.primaryLight2};
          }
        `};
`

type TagProps = {
  primaryColor?: (p: ThemedProps) => string
  secondaryColor?: (p: ThemedProps) => string
}

const Tag = styled.div<TagProps>`
  height: 24px;
  padding: 6px 10px;
  margin-bottom: 12px;
  align-self: flex-start;

  font-size: ${p => p.theme.fontTiny12}px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  border-radius: 12px;
  background: ${p => p.secondaryColor};
  color: ${p => p.primaryColor};
`

const Title = styled.div<{ outline?: boolean }>`
  margin-bottom: 8px;
  line-height: 1;

  color: ${p =>
    p.outline
      ? p.theme.colorSchema === 'dark'
        ? 'white'
        : p.theme.primary
      : p.theme.primary};
  font-size: ${p => p.theme.fontMedium18}px;
  font-weight: 600;

  display: inline-flex;
  align-items: center;

  svg {
    margin-left: 12px;
    display: inline-block;
    margin-top: 1px;
  }
`
const Desc = styled.div`
  color: ${p => p.theme.primaryLight1};
  line-height: 1.25;
`
