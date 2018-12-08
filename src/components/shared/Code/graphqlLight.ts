import { light } from './light'

const primaryLight1 = '#8FA6B2'
const blue = '#006FD1'
const orange = '#E86E16'
export const graphqlLight = {
  ...light,

  'attr-name': {
    color: blue,
  },

  property: {
    color: primaryLight1,
  },
  function: {
    color: primaryLight1,
  },
  punctuation: {
    color: primaryLight1,
  },

  'code[class*="language-"]': {
    color: orange,
  },
}
