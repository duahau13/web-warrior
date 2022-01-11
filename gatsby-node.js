const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve("./src/templates/post-template.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
