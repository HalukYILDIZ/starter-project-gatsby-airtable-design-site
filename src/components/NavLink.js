import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import links from "../constants/links"
const NavLink = ({ page }) => {
  return (
    <Wrapper>
      <button>{page}</button>
      <div className="links">
        {links.map((link, index) => {
          const { url, label, icon } = link
          if (link.page === page) {
            return (
              <Link to={url} key={index}>
                {icon}
                {label}
              </Link>
            )
          } else return <></>
        })}
        <div className="caret"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  padding: 1rem 0;
  position: relative;
  button {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 10px 20px;
    width: 100%;
    text-transform: capitalize;
    position: relative;
  }
  .links {
    font-family: "Times New Roman", Times, serif;
    font-size: 15px;
    border-top-style: solid;
    border-width: 1px;
    font-weight: 300;
    letter-spacing: 0.5px;
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    padding: 2rem;
    background: var(--clr-white);
    border-radius: var(--radius);
    display: flex;
    //grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem 2rem;
    grid-gap: 1rem 4rem;
    a {
      display: grid;
      grid-template-columns: auto 120px;
      gap: 0.5rem;
      grid-gap: 0.5rem;
      align-items: center;
      color: #0a2540;
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 500;
      .icon {
        color: var(--clr-primary-5);
      }
      &:hover {
        color: var(--clr-primary-5);
        .icon {
          color: #0a2540;
        }
      }
    }
  }
  &:hover .links {
    visibility: visible;
  }
  .caret {
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-grey-5);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default NavLink
