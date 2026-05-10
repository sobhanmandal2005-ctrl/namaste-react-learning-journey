import HEADER_LOGO from "../utils/contants";
import {useState} from "react";

const Header = () => {

const [btnReactName, setBtnReactName] = useState("login");

  return (
    <div  className="header">
      <div className="logo-container">
       <img className="logo" src={HEADER_LOGO} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            btnReactName === "Login"? setBtnReactName("Logout") : setBtnReactName("Login");
          }} >
            {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header; 