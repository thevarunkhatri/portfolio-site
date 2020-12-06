import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../layouts/layout"
import Nav from "../components/nav"
import Img from "gatsby-image"

import "../styles/about.scss"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "varun.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data);

  return(
    <Layout title="About">
      <Nav scrollPoint="#aboutImage"/>
      <main className="about">
        <div className="container two-grid">
          <div className="about-image" id="aboutImage">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <div className="about-info">

          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
