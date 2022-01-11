import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PostDetail({ data }) {
  console.log(data)
  const { title } = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <Layout>
      <h2>{title}</h2>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
