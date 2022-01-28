/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-prettier-build`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My tiny blog`,
        short_name: `Tiny blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
      },
    },
  ],
  siteMetadata: {
    siteUrl: "https://gatsby-warrior.netlify.app",
    siteTitle: "Gatsby Warrior",
    titleTemplate: "%s · The Real Hero",
    siteDescription: "web dev portfolio",
    siteImage: "/my-portrait.jpg",
    headline: "Simple things make great results",
    siteLanguage: "vi-VN",
    ogLanguage: "e-v",
    author: "DuongThu",
    twitter: "@gatsbywarrior",
    facebook: "@gatsbywarrior",
    copyright: "This website is copyright 2022 by Gatsby Warrior",
    contact: "info@gatsbywarrior.com",
  },
}
