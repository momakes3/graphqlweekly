import * as React from 'react'
import * as GoogleAnalytics from 'react-ga'

const withTracker = WrappedComponent => {
  if (typeof window === 'undefined') {
    return WrappedComponent
  }
  GoogleAnalytics.initialize('UA-74131346-14')
  const ga = GoogleAnalytics.ga()

  ga(u => {
    u.set('sendHitTask', model => {
      fetch('https://ga.graph.cool', {
        method: 'POST',
        body: model.get('hitPayload'),
        mode: 'no-cors',
      })
    })
  })
  const trackPage = page => {
    GoogleAnalytics.set({ page })
    GoogleAnalytics.pageview(page)
  }

  const HOC = props => {
    if (props.location) {
      const page = props.location.pathname
      trackPage(page)
    }

    return <WrappedComponent {...props} />
  }

  return HOC
}

export default withTracker
