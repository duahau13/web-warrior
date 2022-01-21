import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Box, Flex, HStack } from "@chakra-ui/react"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Projects", "/projects"],
    ["Blog", "/blog"],
  ]

  return (
    <Box as="nav" my={10}>
      <Flex>
        <Link to="/">
          <h1>{title}</h1>
        </Link>
        <HStack spacing={5} ml="auto">
          {navItems.map(([title, url], index) => (
            <Box
              key={index}
              pb={2}
              borderBottom="3px"
              borderStyle="solid"
              borderColor="white"
              _hover={{ borderColor: "black" }}
            >
              <Link to={url}>{title}</Link>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
