import React from "react"

import "../styles/footerBlog.scss"

const FooterBlog = props => {

  return (
    <a className="footerBlogPost" href={props.link}>
      <h1 className="blogTitle">/ {props.title}</h1>
      <p className="blogDescription">{props.description}</p>
    </a>
  )
}

export default FooterBlog
