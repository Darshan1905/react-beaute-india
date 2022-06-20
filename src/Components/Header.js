import React from 'react';


import { Link } from "react-router-dom";


 function Header() {
  return (
    <>
              <div className="navhead">
      <div className="logoo">
      <Link to="/"><h1> BEAUT INDIA</h1></Link>
      </div>
      <ul className="navhead-links" id="myDIV">
        <li>
          <div className="wrapper">
            <div className="container searchcontainer">
              <div className="search_wrap search_wrap_1">
                <div className="search_box">
                  <input type="text" className="input-search" placeholder="SEARCH" />
                  <div className="btn btn_common"><Link to="">
                  <img src={process.env.PUBLIC_URL+"pictures/Group 1.svg"} className="search-img" alt="" />
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
        
        <Link to="/productdetail">
          <img src={process.env.PUBLIC_URL+"pictures/noun-love-4726271.svg"} className="heart-img" alt="" />
         </Link>
          
        </li>
        <li>
        <Link to="/cart">
          <img src={process.env.PUBLIC_URL+"pictures/Path 39.svg"} className="cart-img" alt="" />
          </Link>
        </li>
        <li className="nav-item dropdown user">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Paras
          </a>
        </li>
      </ul>

      <div className="hamburger" onclick="myFunction()">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <script src='../main.js'></script>
   
    </>
  )
}

export default Header;