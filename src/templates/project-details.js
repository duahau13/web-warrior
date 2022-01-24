import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Heading, Box } from "@chakra-ui/react"

export default function ProjectDetails({ data }) {
  const { body } = data.mdx
  const { title, stack, featuredImage } = data.mdx.frontmatter
  return (
    <Layout>
      <article>
        <Heading as="h2" size="2xl" mt={10}>
          {title}
        </Heading>
        <Heading as="h3" size="xl" mb={10} fontWeight="light">
          {stack}
        </Heading>
        <Box mb={10} borderRadius="lg" overflow="hidden">
          <GatsbyImage
            image={getImage(featuredImage.childImageSharp.gatsbyImageData)}
            alt={title}
          />
        </Box>
        <Box mt={10}>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetailsPage($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        stack
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
