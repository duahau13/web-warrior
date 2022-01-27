import React from "react"
import Layout from "../components/layout"
import { Heading } from "@chakra-ui/react"

export default function NotFound404() {
  return (
    <Layout>
      <Heading as="h2" size="2xl" mt={10}>
        Not found!!!
      </Heading>
      <Heading as="h3" size="xl" mb={10} fontWeight="light">
        The content you've requested cannot be found. Please try others.
      </Heading>
    </Layout>
  )
}
