import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import "../styles/nav.scss"

const Nav = () => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
        if(!navSticky){
          setNavSticky(true);
        }
    } else {
        if(navSticky){
          setNavSticky(false);
        }
    }
  }

  return (
    <nav className={navSticky ? 'fixed' : ''}>
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
