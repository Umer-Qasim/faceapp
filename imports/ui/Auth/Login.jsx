import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    Meteor.loginWithPassword(email, password, (error) => {
      if (!error) {
        props.setLoggedIn();
        props.setError({ error: null });
      } else {
        props.setError({ error: error });
      }
    });
    e.preventDefault();
  };

  return (
    <div id="login-form">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email or username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <button type="submit" className="btn login">
          login
        </button>
      </form>
    </div>
  );
};
