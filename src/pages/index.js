import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import {
  VStack,
  Flex,
  SimpleGrid,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react"

export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <SimpleGrid columns={[1, null, 2]}>
        <Flex direction="column" justify="center">
          <Heading as="h2" size="4xl">
            Design!!!!!!
          </Heading>
          <Heading as="h3" size="2xl" mb={5}>
            Develop & Deploy
          </Heading>
          <p>UX designer & web developer bases in HCMC.</p>
          <Link to="/projects">
            <Button colorScheme="teal" mt={5}>
              My projects
            </Button>
          </Link>
        </Flex>
        <Box boxSize="full">
          <GatsbyImage image={image} alt="banner" />
        </Box>
      </SimpleGrid>
    </Layout>
  )
}

export const query = graphql`
  {
    file(name: { eq: "banner" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`
