import {HEADER_LOGO} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

const [btnReactName, setBtnReactName] = useState("Login");

const onlineStatus = useOnlineStatus();

  return (
    <div  className="flex justify-between border-solid shadow-lg m-2 p-3 bg-orange-50 rounded-md">
      <div className="logo-container">
       <img className="w-24" src={HEADER_LOGO} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-4">
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md" onClick={() => {
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