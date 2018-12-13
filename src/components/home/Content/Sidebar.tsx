import * as React from 'react'
import styled, { css } from '../../style/styled'

// Local
import { Space } from '../../shared/Space'
import { SideMenu } from './SideMenu'
import { SidebarLine } from './SidebarLine'
import Twitter from '../../vectors/Twitter'
import Slack from '../../vectors/Slack'
import Archive from '../../vectors/Archive'
import { mobile } from '../../style/media'
import { IssueType } from '../../../types'
import { getTopicUrlFriendly } from '../../../api'

type Props = {
  topicsTitles: string[]
  allIssues: IssueType[]
}

type State = {
  showAllIssues: boolean
}

export class Sidebar extends React.Component<Props, State> {
  state = {
    showAllIssues: false,
  }

  render() {
    const props = this.props

    return (
      <Wrapper>
        <Space height={64} />
        <SideMenu
          heading="Join the community"
          items={[
            {
              text: 'Follow on Twitter',
              href: 'https://twitter.com/graphqlweekly',
              icon: <Twitter />,
            },
            {
              text: 'Join us on Slack',
              href: 'https://slack.prisma.io/',
              icon: <Slack />,
            },
          ]}
        />

        <SidebarLine />

        <SideMenu
          heading="topics"
          primaryColor="#009BE3"
          items={props.topicsTitles.map(title => {
            const url = `/topic/${getTopicUrlFriendly(title)}`

            return {
              to: `${url}#content`,
              text: title,
              selected: isCurrentUrl(url),
            }
          })}
        />

        <Space height={64} />
        <SideMenu
          heading="Recent issues"
          primaryColor="#D60690"
          items={[
            ...props.allIssues
              .slice(0, this.state.showAllIssues ? undefined : 11)
              .map(issue => {
                const url = `/issue/${issue.number}`
                return {
                  to: `${url}#content`,
                  text: `Issue ${issue.number}`,
                  selected: isCurrentUrl(url),
                }
              }),

            {
              text: this.state.showAllIssues
                ? 'Hide old issues'
                : 'View all issues',
              icon: <Archive />,
              extraTop: true,
              onClick: this.toggledShowAll,
            },
          ]}
        />
      </Wrapper>
    )
  }

  toggledShowAll = () => {
    this.setState(prev => ({ showAllIssues: !prev.showAllIssues }))
  }
}

function isCurrentUrl(urlWithoutTrailingSlash: string) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  return (
    pathname.endsWith(urlWithoutTrailingSlash) ||
    pathname.includes(urlWithoutTrailingSlash + '/')
  )
}

// Styles
const Wrapper = styled.div`
  flex-grow: 1;

  margin-left: 42px;

  ${mobile(css`
    display: none;
  `)};
`
