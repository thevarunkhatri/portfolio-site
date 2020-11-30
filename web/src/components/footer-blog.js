import React from "react"

import "../styles/footerBlog.scss"

const FooterBlog = props => {

  return (
    <a class="footerBlogPost" href={props.link}>
      <h1 class="blogTitle">/ {props.title}</h1>
      <p class="blogDescription">{props.description}</p>
    </a>
  )
}

export default FooterBlog
