import React, {useState, useEffect} from "react"
import {Link} from "gatsby";

const PortfolioNav = (props) => {
  /*
  const [sticky, setSticky] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    };
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

    var item1 = document.querySelector('#FireShield');
    var item1Bounding = item1.getBoundingClientRect();

    var item2 = document.querySelector('#GoodReads');
    var item2Bounding = item2.getBoundingClientRect();

    var item3 = document.querySelector('#Halo');
    var item3Bounding = item3.getBoundingClientRect();
    
    if (item3Bounding.top < 175) {
      if (highlightedItem !== 3){
        setHighlightedItem(3);
      }
      console.log("set as 3");
    } else if (item2Bounding.top < 175) {
      if (highlightedItem !== 2){
        setHighlightedItem(2);
      }
      console.log("set as 2");
    } else {
      if (highlightedItem !== 1){
        setHighlightedItem(1);
      }
      console.log("set as 1");
    }
  }
  */
  return (
    <div className="portfolio-nav">
        <h2>Work</h2>
        <ul>
            <li>GoodReads</li>
            <li>FireShield</li>
            <li>Halo</li>
        </ul>
    </div>
  )
}

export default PortfolioNav;