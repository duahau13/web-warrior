import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default function AllBlogPosts({ data }) {
  const posts = data.allMdx.nodes
  console.log(posts)

  return (
    <Layout>
      <div>
        <h2>Latest blog posts</h2>
        <div>
          {posts.map(post => {
            const { id } = post
            const { slug, title } = post.frontmatter
            return (
              <Link to={slug} key={id}>
                <h3>{title}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { postType: { eq: "post" } } }) {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`
