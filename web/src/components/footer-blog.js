import React from "react"

import "../styles/footerBlog.scss"

const FooterBlog = props => {

  return (
    <div className="footerBlogPost">
      <a href={props.link} target="_blank">
        <h1 className="blogTitle">/ {props.title}</h1>
        <p className="blogDescription">{props.description}</p>
      </a>
    </div>
  )
}

export default FooterBlog
