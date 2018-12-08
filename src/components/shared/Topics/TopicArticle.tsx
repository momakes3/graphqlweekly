import * as React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  text: string
}

export const TopicArticle = ({ title, text }: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  )
}

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  line-height: 1.33;
  font-size: 24px;

  color: #081146;
`

const Text = styled.p`
  font-weight: normal;
  line-height: 1.75;
  font-size: 16px;

  color: #081146;
`
