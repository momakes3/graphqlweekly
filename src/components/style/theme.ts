export const theme = {
  colorSchema: 'dark',
  isResponsive: true,

  primaryDark2: '#082333',
  primaryDark1: '#0C344B',
  primary: '#3D5866',
  // primaryLight0: '#6A7F8A',
  primaryLight1: '#8FA6B2',
  primaryLight2: '#CCD9DF',
  primaryLight3: '#EFF3F5',
  green: '#15BD76',
  greenLight2: '#E2F8EE',
  teal: '#00ABBF',
  tealLight1: '#00CCE4',
  tealLight2: '#DCF9FD',
  blue: '#0F7AD8',
  blueLight2: '#D8ECFD',
  pink: '#D645A7',
  white: 'white',
  black: 'black',

  space32: 32,
  space56: 56,
  space64: 64,

  radiusSmall: 3,
  radius: 6,
  radiusLarge: 8,

  fontTiny12: 12,
  fontSmall14: 14,
  fontBase: 16,
  fontMedium18: 18,
  fontMedium20: 20,
  fontLarge24: 24,
  fontLarge32: 32,
  fontHuge48: 48,

  popoverZIndex: 100,
}

export type SpaceSizes =
  | 0
  | 4
  | 8
  | 12
  | 16
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 96
  | 100
  | 116
  | 132
  | 144

export type Theme = typeof theme
export interface ThemeInterface extends Theme {}

export type ThemedProps = { theme: Theme }
export type InputColor = string | ((p: ThemedProps) => string)
