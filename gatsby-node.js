const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      pages: allMdx(filter: { frontmatter: { postType: { eq: "page" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      posts: allMdx(filter: { frontmatter: { postType: { eq: "post" } } }) {
        nodes {
          frontmatter {
            slug
            relatedPost
          }
        }
      }
    }
  `)

  data.pages.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
  data.posts.nodes.forEach(node => {
    actions.createPage({
      path: "/blog/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug: node.frontmatter.slug,
        relatedPost: node.frontmatter.relatedPost,
      },
    })
  })
}
