import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects } from "../components"
import { Link } from "gatsby"

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Wrapper>
      <Layout>
        <Projects projects={projects} title="Tüm Çalışmalarımız" page />
        <Link to="/" className="btn">
          Anasayfa
        </Link>
      </Layout>
    </Wrapper>
  )
}
export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projects" } }) {
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

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-white);
  }
  a {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 0rem;
    margin-bottom: 3rem;
  }
`

export default ProjectsPage
