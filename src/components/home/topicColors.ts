export const topicColors: { [topic: string]: string } = {
  Articles: '#F531B1',
  Tutorials: '#6560E2',

  'Community & Events': '#009BE3',
  Conference: '#009BE3',

  Videos: '#27AE60',
  Talks: '#27AE60',

  'Tools & Open Source': '#F0950C',
  'Open Source': '#F0950C',
}

export const getTopicColor = (topic: string): string =>
  topicColors[topic] || '#F531B1'
