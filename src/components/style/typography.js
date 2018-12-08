import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  // googleFonts: [
  //   { name: 'Open Sans', styles: ['400', '600', '700'] },
  //   { name: 'Montserrat', styles: ['700'] },
  //   { name: 'Roboto Mono', styles: ['400', '700'] }
  // ]
  bodyFontFamily: ['Open Sans'],
  headerFontFamily: ['Montserrat', 'Open Sans'],
})

export default typography
