import styled from '../../style/styled'
import { InputColor } from '../../style/theme'

type Props = { noPadding?: boolean; bgColor?: InputColor }

export const Card = styled.div<Props>`
  border-radius: ${p => p.theme.radiusLarge}px;
  padding: ${p => (p.noPadding ? 0 : 16)}px;

  background: linear-gradient(
    160deg,
    ${p => p.theme.primaryDark1} 12.5%,
    #295166 85%
  );
`
