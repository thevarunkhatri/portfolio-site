import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import "../styles/main.scss"

import PortfolioMainItem from "./portfolio-main-item"
import PortfolioExtraItem from "./portfolio-extra-item"
import PortfolioNav from "./portfolio-nav"

const Main = props => {
    const portfolioData = useStaticQuery(graphql`
        query portfolioQuery {
            allSanityPortfolioMainItem(sort: {fields: placement, order: ASC}) {
                edges {
                    node {
                        name
                        description
                        tags
                        type
                        id
                        bannerImage {
                            asset {
                              fluid {
                                ...GatsbySanityImageFluid
                              }
                            }
                        }
                    }
                }
            }
            allSanityPortfolioExtraItem(sort: {fields: placement, order: ASC}) {
                edges {
                    node {
                        name
                        id
                        image {
                            asset {
                                fluid {
                                    ...GatsbySanityImageFluid
                                }
                            }
                        }
                    }
                }
            }
        }       
    `)

    const portfolioMainArray = portfolioData.allSanityPortfolioMainItem.edges;
    const portfolioExtraArray = portfolioData.allSanityPortfolioExtraItem.edges;
  return (
    <main className="homeMain">
        <div className="container">
            <div className="portfolio-main">
                <PortfolioNav/>
                <div className="portfolio-main-items">
                    {
                        portfolioMainArray.map(edge => 
                            (
                                <PortfolioMainItem
                                    key={edge.node.id} 
                                    name={edge.node.name}
                                    description={edge.node.description}
                                    tags={edge.node.tags}
                                    type={edge.node.type}
                                    image={edge.node.bannerImage.asset.fluid}
                                />
                            )
                        )
                    }
                </div>
            </div>
            <div className="portfolio-extra">
                <div className="portfolio-extra-header">
                    <h2>Extras</h2>
                    <p>Web Development, Graphic Design & More</p>
                </div>
                <div className="three-grid">
                    {
                        portfolioExtraArray.map(edge => 
                            (
                                <PortfolioExtraItem 
                                    image={edge.node.image.asset.fluid}
                                    key={edge.node.id} 
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main
