import React, {useState, useEffect} from "react"
import {Link} from "gatsby";

const PortfolioNav = (props) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 600) {
        if(!sticky){
          setSticky(true);
        }
    } else {
        if(sticky){
          setSticky(false);
        }
    }
  }

  return (
    <>
        <div className={sticky ? 'fixed portfolio-nav' : 'portfolio-nav'}>
            <h2>Work</h2>
            <ul>
                <li>FireShield</li>
                <li>GoodReads</li>
                <li>Halo</li>
            </ul>
        </div>
        <div className={sticky ? 'show' : 'hide'}>
        </div>
    </>
  )
}

export default PortfolioNav;