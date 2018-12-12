global.fetch = require('node-fetch')
const { getAllIssues, getTopicUrlFriendly } = require('./src/api')

exports.createPages = async ({ actions: { createPage } }) => {
  // a function that fetches our data
  const {
    lastIssue,
    firstIssueNumber,
    allIssues,
    topicsList,
  } = await getAllIssues()

  const topicsTitles = Object.keys(topicsList)
  const commonHomeContext = {
    lastIssue,
    firstIssueNumber,
    allIssues,
    topicsTitles,
  }

  // Create home page that shows latest issue and list of issues on the sidebar.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.tsx'),
    context: {
      issue: lastIssue,
      ...commonHomeContext,
    },
  })

  // Create a page for each issue.
  allIssues.forEach(issue => {
    createPage({
      path: `/issue/${issue.number}/`,
      component: require.resolve('./src/templates/index.tsx'),
      context: {
        issue,
        ...commonHomeContext,
      },
    })
  })

  // Create a page for each topic.
  topicsTitles.forEach(topicTitle => {
    const topicLinks = topicsList[topicTitle]
    createPage({
      path: `/topic/${getTopicUrlFriendly(topicTitle)}/`,
      component: require.resolve('./src/templates/topic.tsx'),
      context: {
        topicTitle,
        topicLinks,
        ...commonHomeContext,
      },
    })
  })
}
