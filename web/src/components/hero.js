import React from "react"
import TextLoop from "react-text-loop";
import "../styles/hero.scss"

const Hero = props => {

  return (
    <div className="hero" id="hero">
        <div className="container">
            <div className="tagline">
                <TextLoop 
                  interval={2500} 
                  springConfig={{ stiffness: 220, damping: 18 }} 
                  className="changingTag">
                    <h1>Sparking delight in user through</h1>
                    <h1>Synthesizing data to create</h1>
                    <h1>Prototyping with code to test</h1>
                    <h1>Referencing game design to inspire</h1>
                </TextLoop>
                <h1>fluent experiences rooted in</h1>
                <h1>human-centered design</h1>
            </div>
            <p>I'm a UX designer with a passion for development, systems design, and information architecture.</p>
        </div>
    </div>
  )
}

export default Hero
