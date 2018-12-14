import * as React from 'react'

// Local
import styled from '../../style/styled'
import Run from '../../vectors/Run'
import Arrow from './Arrow'
import { Code } from '../../shared/Code'
import { fetchGraphQL } from '../../../api'

type Props = {}
type State = {
  selectedQuery: { title: string; query: string }
  result?: string
  loading?: boolean
  isResultStale: boolean
}

const queriesList: { title: string; query: string }[] = [
  {
    title: 'Query for all the issues',
    query: `
{
  allIssues {
    id
    title
    published
    number
    date
    author {
      avatarUrl
      description
      name
    }
  }
}
    `,
  },
  {
    title: 'Query all the topics and links',
    query: `
{
  allTopics {
    title
    links {
      url
      text
      position
      title
      url
    }
  }
}
    `,
  },
]

export class Playground extends React.Component<Props, State> {
  state = {
    selectedQuery: queriesList[0],
    result: '',
    loading: false,
    isResultStale: false,
  }

  exampleChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = queriesList.find(q => q.title === e.target.value)
    if (next) {
      this.setState({
        selectedQuery: next,
      })
    }
  }

  componentDidMount() {
    this.runQuery()
  }

  runQuery = () => {
    this.setState({ loading: true })
    fetchGraphQL({ query: this.state.selectedQuery.query })
      .then(result => {
        this.setState({ result: result ? JSON.stringify(result, null, 2) : '' })
        this.setState({ loading: false })
      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false })
      })
  }

  render() {
    const { selectedQuery } = this.state
    return (
      <Wrapper>
        <QueryWrapper>
          <Title>Enter a query</Title>

          <ExampleBox>
            <ExampleSelect
              onChange={this.exampleChanged}
              value={selectedQuery.title}
            >
              {queriesList.map((q, i) => (
                <option key={q.title} value={q.title}>
                  {q.title}
                </option>
              ))}
            </ExampleSelect>
            <ExampleBoxTitle>Example</ExampleBoxTitle>
            <ExampleValue>{selectedQuery.title}</ExampleValue>
            <Arrow />
          </ExampleBox>

          <QueryBox>
            <Code background={false} language="graphql" showLineNumbers>
              {selectedQuery.query.trim()}
            </Code>

            <RunButton onClick={this.runQuery} disabled={this.state.loading}>
              <IconWrapper>
                <Run />
              </IconWrapper>
              {this.state.loading ? (
                <span>Fetching...</span>
              ) : (
                <span>Run query</span>
              )}
            </RunButton>
          </QueryBox>
          <ShortHelp>or press CMD + Enter</ShortHelp>
        </QueryWrapper>
        <ResultWrapper>
          <Title>Result</Title>

          <Code background={false} language="json">
            {this.state.result}
          </Code>
        </ResultWrapper>
      </Wrapper>
    )
  }
}

// Style
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  max-height: 1084px;
  position: relative;

  ::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    content: '';

    background: linear-gradient(180deg, rgba(8, 17, 70, 0) 0%, #081146 100%);
  }
`

const QueryWrapper = styled.div`
  flex-basis: 400px;
  margin-right: 64px;
`

const Title = styled.span`
  margin-bottom: 44px;
  display: inline-block;
  font-weight: 500;
  line-height: 1;
  font-size: 24px;
  color: white;
`

const ResultWrapper = styled.div`
  flex-grow: 1;
  height: auto;
`

const QueryBox = styled.div`
  width: 400px;
  min-height: 48px;
  margin-bottom: 16px;
  padding: 16px 20px;
  background: #1b2357;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const ExampleBox = styled.label`
  width: 400px;
  min-height: 48px;
  margin-bottom: 16px;
  padding: 16px 20px;
  display: inline-flex;
  align-items: center;
  background: #1b2357;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  transition: background 120ms ease-out;

  svg {
    opacity: 0.7;
  }

  &:hover {
    background: #2c3363;

    svg {
      opacity: 1;
    }
  }
`

const ExampleSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`

const ExampleBoxTitle = styled.span`
  margin-right: 16px;

  font-weight: 500;
  line-height: 1;
  font-size: 16px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.33);
`

const ExampleValue = styled.span`
  margin-right: auto;

  font-weight: 400;
  line-height: 1;
  font-size: 18px;

  color: white;
`

const ShortHelp = styled.div`
  width: 100%;
  height: 16px;

  font-weight: 400;
  line-height: 1;
  font-size: 16px;
  text-align: center;

  color: rgba(255, 255, 255, 0.33);
`

const RunButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 40px;
  padding: 12px;
  margin-top: 24px;

  border: none;
  outline: none;
  background: #f531b1;
  box-shadow: 0px 4px 10px rgba(23, 43, 58, 0.25);
  border-radius: 4px;
  cursor: pointer;

  span {
    font-weight: 500;
    line-height: 16px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
  }

  transition: transform 140ms ease-out, box-shadow 140ms ease-out,
    background 140ms ease-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 7px 16px rgba(23, 43, 58, 0.22);
  }

  &[disabled] {
    box-shadow: none;
    background: #959595;
  }
`

const IconWrapper = styled.div`
  margin-right: 8px;
`
