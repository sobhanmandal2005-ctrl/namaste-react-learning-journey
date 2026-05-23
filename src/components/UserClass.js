import React from "react";
import { useState } from "react";

class UserClass extends React.Component {

 constructor(props) {
   super(props);


      this.state = {
        userInfo: {
          name: "Dummy Name",
          location: "Dummy Location",
          occupation: "As",
          bio: "default bio",
          email: "sobhanmandal2005@gmail.com",
        }
      }

    console.log("Constructor");

 }

 async componentDidMount() {
   
  const data = await fetch("https://api.github.com/users/sobhanmandal2005-ctrl");
  const json = await data.json();
  console.log(json);


  this.setState({
    userInfo: json,
  });


  console.log("Component Did Mount");
  
 } 

 componentWillUnmount() {
  console.log("Component Will Unmount");
 }

  render() {

  const {name, location, bio} = this.state.userInfo;

    return (
      <div className="userClass-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Occupation: Student</h3>
        <h3>Bio: {bio}</h3>
        <h4>Email: sobhanmandal2005@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;