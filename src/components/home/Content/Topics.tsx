import * as React from 'react'
import styled from 'styled-components'

// Local
import { TopicBox } from '../../shared/Topics/TopicBox'
import { TopicArticle } from '../../shared/Topics/TopicArticle'
import { NavIssue } from './NavIssue'
import nikolasBurk from '../../../../static/nikolasBurk.png'

export const Topics = () => {
  return (
    <Wrapper>
      <TopicBox
        issueTitle="Issue 88"
        issueDate="• 25. Mar 2018"
        isIssueCard={true}
        articles={[
          <TopicArticle
            title="New GraphCMS, GraphQL Day and more background on Prisma this week in GraphQL Weekly!"
            text="Aenean eget elementum libero, ut sagittis lacus. Maecenas pulvinar nec nunc in molestie. Vivamus viverra, lectus at porttitor dignissim, sapien libero laoreet sapien, a feugiat dolor sapien sit amet nisl. Pellentesque a orci quam. Nunc a tempor lacus. Maecenas at lectus vitae lectus aliquet interdum."
          />,
        ]}
        author={{
          avatar: nikolasBurk,
          name: 'Nikolas Burk',
          bio: 'Full-Stack Developer at Graphcool',
        }}
      />

      <TopicBox
        topicTitle="Articles"
        topicColor="#F531B1"
        articles={[
          <TopicArticle
            title="Introducing Prisma Cloud — A GraphQL Database Platform "
            text={
              <>
                Are you looking for ways to put your <a href="#">Prisma</a>{' '}
                services into production? Because Prisma is entirely
                open-source, you can always do so by using your favorite cloud
                provider. In case you don't want to fiddle around with Docker
                and would like a bit more convenience and tooling around
                deploying and hosting Prisma, you can now simply setup your own
                Prisma cluster with Prisma Cloud. Connect your database and
                you're ready to go!
              </>
            }
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
        topicTitle="Tutorials"
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
        topicTitle="Community & Events"
        topicColor="#009BE3"
        articles={[
          <TopicArticle
            title="“GraphQL Day” in Amsterdam on April 14"
            text="Need an excuse for a trip to Amsterdam? Here it comes! The GraphQL Europe team is bringing a mini-conference to the Dutch capital. Look forward to great talks by Ken Wheeler, Johannes Schickling, Martijn Walraven and a lot more. "
            special="All GraphQL Day attendees get a free ticket to attend the after-party from the ReactAmsterdam conference the day before."
          />,
        ]}
      />

      <TopicBox
        topicTitle="Videos"
        topicColor="#27AE60"
        articles={[
          <TopicArticle
            title="Intro to Urql (Youtube, 35 min)"
            text="urql is a new GraphQL client for React. At the most recent NYC GraphQL Meetup, Kurt Kemple gave a presentation about it. 35 min well worth your time!"
          />,
        ]}
      />

      <TopicBox
        topicTitle="Tools & Open Source"
        topicColor="#009BE3"
        articles={[
          <TopicArticle
            title="maticzav/graphql-shield"
            text={`Matic Zavadlal has created a nice little library to secure GraphQL servers: "GraphQL Shield helps you create permission layer for your application. The idea behind it is to separate the permission logic from your application logic. This way you can you can make sure no request will ever be resolved if it wasn't meant to be."`}
          />,
          <TopicArticle
            title="LawJolla/prisma-auth0-example"
            text="Another approach to implement permissions in your GraphQL server is by using custom directives right inside your GraphQL schema definition. Check out this example by Dennis Walsh to learn more."
          />,
        ]}
      />

      <NavIssue />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;

  max-width: 800px;
  margin-top: -60px;
  width: 100%;
`
