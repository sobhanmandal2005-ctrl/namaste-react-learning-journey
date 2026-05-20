import React from "react";
import { useState } from "react";

class UserClass extends React.Component {

 constructor(props) {
   super(props);


      this.state = {
        count: 0,
        count2: 1,
      }
 }


  render() {
    return (
      <div className="userClass-card">
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
            count2: this.state.count2 * 2,
          })
        }}>CountClick
        </button>
        
        <h3>Count: {this.state.count}</h3>
        <h3>Count2: {this.state.count2}</h3>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Kolkata</h3>
        <h3>Occupation: Software Engineer</h3>
        <h4>Email: sobhanmandal2005@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;