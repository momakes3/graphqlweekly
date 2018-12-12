import * as React from 'react'
import styled from 'styled-components'

// Locals
import { css } from '../../style/styled'
import { HLine } from '../Input/HLine'
import { InputColor } from '../../style/theme'
import { Link } from '../Link'

type Props = {
  topicTitle?: string
  topicColor?: InputColor
  issueNumber?: number
  isIssueCard?: boolean
  issueDate?: string
  articles: React.ReactNodeArray
  author?: any //TODO
}

export const TopicBox = ({
  topicTitle,
  topicColor,
  articles,
  isIssueCard,
  issueNumber,
  issueDate,
  author,
}: Props) => {
  return (
    <>
      {/* Blue Issue Tag */}
      {issueNumber && (
        <IssueTagAligner>
          <IssueTitle to={`/issue/${issueNumber}/#content`}>
            Issue {issueNumber}
            {issueDate && <IssueDate>{issueDate}</IssueDate>}
          </IssueTitle>
        </IssueTagAligner>
      )}

      <Wrapper
        topicColor={topicColor}
        hasIssueTitle={Boolean(issueNumber)}
        isIssueCard={isIssueCard}
      >
        {topicTitle && (
          <TopicsTitle textColor={topicColor}>{topicTitle}</TopicsTitle>
        )}
        <div>
          {articles.map((e, i) => {
            return (
              <div key={i}>
                {e}
                {articles.length === i + 1 || <HLine />}
              </div>
            )
          })}
        </div>
        {author && (
          <AuthorWrapper>
            <Avatar image={author.avatar} />
            <AuthorDetails>
              <AuthorName>{author.name}</AuthorName>
              <AuthorBio>{author.bio}</AuthorBio>
            </AuthorDetails>
          </AuthorWrapper>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div<{
  topicColor?: InputColor
  hasIssueTitle?: boolean
  isIssueCard?: boolean
}>`
  min-height: 100px;
  margin-bottom: 16px;

  background: ${p => (p.isIssueCard ? '#f6f6f7' : 'white')};
  box-shadow: 0px 4px 16px rgba(8, 17, 70, 0.05);
  border-radius: 8px;

  padding: 64px;

  ${p =>
    p.hasIssueTitle &&
    css`
      margin-top: -15px;
    `};

  ${p =>
    p.topicColor &&
    css`
      padding-left: 56px;
      border-left: 8px solid ${p.topicColor};

      a {
        color: ${p.topicColor};
        text-decoration: underline;
      }
    `};
`

const TopicsTitle = styled.h2<{ textColor?: InputColor }>`
  margin: 0 0 32px 0;

  font-weight: 500;
  line-height: 1;
  font-size: 18px;
  text-transform: uppercase;

  color: ${p => p.textColor};
`

const IssueTagAligner = styled.div`
  text-align: center;
`

const IssueTitle = styled(Link)`
  display: inline-flex;
  position: relative;
  height: 32px;
  margin: 0 auto;
  padding-left: 17px;
  padding-right: 17px;

  background: #6560e2;
  box-shadow: 0px 4px 10px rgba(23, 43, 58, 0.25);
  border-radius: 32px;

  font-weight: 500;
  line-height: 32px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;

  color: white;
`

const IssueDate = styled.span`
  opacity: 0.66;
  margin-left: 4px;
  ::before {
    content: ' ';
  }
`

const AuthorWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
`

const Avatar = styled.div<{ image: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url(${p => p.image});
  background-size: cover;
`

const AuthorDetails = styled.div`
  flex-grow: 1;
  margin-left: 16px;
`

const AuthorName = styled.h3`
  margin: 0;
  font-style: normal;

  font-weight: 500;
  line-height: 1;
  font-size: 16px;

  color: #081146;
`

const AuthorBio = styled.h2`
  margin: 8px 0 0 0;

  font-weight: 400;
  line-height: 1;
  font-size: 16px;

  color: #4d5379;
`
