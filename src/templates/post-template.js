import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PostDetail({ data, pageContext }) {
  console.log(pageContext)
  const { title, featuredImage } = data.mdx.frontmatter
  const { body, excerpt } = data.mdx

  return (
    <>
      <Seo
        title={title}
        article
        description={excerpt}
        image={featuredImage.publicURL}
      />
      <Layout>
        <GatsbyImage
          image={getImage(featuredImage.childImageSharp.gatsbyImageData)}
          alt={title}
        />
        <h2>{title}</h2>
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    </>
  )
}

export const query = graphql`
  query slugQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
          publicURL
        }
      }
      body
      excerpt(pruneLength: 160)
    }
  }
`
