import React from "react";
import ReactDOM from "react-dom/client"


const Heading = () => (<h1>Hyy this is me Sobhan</h1>);

const title = (<h1>Here I am showing my react learining journey</h1>);

const FirstComponent = () => (
  <div id="container">
    <Heading/>
    {title}
    <h1>Namaste react learning Journey🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FirstComponent/>);