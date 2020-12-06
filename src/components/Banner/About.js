import React from "react"
import SocialLinks from "../../constants/socialLinks"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import styled from "styled-components"
//...GatsbyImageSharpFixed
const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Hero" } }, limit: 1) {
      nodes {
        table
        data {
          image {
            localFiles {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  const {
    allAirtable: { nodes: hero },
  } = data
  return (
    <Wrapper>
      <Title title="Hakkımızda" />
      <Image
        fixed={hero[0].data.image.localFiles[0].childImageSharp.fixed}
        className="img"
        alt="drone ilaçlama"
      />
      <p>
        Zirai insansız hava araçlarımız ile, üreticimizin zirai ürünlerini
        analiz ederek ihtiyaç duyulan ilaçlamayı hızlı ve etkin bir şekilde
        gerçekleştirmekteyiz.
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
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
`
export default About
