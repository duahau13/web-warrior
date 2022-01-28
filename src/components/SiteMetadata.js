import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query site_metadata_query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          siteUrl
          defaultTitle: siteTitle
          titleTemplate
          defaultDescription: siteDescription
          defaultImage: siteImage
          headline
          siteLanguage
          ogLanguage
          author
          twitter
          facebook
        }
      }
    }
  `)
  return site
}
