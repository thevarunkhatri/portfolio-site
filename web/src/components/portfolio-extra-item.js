import React from "react"
import {Link} from "gatsby";
import Img from "gatsby-image"

const portfolioExtraItem = (props) => {
  return (
    <div className="portfolioExtraItem">
        <Img fluid={props.image}/>
    </div>
  )
}

export default portfolioExtraItem;