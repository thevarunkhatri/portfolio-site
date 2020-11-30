import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"

import "normalize.css"
import "../styles/layout.scss"

const Layout = props => {

  return (
    <div id="layout">
      <SEO title={props.title}/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
