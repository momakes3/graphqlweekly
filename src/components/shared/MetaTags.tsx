import * as React from 'react'
import Helmet from 'react-helmet'

const defaults = {
  title: 'Prisma - Database tools for modern developers',
  description:
    'Open-source database tools for modern developers. Prisma replaces traditional ORMs and can be used to build GraphQL servers, REST APIs, microservices & more.',
  image: 'https://www.prisma.io/og-image.png',
  video: 'https://www.youtube.com/watch?v=jF9VULLzwVk',
  url: 'https://www.prisma.io',
}

type Props = {
  title?: string
  description?: string
  image?: string
  video?: string
  url?: string
}

export const MetaTags = ({
  title,
  description,
  image,
  video,
  url,
}: Props = defaults) => {
  image = image || defaults.image
  description = description || defaults.description
  video = video || defaults.video
  url = url || defaults.url
  title = title || defaults.title
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@prisma" />
      <meta name="twitter:creator" content="@prisma" />
      <meta name="twitter:image:src" content={image} />
      <meta name="twitter:player" content={video} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta
        name="og:url"
        content={typeof location !== 'undefined' ? location.href : url}
      />
      <meta name="og:site_name" content="Prisma" />
      <meta name="og:video" content={video} />
      <meta name="og:type" content="website" />
    </Helmet>
  )
}
