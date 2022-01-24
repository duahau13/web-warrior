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
    ["Projects", "/projects"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ]

  return (
    <Flex
      as="nav"
      wrap="wrap"
      align="center"
      justify="space-between"
      py={[5, 8, 10]}
      px={{ base: 4 }}
      position={{ base: "sticky", md: "relative" }}
      top={0}
      bg={{ base: "green.200", md: "none" }}
      w="full"
      zIndex="sticky"
      maxW="container.xl"
      mx="auto"
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
        align={{ base: "center" }}
        mt={{ base: 4, sm: 8, md: 0 }}
        pl={{ sm: 4, md: 0 }}
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "12", md: "0" }}
        left={0}
        w={{ base: "full", md: "auto" }}
        bg={{ base: "green.200", md: "none" }}
        pb={{ base: "4", md: "0" }}
      >
        {navItems.map(([title, url], index) => (
          <Box
            key={index}
            pb={{ md: 2 }}
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
