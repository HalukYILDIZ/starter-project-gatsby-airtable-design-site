import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects } from "../components"
import { Link } from "gatsby"
import SEO from "../components/seo"
const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Wrapper>
       <SEO
        title="Tüm Çalışmalarımız"
      />
      <Layout>
        <Projects projects={projects} title="Tüm Çalışmalarımız" page />
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
  .btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: var(--clr-primary-7);
  color: var(--clr-primary-1);
}

  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-white);
  }
  /*


  @media screen and (min-width: 992px) {
    .posts {
      width: 92vw;
    }
  }
  @media screen and (min-width: 1170px) {
    .posts-center {
      display: grid;
      grid-template-columns: 1fr 250px;
      column-gap: 1rem;
    }
  }

  /*
===============
Single Pages
===============
*/
  .newsletter-page,
  .success-page,
  .error-page {
    min-height: calc(100vh - 7rem);
    background: var(--clr-grey-10);
  }
  .newsletter-page,
  .success-page,
  .error-page {
    background: var(--clr-grey-10);
    display: grid;
    place-items: center;
    text-align: center;
  }
  /* success page */
  .success-page {
    background: var(--clr-primary-10);
  }
  .success-page h2 {
    margin-bottom: 1.5rem;
  }
`

export default ProjectsPage
