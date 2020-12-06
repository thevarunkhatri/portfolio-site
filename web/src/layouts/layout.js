import React from "react"
import SEO from "../components/seo"

import "normalize.css"
import "../styles/layout.scss"

const Layout = props => {

  return (
    <div id="layout">
      <SEO title={props.title}/>
      {props.children}
    </div>
  )
}

export default Layout
