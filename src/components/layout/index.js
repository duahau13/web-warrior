import React from "react"
import Navbar from "../navbar"
import "../../styles/global.css"
import { Container, Box, Text } from "@chakra-ui/react"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        {children}
        <Box as="footer">
          <Text my={10} align="center">
            Copyright {new Date().getFullYear()} Gatsby Warrior
          </Text>
        </Box>
      </Container>
    </>
  )
}
