exports.fetchGraphQL = async ({ query }: { query: string }) => {
  return fetch('https://api.graph.cool/simple/v1/cipb111pw5fgt01o0e7hvx2lf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  }).then(res => res.json())
}
