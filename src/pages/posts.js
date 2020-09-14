import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
// ...GatsbyImageSharpFluid
const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Wrapper>
      <Layout>
        <Posts posts={posts} title="Tüm Yazılar" page />
      </Layout>
    </Wrapper>
  )
}
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "DD/MM/YYYY")
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          readTime
          slug
          title
        }
        excerpt
        id
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
Banner Component
===============
*/
  .banner-icons {
    display: flex;
    justify-content: center;
  }
  .banner-icons a {
    font-size: 1.5rem;
    margin: 0 0.25rem;
  }
  .banner-icons li {
    transition: var(--transition);
  }
  .banner-icons li:hover {
    transform: translateY(-10%);
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
export default PostsPage
