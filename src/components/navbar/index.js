import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useState } from "react"
import { Box, Flex, Stack } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"

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
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)
  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Projects", "/projects"],
    ["Blog", "/blog"],
  ]

  return (
    <Flex
      as="nav"
      wrap="wrap"
      align="center"
      justify="space-between"
      my={[5, 10]}
    >
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Stack
        direction={["column", "row"]}
        spacing={5}
        flexBasis={{ base: "100%", md: "auto" }}
        display={{ base: show ? "flex" : "none", md: "flex" }}
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "20px", md: "0" }}
        bg={{ base: "teal.200", md: "none" }}
      >
        {navItems.map(([title, url], index) => (
          <Box
            key={index}
            pb={2}
            borderBottom="3px"
            borderStyle="solid"
            borderColor="transparent"
            _hover={{ borderColor: "black" }}
          >
            <Link to={url}>{title}</Link>
          </Box>
        ))}
      </Stack>
    </Flex>
  )
}
