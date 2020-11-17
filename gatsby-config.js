require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `zihatim`,
    description: `Zirai İnsansız Hava Araçları Tarımsal İnavasyon Merkezi `,
    author: `@halukyildiz`,
    titleTemplate: `%s | Tarımsal İnavasyon Merkezi`,
    url: `https://ziha.netlify.app/`,
    image: `/logo2.png`,
    twitterUsername: `@zihatim`,
  },
  plugins: [
    //`gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },

    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `44525586587`,
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 590,
    //         },
    //       },
    //     ],
    //   },
    // },

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
