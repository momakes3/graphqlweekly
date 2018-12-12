import * as React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  text: string
  url: string
  specialPerk?: string
}

export const TopicArticle = ({ title, text, url, specialPerk }: Props) => {
  const isTextSafe = !text.includes('<') || /<(p|strong|i|a) ?.*>/.test(text)
  return (
    <>
      <Title href={url} target="_blank">
        {title}
      </Title>

      {isTextSafe ? (
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <Text children={text} />
      )}

      {specialPerk && (
        <Text>
          <strong>Special perk:</strong>
          {specialPerk}
        </Text>
      )}
    </>
  )
}

const Title = styled.a`
  margin: 0;
  font-weight: 500;
  line-height: 1.33;
  font-size: 24px;

  &&&& {
    text-decoration: none;
    color: #081146;
  }
`

const Text = styled.p`
  font-weight: 400;
  line-height: 1.75;
  font-size: 16px;

  color: #081146;

  strong {
    font-weight: 500;

    ::after {
      content: ' ';
    }
  }
`
