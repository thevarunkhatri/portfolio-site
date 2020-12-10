import React from "react"

import { usePortfolioData } from "../hooks/portfolioData"

import "../styles/main.scss"

import PortfolioMainItem from "./portfolio-main-item"
import PortfolioExtraItem from "./portfolio-extra-item"
import PortfolioNav from "./portfolio-nav"

const Main = props => {
    const portfolioData = usePortfolioData();
    console.log(portfolioData);

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
                                    name={edge.node.name}
                                    description={edge.node.description}
                                    tags={edge.node.tags}
                                    type={edge.node.type}
                                    //image={edge.node.bannerImage.asset.fluid}
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
                                    //image={edge.node.image.asset.fluid}
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
