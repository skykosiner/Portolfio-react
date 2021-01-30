require("dotenv").config()

const API = process.env.API
const SPACE_ID = process.env.SPACE_ID

module.exports = {
  siteMetadata: {
    title: `Yoni Kosiner`,
    description: `Yoni Kosiner Portfolio`,
    author: `Yoni Kosiner`,
    image: `https://kosiner.codes/static/media/Logo.f8c38dee.svg`,
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: API,
        spaceId: SPACE_ID,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `http://localhost:2368`,
        contentApiKey: `bf3f4f848a82f05fc193f0496c`,
        version: `v3`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
