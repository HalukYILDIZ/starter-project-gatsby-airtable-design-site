import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"
import Blockquote from "../../components/Complete/Blockquote"
import Title from "../../components/Title"
import SEO from "../../components/seo"
import ShareSocialButton from "../../components/ShareSocialButton"
const Misyonumuz = props => {
  return (
    <Layout>
      <SEO title="Misyonumuz" description="Emeğinizi Çiğnetmeyin" />
      <Wrapper>
        <div>
          <Title title="Misyonumuz" />
          <Blockquote>
            Ziha Tarımsal İnovasyon Merkezi, Anadolu topraklarında geleneksel
            tarım üretimini, havacılık teknolojisi ile birleştirerek çağdaş
            tarım uygulamaları ile daha sağlıklı ve daha verimli sonuç almayı
            hedefleyen bunun için gerekli olan nitelikli insan ve teknolojiyi
            çiftçilerimizle buluşturmayı amaçlayan bir kuruluştur.
          </Blockquote>
          <Blockquote>
            Ülkemizin en gelişmiş teknolojilerle tarımsal faaliyetlerini
            sürdürmesine destek vermek.
          </Blockquote>
          <Blockquote>
            Üretimin temel taşı çiftçilerimizin üretimini artırabilmesi için
            hızlı ve etkin destek vermek.
          </Blockquote>
          <ShareSocialButton
          // shareUrl="http://www.halukyildiz.com.tr"
          // title="ben"
          />
          <Link to="/" className="btn">
            Anasayfa
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
