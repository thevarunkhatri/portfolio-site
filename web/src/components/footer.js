import React from "react"

import FooterBlog from "./footer-blog";
import { useFooterData } from "../hooks/footerData"

import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Dribbble from "../assets/dribbble.svg";

import "../styles/footer.scss";

const Footer = props => {

    const footerData = useFooterData();
    const blogPostArray = footerData.allSanityBlogPost.edges;

    return (
        <footer>
            <div className="container two-grid">
                <div className="footer-section">
                    <h1 className="footerHeader">thevarunkhatri</h1>
                    <p className="aboutPara">I'm a interaction designer from the Greater Toronto Area, Canada who is currently completing his undergraduate in user experience (UX) design at the Savannah College of Art and Design.</p>
                    <p className="aboutPara">I am currently looking for UX internships for the Summer and Fall of 2021.</p>
                    <p className="aboutPara">To learn a little more about me, click /here.</p>

                    <h2 className="socialHeader">Get in touch</h2>
                    <div className="social-media">
                        <Linkedin/>
                        <Dribbble/>
                        <Github/>
                        <Instagram/>
                    </div>

                    <div className="copyright-container">
                        <div className="copyright">
                            <p>Website hand-coded by yours truly.</p>
                            <p>(c) Varun Khatri 2020</p>
                        </div>
                        <p>Icons made by Freepik from <a>www.flaticon.com</a></p>
                    </div>
                </div>
                <div className="footer-section">
                    <h1 className="footerHeader">Latest Blog Posts</h1>
                    {
                        blogPostArray.map(edge => 
                            (
                                <FooterBlog 
                                    title={edge.node.title}
                                    description={edge.node.description}
                                    link={edge.node.link}/>
                            )
                        )
                    }
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer