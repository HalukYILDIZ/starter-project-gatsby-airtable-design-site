import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import SEO from "../../components/seo"
const Mail = props => {
  return (
    <Layout>
       <SEO
        title="Mail"
        description="Mail adresimiz üzerinden bize ulaşabilirsiniz"
      />
      <Wrapper>
        <section className="contact-page">
          <article className="contact-form">
            <h3>İLETİŞİME GEÇİN</h3>
            <form action="https://formspree.io/xbjpjyzg" method="POST">
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  placeholder="AD-SOYAD"
                  className="form-control"
                />
                <input
                  type="email"
                  placeholder="MAIL ADRESİNİZ"
                  className="form-control"
                  name="email"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="MESAJINIZ"
                  className="form-control"
                ></textarea>
              </div>
              <button className="submit-btn btn">submit here</button>
            </form>
          </article>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-primary-8);
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
  /*
===============
Contact Page
===============
*/
  .contact-page {
    display: grid;
    place-items: center;
    padding: 5rem 0;
  }
  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
  }
  .contact-form:hover {
    box-shadow: var(--dark-shadow);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

export default Mail
