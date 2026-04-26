import React from "react";
import ReactDOM from "react-dom/client"




const messege = "Namaste React🚀";

const parent = React.createElement("div", {id: "parent"},[
   React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {id: "heading_1"}, messege),
    React.createElement("h2", {id: "heading_2"}, "this is h2 tag")
  ]),
   React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {id: "heading_1"}, "this is h1 tag"),
    React.createElement("h2", {id: "heading_2"}, "this is h2 tag")
  ]),
   React.createElement("div", {id: "child3"}, [
    React.createElement("p", {id: "para1"}, "My name is sobhan"),
    React.createElement("button", {className: "button1"}, "Bomb")
]),

]);

//const heading = React.createElement

//("h1", {}, "Hello World from React🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);