import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query site_metadata_query {
      site {
        siteMetadata {
          siteTitle
          titleTemplate
          siteDescription
          url
          siteImage
          twitter
        }
      }
    }
  `)
  return site.siteMetadata
}
