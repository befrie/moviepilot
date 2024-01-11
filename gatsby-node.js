/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allLeanFilmeJson {
        nodes {
          slug
        }
      }
    }
  `)

  // console.log("Ergebnis: ", data.allFilmeJson.nodes[0])

  data.allLeanFilmeJson.nodes.forEach(node => {
    actions.createPage({
      path: `/movie/${node.slug}`,
      component: path.resolve("./src/templates/movie.js"),
      context: {
        slug: node.slug,
      },
    })
    // })
  })
}
