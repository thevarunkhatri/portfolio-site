import React from "react"

import FooterBlog from "./footer-blog";

import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Dribbble from "../assets/dribbble.svg";

import "../styles/footer.scss";

const Footer = props => {
  return (
    <footer>
        <div class="container two-grid">
            <div class="footer-section">
                <h1 class="footerHeader">thevarunkhatri</h1>
                <p class="aboutPara">I'm a interaction designer from the Greater Toronto Area, Canada who is currently completing his undergraduate in user experience (UX) design at the Savannah College of Art and Design.</p>
                <p  class="aboutPara">I am currently looking for UX internships for the Summer and Fall of 2021.</p>
                <p class="aboutPara">To learn a little more about me, click /here.</p>

                <h2 class="socialHeader">Get in touch</h2>
                <div class="social-media">
                    <Linkedin/>
                    <Dribbble/>
                    <Github/>
                    <Instagram/>
                </div>

                <div class="copyright-container">
                    <div class="copyright">
                        <p>Website hand-coded by yours truly.</p>
                        <p>(c) Varun Khatri 2020</p>
                    </div>
                    <p>Icons made by Freepik from www.flaticon.com</p>
                </div>
            </div>
            <div class="footer-section">
                <h1 class="footerHeader">Latest Blog Posts</h1>
                <FooterBlog title="Defining Game UX - The Next Level" description="A step-by-step look into how I created two gorgeous speakers that not only serve as tables but as a stereo system for my home theatre setup" link="https://medium.com/scadflux/defining-game-ux-ab3c97092b28"/>
            </div>
        </div>
    </footer>
  )
}

export default Footer