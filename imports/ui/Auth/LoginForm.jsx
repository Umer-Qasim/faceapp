import { Meteor } from "meteor/meteor";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { FormToggle } from "./FormToggle";
import React, { useState } from "react";

export const LoginForm = (props) => {
  const [login, setLogin] = useState(true);

  const toggleForm = () => {
    setLogin((state) => !state);
  };

  return (
    <div className="form-modal">
      <FormToggle toggleForm={toggleForm} login={login} />
      {login ? (
        <Login setLoggedIn={props.loggedIn} setError={props.setError} />
      ) : (
        <SignUp setError={props.setError} setLoggedIn={props.loggedIn} />
      )}
    </div>
  );
};
