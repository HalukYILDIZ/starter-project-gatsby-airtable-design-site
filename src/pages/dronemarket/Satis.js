import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects } from "../../components"
import { Link } from "gatsby"

const Satis = ({ data }) => {
  const {
    allAirtable: { nodes: satis },
  } = data
  return (
    <Wrapper>
      <Layout>
        <Projects projects={satis} title="Stoktaki Ürünlerimiz" page />
      </Layout>
    </Wrapper>
  )
}
export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Satis" } }) {
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
  /*
===============
Posts Component
===============
*/
  .posts {
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .posts-title {
    margin-top: 5 rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #e12d39;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

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

export default Satis

