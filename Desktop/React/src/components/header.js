import {LOGO_URL} from "./constants";
import { useState } from "react";

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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}> logout </button> :
         <button onClick={()=> setIsLoggedIn(true)}> login </button>}
    </div>
}

export default Header;
