import React from "react";
import { useState } from "react";

class UserClass extends React.Component {

 constructor(props) {
   super(props);


      this.state = {
        userInfo: {
          name: "Dummy Name",
          location: "Dummy Location",
          occupation: "Aspiring software dev",
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

  render() {
    return (
      <div className="userClass-card">
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h3>Occupation: {this.state.userInfo.occupation}</h3>
        <h3>Bio: {this.state.userInfo.bio}</h3>
        <h4>Email: {this.state.userInfo.email}</h4>
      </div>
    );
  }
}

export default UserClass;