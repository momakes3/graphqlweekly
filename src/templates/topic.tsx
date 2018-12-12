import * as React from 'react'
import Helmet from 'react-helmet'
import styled from '../components/style/styled'

// Local
import { Layout } from '../components/shared/Layout'
import { Header } from '../components/home/Header'
import { MetaTags } from '../components/shared/MetaTags'
import { Container } from '../components/shared/Container'
import { Topic } from '../components/home/Content/Topic'
import { Sidebar } from '../components/home/Content/Sidebar'
import { Footer } from '../components/home/Footer'
import { IssueType, TopicLinksType } from '../types'

type Props = {
  pageContext: {
    topicTitle: string
    topicLinks: TopicLinksType[]
    allIssues: IssueType[]
    firstIssueNumber: number
    topicsTitles: string[]
  }
}

export default (props: Props) => {
  return (
    <Layout>
      <MetaTags />
      <Helmet />

      <Header />

      <Container>
        <LayoutWrapper>
          <Topic
            title={props.pageContext.topicTitle}
            topicLinks={props.pageContext.topicLinks}
          />
          <Sidebar
            topicsTitles={props.pageContext.topicsTitles}
            allIssues={props.pageContext.allIssues}
          />
        </LayoutWrapper>
      </Container>

      <Footer />
    </Layout>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
`
