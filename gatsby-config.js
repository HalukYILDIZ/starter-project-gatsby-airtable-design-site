require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `ziha`,
    description: `Zirai İnsansız Hava Araçları Tarımsal İnavasyon Merkezi `,
    author: `@halukyildiz`,
    titleTemplate: `%s | Gatsby - Airtable`,
    url: `https://ziha.netlify.app/`,
    image: `sayfa1.jpg`,
    twitterUsername: `@halukyildiz4000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
          {
            family: `Caveat`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_ZIHA_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_ZIHA_BASE,
            tableName: `Projects`,
            mapping: {
              image: `fileNode`,
            },
          },
          {
            baseId: process.env.GATSBY_ZIHA_BASE,
            tableName: `Customers`,
            mapping: {
              image: `fileNode`,
            },
          },
          {
            baseId: process.env.GATSBY_ZIHA_BASE,
            tableName: `Hero`,
            mapping: {
              image: `fileNode`,
            },
          },
        ],
      },
    },
  ],
}
