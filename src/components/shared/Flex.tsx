import styled from '../style/styled'

type Props = { alignItems?: string }

export const RowFlex = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: ${p => p.alignItems || 'auto'};
`

export const ColumnFlex = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${p => p.alignItems || 'auto'};
`
