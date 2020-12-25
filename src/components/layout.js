/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  return (
    <>
      <Navbar />
      {isSidebarOpen && <Sidebar />}

      {children}
      <Footer />
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div class="elfsight-app-83d0211c-86a8-4b23-876e-de20c91e6b52"></div>
    </>
  )
}

export default Layout
