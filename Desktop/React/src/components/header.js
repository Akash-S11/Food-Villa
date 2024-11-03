import {LOGO_URL} from "./constants";

//1. Header Component
const Header = () => {
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
        {/* {loggedInUser() ? <button> logout </button>: <button> login </button>} */}
    </div>
}//Header

export default Header;


// import { LOGO_URL } from "./constants";
// import { useState } from "react";

// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState("Login");
//   console.log("Header render");

//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img className="logo" src={LOGO_URL} />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
          {/* <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;