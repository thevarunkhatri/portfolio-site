import React from "react"
import { Link } from 'gatsby'
import "../styles/nav.scss"

const Nav = () => {

  return (
    <nav>
        <div className="container">
            <div className="home">
                <Link to="/">/thevarunkhatri</Link>
            </div>
            <ul className="nav-items">
                <li><a href="https://medium.com/@thevarunkhatri" target="_blank">/write</a></li>
                <li><Link to="/about">/about</Link></li>
                <li><a href="" target="_blank">/resume</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
