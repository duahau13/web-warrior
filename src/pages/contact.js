import React from "react"
import Layout from "../components/layout"
import PageHero from "../components/hero"
import {
  Container,
  Input,
  InputLeftElement,
  InputGroup,
  Textarea,
  Select,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react"
import { InfoIcon, EmailIcon } from "@chakra-ui/icons"
import { Link as GatsbyLink } from "gatsby"

export default function Contact() {
  return (
    <Layout>
      <PageHero />
      <Container>
        <form name="contact" method="POST" data-netlify="true">
          <Stack spacing={5}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<InfoIcon color="gray.300" />}
              />
              <Input type="text" name="name" placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input type="email" name="email" placeholder="Email" />
            </InputGroup>

            <Select placeholder="Your interest">
              <option value="option1">Gatsby</option>
              <option value="option2">NextJS</option>
              <option value="option3">Netlify CMS</option>
            </Select>
            <Textarea name="message" placeholder="Type your message" />
            <Button type="submit">Send message</Button>
          </Stack>
        </form>
        <GatsbyLink to="/">
          <Link as="span">Home</Link>
        </GatsbyLink>
      </Container>
    </Layout>
  )
}
