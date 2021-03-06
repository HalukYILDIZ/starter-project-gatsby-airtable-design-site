import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Image from "gatsby-image"
import Banner from "../components/Banner"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import ShareSocialButton from "../components/ShareSocialButton"
const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, slug },
      body,
    },
  } = data
  return (
    <Layout>
      <SEO title={title} description={category} />
      <Wrapper>
        <article>
          <Image alt={title} fluid={image.childImageSharp.fluid} />
          <div className="post-info">
            <span>{category}</span>
            <h1>{title}</h1>
            <ShareSocialButton
              shareUrl={`https://www.zihatim.com/posts/${slug}`}
              title={title}
            />
            <p>{date}</p>

            <div className="underline"></div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
          <ShareSocialButton
            shareUrl={`https://www.zihatim.com/posts/${slug}`}
            title={title}
          />
        </article>
        <article>
          <Banner />
        </article>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "DD/MM/YYYY")
        readTime
        title
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .center-btn {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 3rem auto;
  }
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h1 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
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
`

export default PostTemplate
