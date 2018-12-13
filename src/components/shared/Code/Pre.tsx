import styled from '../../style/styled'
import { InputColor } from '../../style/theme'

export const Pre = styled.pre<{
  background?: boolean
  textColor?: InputColor
  compact?: boolean
}>`
  &&&& {
    padding: ${p => (!p.background ? '0 !important' : '1em !important')};
    border-radius: ${p => p.theme.radius}px;
    margin: 0 !important;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    flex-basis: 100%;

    color: ${p => p.textColor};

    ::-webkit-scrollbar {
      display: none !important;
    }

    &,
    code,
    * {
      font-family: 'Roboto Mono', Consolas, Menlo, Monaco, 'Andale Mono WT',
        'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
        'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
        'Nimbus Mono L', 'Courier New', Courier, monospace !important;
      font-size: 16px !important;
      line-height: ${p => (p.compact ? 1.429 : 1.574)} !important;
      direction: ltr !important;
      text-align: left;
      white-space: pre !important;
      word-spacing: normal !important;
      word-break: normal !important;
    }
  }
`
