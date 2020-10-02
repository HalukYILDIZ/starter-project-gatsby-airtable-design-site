import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../images/logo1.png"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
import NavLink from "./NavLink"
import { GatsbyContext } from "../context/context"
import SocialLinks from "../constants/socialLinks"

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext)
  const tempLinks = [
    ...new Set(
      links.map(link => {
        return link.page
      })
    ),
  ]
  return (
    <Wrapper>
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="ziha" className="logo"></img>
            </Link>
            {!isSidebarOpen && (
              <button className="toggle-btn" onClick={showSidebar}>
                <GoThreeBars />
              </button>
            )}
          </div>
          <ul className="nav-links">
            {tempLinks.map((page, index) => {
              return <NavLink key={index} page={page} />
            })}
          </ul>
          <ul className="nav-links">
            <SocialLinks styleClass="banner-icons" />
          </ul>

          {/* <ul className="nav-links">
          <li>
            <button>hizmetler</button>
          </li>
          <li>
            <button>dronlar</button>
          </li>
          <li>
            <button>iletişim</button>
          </li>
        </ul> */}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
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
  /* end of banner */

  position: relative;
  background: "white";
  z-index: 1;
  height: 5rem;
  display: inline-flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: auto;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }

  .logo {
    position: relative;
    max-width: 100px;
    max-height: 60px;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: inline-flex;
      grid-template-columns: auto 1fr;
      gap: 0 3rem;
      grid-gap: 0 10rem;
      align-items: center;
      justify-content: normal;
      padding: 0rem 5rem;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }

    button {
      color: var(--clr-black);
      background: transparent;
      border: transparent;
      // font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 500;
      font-family: "Times New Roman", Times, serif;
      padding: 5px 40px;
      width: 100%;
      // text-transform: capitalize;
      position: relative;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  }
  /* Navbar sonradan eklenen */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0rem 0rem;
    background: var(--clr-white);
    z-index: 1;
  }
  // .nav-header {
  //   display: flex;
  //   justify-content: space-between;
  // }
  // .nav-btn {
  //   background: transparent;
  //   border: none;
  //   cursor: pointer;
  //   outline: none;
  // }
  // .nav-icon {
  //   font-size: 1.5rem;
  //   color: var(--primaryColor);
  // }
  // .nav-links {
  //   height: 0;
  //   overflow: hidden;
  //   transition: var(--mainTransition);
  //   list-style-type: none;
  // }
  // .nav-links a {
  //   display: block;
  //   text-decoration: none;
  //   padding: 1rem 0;
  //   color: var(--mainBlack);
  //   transition: var(--mainTransition);
  //   text-align: center;
  //   font-size: 1rem;
  //   font-weight: 600;
  //   letter-spacing: var(--mainSpacing);
  // }
  // .nav-links a:hover {
  //   color: var(--primaryColor);
  // }

  // .show-nav {
  //   height: 100px;
  // }
  // @media screen and (min-width: 768px) {
  //   .nav-btn {
  //     display: none;
  //   }
  //   .nav-center {
  //     max-width: 1170px;
  //     margin: 0 auto;
  //     display: flex;
  //   }
  //   .nav-links {
  //     height: auto;
  //     display: flex;
  //     margin-left: 4rem;
  //   }
  //   .nav-links a {
  //     margin: 0 1rem;
  //     padding: 0.5rem 0;
  //   }
  // }
  /* end of navbar */
`

export default Navbar
