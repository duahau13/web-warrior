import React from "react"
import Layout from "../../components/Layout"
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
            const { title, category } = post.frontmatter
            return (
              <Link to={post.slug} key={post.id}>
                <h3>{title}</h3>
                <p>{category}</p>
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`
