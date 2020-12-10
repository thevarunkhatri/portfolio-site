import React from "react"
import {Link} from "gatsby";
import Img from "gatsby-image"

import Arrow from "../assets/arrow.svg";

import "../styles/portfolioMainItem.scss"

const portfolioMainItem = (props) => {
  return (
    <Link to="/">
      <div className="portfolioMainItem" id={props.name}>
          <div class="projectInfo">
              <p className="projectType">{props.type}</p>
              <h2 className="projectName">{props.name}</h2>
              <p className="projectDescription">{props.description}</p>
              <p className="projectTags">
                {
                  props.tags.join(", ")
                }
              </p>

              <div className="learnMore">Learn More <Arrow/></div>
          </div>
          <div class="projectImage">
              {/*<Img fluid={props.image}/>*/}
          </div>
      </div>
    </Link>
  )
}

export default portfolioMainItem;