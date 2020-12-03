import React from "react"

import { usePortfolioData } from "../hooks/portfolioData"

import "../styles/main.scss"

import PortfolioMainItem from "./portfolio-main-item"

const Main = props => {
    const portfolioData = usePortfolioData();
    console.log(portfolioData);

    const portfolioMainArray = portfolioData.allSanityPortfolioMainItem.edges;

  return (
    <main>
        <div className="container">
            <div className="portfolio-main">
                <div className="portfolio-nav">
                    <h2>Work</h2>
                    <ul>
                        <li>FireShield</li>
                        <li>GoodReads</li>
                        <li>Halo</li>
                    </ul>
                </div>
                <div className="portfolio-main-items">
                    {
                        portfolioMainArray.map(edge => 
                            (
                                <PortfolioMainItem 
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
                    
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main
