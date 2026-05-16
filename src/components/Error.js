import {useRouteError} from "react-router-dom";

const Error = () => {

  const error = useRouteError();
  console.error(error);
  
  return (
    <div>
      <h1>Oops!</h1>
      <p>An error occurred.</p>
    </div>
  );
};

export default Error;