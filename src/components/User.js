import { useState } from "react";

const User = (props) => {

  const [count, setCount] = useState(0);

 const{name} = props;

  return (
    <div className="user-card">
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Name: {name}</h2>
      <h3>Location: Kolkata</h3>
      <h3>Occupation: Software Engineer</h3>
      <h4>Email: sobhanmandal2005@gmail.com</h4>
    </div>
  )
};

export default User;
