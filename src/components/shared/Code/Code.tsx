import * as React from 'react'
import { withTheme } from '../../style/styled'
import { Theme, InputColor } from '../../style/theme'

// Local
import { Pre } from './Pre'

// Syntax
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light'
import js from 'react-syntax-highlighter/languages/prism/javascript'
import graphql from 'react-syntax-highlighter/languages/prism/graphql'
import sql from 'react-syntax-highlighter/languages/prism/sql'
import go from 'react-syntax-highlighter/languages/prism/go'
import { dark } from './dark'
import { light } from './light'
import typescript from './typescript'
import { graphqlLight } from './graphqlLight'

registerLanguage('javascript', js)
registerLanguage('typescript', typescript)
registerLanguage('graphql', graphql)
registerLanguage('sql', sql)
registerLanguage('go', go)

const noHighlightStyle = { 'code[class*="language-"]': { color: '#8FA6B2' } }

type Props = {
  language?: string
  showLineNumbers?: boolean
  background?: boolean
  theme?: Theme
  customStyle?: Object
  noHighlight?: boolean
  compact?: boolean
}

class Code extends React.Component<Props> {
  static defaultProps = {
    background: true,
    customStyle: {},
  }

  render() {
    const colorSchema = this.props.theme ? this.props.theme.colorSchema : ''
    const noHighlight = this.props.noHighlight
    const customStyle = {
      ...this.props.customStyle,
      ...(noHighlight ? noHighlightStyle : {}),
    }
    const language = this.props.language

    return (
      <SyntaxHighlighter
        style={
          colorSchema === 'light'
            ? language === 'graphql'
              ? { ...graphqlLight, ...customStyle }
              : { ...light, ...customStyle }
            : { ...dark, ...customStyle }
        }
        customStyle={{ background: '' }}
        showLineNumbers={this.props.showLineNumbers}
        lineNumberContainerStyle={{
          paddingRight: 20,
          opacity: 0.5,
          textAlign: 'right',
          color: '#8FA6B2',
          float: 'left',
        }}
        language={
          this.props.language === 'flow' ? 'typescript' : this.props.language
        }
        PreTag={(props: any) => (
          <Pre
            {...props}
            compact={this.props.compact}
            background={this.props.background}
          />
        )}
        children={
          typeof this.props.children === 'string'
            ? this.props.children.trim()
            : this.props.children
        }
      />
    )
  }
}

export default withTheme(Code)

export const CodeWithoutHighlight = ({
  children,
  textColor,
  background,
  ...props
}: {
  children: string
  textColor?: InputColor
  background?: boolean
}) => (
  <Pre textColor={textColor} background={background} {...props}>
    <code>{children}</code>
  </Pre>
)
