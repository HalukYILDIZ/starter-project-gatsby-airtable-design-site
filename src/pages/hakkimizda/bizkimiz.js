import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"
import Blockquote from "../../components/Complete/Blockquote"
const BizKimiz = props => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>Biz Kimiz?</h1>
          <Blockquote display="warning">Çok yakında öğreneceksiniz!</Blockquote>
          <Link to="/" className="btn">
            home
          </Link>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-primary-9);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  div {
    text-align: center;
    color: var(--clr-white);
  }
  h1 {
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 1.5rem;
  }
  @media (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
`

export default BizKimiz
