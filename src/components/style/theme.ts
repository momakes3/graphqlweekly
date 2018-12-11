export const theme = {
  colorSchema: 'dark',
  isResponsive: true,

  lightDark: '#9da0b5',
  dark: '#0a1659',
  purple: '#6560e2',
  white: '#ffffff',

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
  | 27
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
