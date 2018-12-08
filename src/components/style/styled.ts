import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import { Theme, ThemeInterface } from './theme'

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export { css, keyframes, ThemeProvider, createGlobalStyle, withTheme }
export default styled
