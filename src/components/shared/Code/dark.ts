import { duotoneDark } from 'react-syntax-highlighter/styles/prism'

export const dark = {
  ...duotoneDark,

  comment: {
    color: '#8FA6B2'
  },
  string: {
    color: '#FFE376'
  },
  function: {
    color: '#6FBCFF'
  },
  entity: {
    color: '#6FBCFF'
  },
  property: {
    color: '#6FBCFF'
  },
  variable: {
    color: '#24DA8D'
  },
  'attr-value': {
    color: '#24DA8D'
  },
  constant: {
    color: '#24DA8D'
  },
  keyword: {
    color: '#FF92F0'
  },
  punctuation: {
    color: '#8FA6B2'
  },
  prolog: {
    color: '#fff'
  },
  'code[class*="language-"]': {
    fontFamily:
      'Roboto Mono, Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
    fontSize: '14px',
    lineHeight: '1.574',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    background: 'none',
    color: '#24DA8D'
  },

  // User defined types
  typedef: {
    color: '#FFB054'
  }
}
