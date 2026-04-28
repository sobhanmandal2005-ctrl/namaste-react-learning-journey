import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
  return (
    <div id="header">
      <div className="logo-container">
        <img className="res-logo" src="magnific.com/free-vector/gradient-restaurant-logo-design_143804994.htm#fromView=keyword&page=1&position=5&uuid=5c813bbf-359e-4b0f-84db-05ce2fa8f414&query=Restaurant+logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div></div>
  );
};
const AppLayout = () => {
  return (
    <div id="container">
     <Header/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);