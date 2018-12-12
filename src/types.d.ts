declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module 'react-image' {
  const content: any
  export default content
}

declare module 'just-debounce' {
  const content: any
  export default content
}

export type IssueLink = {
  position: number
  text: string
  title: string
  url: string
}

export type TopicType = {
  title: string
  links: Array<IssueLink>
}

export type TopicLinksType = {
  issueNumber: number
  issueDate: string
  links: Array<IssueLink>
}

export type Author = {
  avatarUrl: string
  description: string
  name: string
}

export type IssueType = {
  author?: Author
  date: string
  id: string
  number: number
  published: boolean
  title: string
  description?: string
  specialPerk?: string
  topics: Array<TopicType>
}
