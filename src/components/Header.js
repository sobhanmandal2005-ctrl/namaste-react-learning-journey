import {HEADER_LOGO} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

const [btnReactName, setBtnReactName] = useState("Login");

const onlineStatus = useOnlineStatus();

  return (
    <div  className="header">
      <div className="logo-container">
       <img className="logo" src={HEADER_LOGO} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="home-link">
            <Link to="/">Home</Link>
          </li>
          <li className="contact-link">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="about-link">
            <Link to="/about">About us</Link>
          </li >
          <li className="grocery-link">
            <Link to="/grocery">Grocery</Link>
          </li >
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