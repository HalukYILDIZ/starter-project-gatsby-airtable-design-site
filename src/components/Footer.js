import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} ZİHA Tarımsal İnavasyon Merkezi. All rights reserved.
      </p>
      <p>Adres: Mustafa Kemal Mah. Dumlupınar Bulvarı TepePrime DNo:18 Çankaya/ANKARA  Tel: 0 (312) 945 47 91</p>
    
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  padding: 1rem;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`
export default Footer
