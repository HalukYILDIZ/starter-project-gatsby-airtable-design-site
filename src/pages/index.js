import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  //Projects,
  Survey,
  Customers,
  GridProjects,
} from "../components"
import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO
        title="zihatim"
        description="ZİHA tarımsal inavasyon merkezi"
        image="favicon-32x32.png"
      />
      <Hero />
      <About />
      <GridProjects projects={projects} title="son çalışmalarımız" />
      <Survey />
      <Customers />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
