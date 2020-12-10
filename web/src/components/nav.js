import React from "react"
import { Link } from 'gatsby'
import "../styles/nav.scss"

import Resume from "../assets/resume.pdf";

const Nav = props => {
  /*
  const [navSticky, setNavSticky] = useState(false);
  const [navWhite, setNavWhite] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    };
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

    var elem = document.querySelector(props.scrollPoint);
    var bounding = elem.getBoundingClientRect();
    if (bounding.bottom < 40) {
      if(!navWhite){
        setNavWhite(true);
      }
    } else {
      if(navWhite){
        setNavWhite(false);
      }
    }
  }

  const navStyle = () => {
    let navStyles;

    if (navSticky) {
      if (navWhite) {
        navStyles = "fixed white"
      } else {
        navStyles = "fixed"
      }
    }

    return navStyles;
  }
  */
  return (
    <nav>
        <div className="container">
            <div className="home">
                <Link to="/">/thevarunkhatri</Link>
            </div>
            <ul className="nav-items">
                <li><a href="https://medium.com/@thevarunkhatri" target="_blank" rel="noreferrer" >/write</a></li>
                <li><Link to="/about">/about</Link></li>
                <li><a href={Resume} target="_blank" rel="noreferrer">/resume</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
