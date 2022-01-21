import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, SimpleGrid, Heading, Box, Text } from "@chakra-ui/react"

export default function AllProjects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(data)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <Heading as="h2" size="2xl" mt={20}>
          Portfolio
        </Heading>
        <Heading as="h3" size="xl" fontWeight="normal">
          Projects & Websites I've created
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={[10, null, 20]} my={20} mx={5}>
          {projects.map(project => {
            const { slug, title, stack, thumb } = project.frontmatter
            return (
              <Link to={"/projects/" + slug} key={project.id}>
                <GatsbyImage
                  image={getImage(thumb.childImageSharp.gatsbyImageData)}
                  alt="title"
                />
                <Heading as="h3" size="md" mt={5}>
                  {title}
                </Heading>
                <Text mt={1} color="gray.500">
                  {stack}
                </Text>
              </Link>
            )
          })}
        </SimpleGrid>
        <Text>Like what you see? Email me at {contact} for a quote.</Text>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMdx(
      filter: { frontmatter: { postType: { eq: "page" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
