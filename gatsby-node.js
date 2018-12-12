const fetch = require('node-fetch')
const { fetchGraphQL } = require('./src/request')

const getIssuesData = async () => {
  const query = `
    {
      allIssues {
        id
        title
      }
    }
  `

  return fetchGraphQL({ query })
}

exports.createPages = async ({ actions: { createPage } }) => {
  // a function that fetches our data
  const data = await getIssuesData()

  // Create a page that lists all Pokémon.
  // createPage({
  //   path: `/`,
  //   component: require.resolve('./src/templates/all-pokemon.js'),
  //   context: { allPokemon },
  // })

  // // Create a page for each issue.
  // allPokemon.forEach(pokemon => {
  //   createPage({
  //     path: `/issue/${pokemon.name}/`,
  //     component: require.resolve('./src/templates/pokemon.js'),
  //     context: { pokemon },
  //   })
  // })
}
