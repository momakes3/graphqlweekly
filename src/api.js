const fetchGraphQL = async ({ query }) => {
  return fetch('https://api.graph.cool/simple/v1/cipb111pw5fgt01o0e7hvx2lf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  }).then(res => res.json())
}

const getAllIssues = async () => {
  const query = `{
    allIssues {
      id
      title
      published
      number
      date
      author {
        avatarUrl
        description
        name
      }
      topics {
        title
        links {
          url
          text
          position
          title
          url
        }
      }
    }
  }`

  let firstIssueNumber = 0
  let lastIssue = null

  try {
    const { data } = await fetchGraphQL({ query })
    const allIssues = data.allIssues
      .filter(issue => issue.published && issue.date && issue.number)
      .sort((a, b) => Number(b.number) - Number(a.number))

    lastIssue = allIssues[0]
    firstIssueNumber = allIssues[allIssues.length - 1].number

    // get all topics with links
    // {  [title]: [ { ...link } ] }
    let topicsList = {}
    allIssues.forEach(issue => {
      issue.topics.forEach(topic => {
        if (!topicsList[topic.title]) {
          topicsList[topic.title] = []
        }

        // Add it
        topicsList[topic.title].push({
          issueNumber: issue.number,
          issueDate: issue.date,
          links: topic.links,
        })
      })
    })

    // Tidy it up, it was a mess
    topicsList = unifySimilarTopics(topicsList)

    return {
      lastIssue,
      firstIssueNumber,
      allIssues,
      topicsList,
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}

// --------
// Helpers
// --------
function unifySimilarTopics(topicsList) {
  const Articles = 'Articles',
    Tutorials = 'Tutorials',
    Videos = 'Videos',
    Community_and_Events = 'Community & Events',
    Tools_and_Open_Source = 'Tools & Open Source'

  // prettier-ignore
  const conversionMap = {
    'Articles and Posts': Articles,
    'Article': Articles,
    'Articles & Videos': Articles,
    'Tutorials & Articles': Articles,
    'Articles & Announcements': Articles,
    
    'Talks': Videos,
    'Video': Videos,
    'Courses': Videos,
    'Course': Videos,
    'Media': Videos,
    'Videos & Talks': Videos,
    
    'Podcasts':Community_and_Events,
    'Podcast': Community_and_Events,
    'Conference': Community_and_Events,
    'GraphQL Foundation': Community_and_Events,
    'Community': Community_and_Events,
    'Community & News': Community_and_Events,
    'Resources & Community': Community_and_Events,
    
    'Educational Content': Tutorials,
    'Tutorial': Tutorials,
    'Articles & Tutorials': Tutorials,
    
    'Open Source':Tools_and_Open_Source,
    'Apollo': Tools_and_Open_Source,
    'Open Source & Tools': Tools_and_Open_Source,
    'Community & Open Source': Tools_and_Open_Source,
    'Tools & Open-Source': Tools_and_Open_Source,
    'Tools': Tools_and_Open_Source,
    'Open Tools & Source':  Tools_and_Open_Source,
  }

  const unifiedTopics = { ...topicsList }

  Object.keys(topicsList).forEach(currentTitle => {
    if (!conversionMap[currentTitle]) {
      return
    }

    const similarTitle = conversionMap[currentTitle]
    unifiedTopics[similarTitle].push(...topicsList[currentTitle])

    if (currentTitle !== similarTitle) {
      delete unifiedTopics[currentTitle]
    }
  })

  return unifiedTopics
}

function getTopicUrlFriendly(topicTitle) {
  return topicTitle
    .split(' ')
    .join('-')
    .replace(/[^a-zA-Z0-9-_]/g, '')
}

module.exports = { fetchGraphQL, getAllIssues, getTopicUrlFriendly }
