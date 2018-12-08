import * as React from 'react'
import styled from 'styled-components'
import { TopicBox } from '../../shared/Topics/TopicBox'
import { TopicArticle } from '../../shared/Topics/TopicArticle'

// Local

export const Topics = () => {
  return (
    <Wrapper>
      <TopicBox
        issueTitle="Issue 88"
        issueDate="• 25. Mar 2018"
        articles={[
          <TopicArticle
            title="New GraphCMS, GraphQL Day and more background on Prisma this week in GraphQL Weekly!"
            text="Aenean eget elementum libero, ut sagittis lacus. Maecenas pulvinar nec nunc in molestie. Vivamus viverra, lectus at porttitor dignissim, sapien libero laoreet sapien, a feugiat dolor sapien sit amet nisl. Pellentesque a orci quam. Nunc a tempor lacus. Maecenas at lectus vitae lectus aliquet interdum."
          />,
        ]}
        author={{
          avatar: '',
          name: 'Nikolas Burk',
          bio: 'Full-Stack Developer at Graphcool',
        }}
      />

      <TopicBox
        topictitle="Articles"
        topicColor="#F531B1"
        articles={[
          <TopicArticle
            title="Introducing Prisma Cloud — A GraphQL Database Platform "
            text="Are you looking for ways to put your Prisma services into production? Because Prisma is entirely open-source, you can always do so by using your favorite cloud provider. In case you don't want to fiddle around with Docker and would like a bit more convenience and tooling around deploying and hosting Prisma, you can now simply setup your own Prisma cluster with Prisma Cloud. Connect your database and you're ready to go!"
          />,
          <TopicArticle
            title="SDL First Products: Parallelizing Product Development with GraphQL"
            text="The GraphQL Schema Definition Language (SDL) is simple, concise and expressive. In this article, Christopher Biscardi explains how the SDL can be leveraged for rapid product development and decouple the frontend from the backend teams."
          />,
          <TopicArticle
            title="The New GraphCMS"
            text="The GraphCMS team is doing a major redesign of their architecture. Check this article to learn about the major changes and migration paths. tl;dr: Every aspect of GraphCMS will be greatly improved. New backend architecture and infrastructure, new open sourced web app, new staging workflow."
          />,
        ]}
      />

      <TopicBox
        topictitle="Tutorials"
        topicColor="#6560E2"
        articles={[
          <TopicArticle
            title="What the hell is Prisma, the GraphQL thing?"
            text="Brandon Paquette untangles the GraphQL ecosystem by giving an explanation of Prisma and how it fits into your stack. It's a great read for everyone who feels overwhelmed with the recent developments in the GraphQL community and is seeking for some clarity. An excellent read!"
          />,
          <TopicArticle
            title="Migrating a Phoenix and Elm app from REST to GraphQL"
            text="Many developers still are not aware of the fact that GraphQL is language-agnostic and thus can also be used outside the JavaScript ecosystem. In this post, Paul Fioravanti describes his path of migrating a Phoenix/Elm app from REST to GraphQL."
          />,
        ]}
      />

      <TopicBox
        topictitle="Community & Events"
        topicColor="#009BE3"
        articles={[
          <TopicArticle
            title="“GraphQL Day” in Amsterdam on April 14"
            text="Need an excuse for a trip to Amsterdam? Here it comes! The GraphQL Europe team is bringing a mini-conference to the Dutch capital. Look forward to great talks by Ken Wheeler, Johannes Schickling, Martijn Walraven and a lot more. "
          />,
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-grow: 1;
  max-width: 800px;
`
