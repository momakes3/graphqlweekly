import * as React from 'react'
import Helmet from 'react-helmet'
import styled from '../components/style/styled'

// Local
import { Layout } from '../components/shared/Layout'
import { Header } from '../components/home/Header'
import { MetaTags } from '../components/shared/MetaTags'
import { Container } from '../components/shared/Container'
import { Issue } from '../components/home/Content/Issue'
import { Sidebar } from '../components/home/Content/Sidebar'
import { Footer } from '../components/home/Footer'
import { IssueType } from '../types'

type Props = {
  pageContext: {
    issue: IssueType
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
          <Issue
            issue={props.pageContext.issue}
            lastIssueNumber={props.pageContext.allIssues[0].number}
            firstIssueNumber={props.pageContext.firstIssueNumber}
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
