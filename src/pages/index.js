import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design!!!!!!</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer bases in HCMC.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio
          </Link>
        </div>
        <GatsbyImage image={image} alt="banner" />
      </section>
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
