import { graphql, useStaticQuery } from "gatsby"

export default function RelatedPost() {
  const relatedPosts = useStaticQuery(graphql`
    query relatedPostQuery($relatedPost: String) {
      allMdx(
        filter: {
          frontmatter: {
            postType: { eq: "post" }
            slug: { in: [$relatedPost] }
          }
        }
      ) {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `)
  console.log(relatedPosts)
  return null
}
