import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"
import Blockquote from "../../components/Complete/Blockquote"
import Title from "../../components/Title"

const Misyonumuz = props => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <Title title="Misyonumuz" />
          <Blockquote>
            Ülkemizin en gelişmiş teknolojilerle tarımsal faaliyetlerini
            sürdürmesine destek vermek.
          </Blockquote>
          <Blockquote>
            Üretim temel taşı çiftçilerimizin üretimini artırabilmesi için hızlı
            ve etkin destek vermek.
          </Blockquote>
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
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  div {
    text-align: center;
    //color: var(--clr-white);
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

export default Misyonumuz
