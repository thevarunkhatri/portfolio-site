import React from "react"
import "../styles/hero.scss"

const Hero = props => {

  return (
    <div className="hero">
        <div className="container">
            <div className="tagline">
                <div className="changingTag">
                    <h1>Sparking delight in user through</h1>
                </div>
                <h1>fluent experiences rooted in</h1>
                <h1>human-centered design</h1>
            </div>
            <p>I'm a UX designer with a passion for development, systems design, and information architecture.</p>
        </div>
    </div>
  )
}

export default Hero
