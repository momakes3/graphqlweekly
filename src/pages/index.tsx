import * as React from 'react'
import Helmet from 'react-helmet'

// Local
import { Layout } from '../components/shared/Layout'
import { Header } from '../components/home/Header'
import { MetaTags } from '../components/shared/MetaTags'
import { Content } from '../components/home/Content'

export default () => (
  <Layout>
    <MetaTags />
    <Helmet />

    <Header />
    <Content />
  </Layout>
)
