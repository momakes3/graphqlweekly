import * as React from 'react'

// Local
import { TopicBox } from '../../shared/Topics/TopicBox'
import { TopicArticle } from '../../shared/Topics/TopicArticle'
import { NavIssue } from './NavIssue'
import { IssueType, IssueLink } from '../../../types'
import { getTopicColor } from '../topicColors'
import { ContentWrapper } from './style'

type Props = {
  issue: IssueType
  lastIssueNumber: number
  firstIssueNumber: number
}

export const Issue = ({ issue, lastIssueNumber, firstIssueNumber }: Props) => {
  const date = new Date(issue.date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  const blueIssueTagProps = {
    issueNumber: issue.number,
    issueDate: `• ${date}`,
  }

  // Don't show the header card if no author or description is provided
  const hasIssueHeaderCard = issue.description || issue.author

  return (
    <ContentWrapper>
      {hasIssueHeaderCard && (
        <TopicBox
          {...blueIssueTagProps}
          isIssueCard={true}
          articles={[
            <TopicArticle
              title={issue.title}
              text={issue.description || ''}
              url={`/issue/${issue.number}`}
              specialPerk={issue.specialPerk}
            />,
          ]}
          author={
            issue.author && {
              avatar: issue.author.avatarUrl,
              name: issue.author.name,
              bio: issue.author.description,
            }
          }
        />
      )}

      {issue.topics.map((topic, i) => {
        return (
          <TopicBox
            key={topic.title}
            topicTitle={topic.title}
            topicColor={getTopicColor(topic.title)}
            articles={topic.links
              .sort((a, b) => b.position - a.position)
              .map(link => (
                <TopicArticle
                  title={link.title}
                  text={link.text}
                  url={link.url}
                />
              ))}
            // Show the blue tag on the first topic card if no header card is there
            {...(i === 0 && !hasIssueHeaderCard ? blueIssueTagProps : {})}
          />
        )
      })}

      <NavIssue
        firstIssueNumber={firstIssueNumber}
        lastIssueNumber={lastIssueNumber}
        prevNumber={issue.number - 1}
        nextNumber={issue.number + 1}
      />
    </ContentWrapper>
  )
}
