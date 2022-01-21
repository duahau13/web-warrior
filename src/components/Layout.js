import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { Container, Box, Text } from "@chakra-ui/react"

export default function Layout({ children }) {
  return (
    <Container maxW="container.xl">
      <Navbar />
      <div>{children}</div>
      <Box as="footer">
        <Text my={10} align="center">
          Copyright {new Date().getFullYear()} Web Warrior
        </Text>
      </Box>
    </Container>
  )
}
