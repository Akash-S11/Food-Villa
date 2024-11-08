import {LOGO_URL} from "./constants";
import { useState } from "react";
import {Link} from "react-router-dom";

const loggedInUser = () =>{
  return false;
};

//1. Header Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <div className="header">
        <div>
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
              <li> <Link to = "/">Home</Link> </li>
              <li> <Link to = "/about">About</Link> </li>
              <li> <Link to = "/contact" >Contact</Link> </li>
              <li>Cart</li>
            </ul>
        </div>
        <Link to = "/login">
        {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}> logout </button> :
         <button onClick={()=> setIsLoggedIn(true)}> login </button>}
         </Link>
    </div>
}

export default Header;
