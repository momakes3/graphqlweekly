import * as React from 'react'

// Local
import { TopicBox } from '../../shared/Topics/TopicBox'
import { TopicArticle } from '../../shared/Topics/TopicArticle'
import { TopicLinksType } from '../../../types'
import { getTopicColor } from '../topicColors'
import { ContentWrapper } from './style'

type Props = {
  title: string
  topicLinks: TopicLinksType[]
}

export const Topic = ({ title, topicLinks }: Props) => {
  return (
    <ContentWrapper>
      {topicLinks.slice(0, 16).map((topicLinkObject, i) => {
        return (
          <TopicBox
            key={topicLinkObject.issueNumber}
            topicTitle={title}
            topicColor={getTopicColor(title)}
            issueNumber={topicLinkObject.issueNumber}
            issueDate={`• ${formatDate(topicLinkObject.issueDate)}`}
            articles={topicLinkObject.links.map(link => (
              <TopicArticle
                title={link.title}
                text={link.text}
                url={link.url}
              />
            ))}
          />
        )
      })}
    </ContentWrapper>
  )
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
