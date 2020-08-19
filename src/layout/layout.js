import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'

import "./layout.css"
import Navbar from "../components/Navbar/Navbar"


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  
  h1, h2 ,h3 {
    font-weight: 400;
  }
  
  h3 {
    margin-bottom: 0;
  }
  
  p {
    margin-bottom: 0;
  }
`;


const Layout = ({ children }) => {


  return (
      <>
        <GlobalStyle/>
        <Navbar/>
        <main>{children}</main>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
