import React from "react"
import {Link} from "gatsby";
import Img from "gatsby-image"

import "../styles/portfolioMainItem.scss"

const portfolioMainItem = (props) => {
  return (
    <div className="portfolioMainItem" id={props.anchor}>
        <div class="projectInfo">
            <p className="projectType">{props.type}</p>
            <h2 className="projectName">{props.name}</h2>
            <p className="projectDescription">{props.description}</p>
            <p className="projectTags">
              {
                props.tags.join(", ")
              }
            </p>

            <Link className="learnMore">Learn More</Link>
        </div>
        <div class="projectImage">
            <Img fluid={props.image}/>
        </div>
    </div>
  )
}

export default portfolioMainItem;