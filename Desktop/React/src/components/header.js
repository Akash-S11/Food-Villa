import {LOGO_URL} from "./constants";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

//1. Header Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // Navigate to home page after logging out
  };

  const homePage = () => {
    navigate("/");
  };

    return <div className="flex flex-wrap bg-orange-200 shadow-2xl ">
        <div>
            <img onClick= {homePage} className="w-20 p-2 cursor-pointer" src={LOGO_URL}/>
        </div>
        <div >
            <ul className="flex flex-wrap">
              <li className="p-2 m-3 underline"> <Link to = "/">Home</Link> </li>
              <li className="p-2 m-3 underline"> <Link to = "/about">About</Link> </li>
              <li className="p-2 m-3 underline"> <Link to = "/contact" >Contact</Link> </li>
              <li className="p-2 m-3 underline">Cart</li>
              <li className="p-2 m-3 underline"> <Link to = "/instamart">Instamart</Link></li>
            </ul>
        </div>
        <div className="w-20 h-10 px-20 p-2 m-3 flex justify-end ml-auto bg-purple-600 rounded-md shadow-orange-200 text-white justify-self-end" >
        <Link to = "/login">
        {isLoggedIn ? (
          <button onClick={handleLogout}> Logout </button>
        ) :(
        <button  onClick={()=> setIsLoggedIn(true)}> Login </button>
        )}
         </Link>
         </div>
    </div>
}

export default Header;
