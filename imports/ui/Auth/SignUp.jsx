import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userImages = [
    "https://cdn-icons-png.flaticon.com/512/1177/1177568.png",
    "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
    "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    "https://cdn-icons-png.flaticon.com/512/64/64572.png",
  ];

  const formSubmitHandler = (e) => {
    Accounts.createUser(
      {
        username,
        email,
        password,
        profile: {
          url: userImages[Math.floor(Math.random() * userImages.length)],
        },
      },
      (error) => {
        if (!error) {
          props.setLoggedIn();
          props.setError({ error: null });
        } else {
          props.setError({ error: error });
        }
      }
    );
    e.preventDefault();
  };

  return (
    <div id="signup-form">
      <form onSubmit={formSubmitHandler}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          required
        />
        <button type="submit" className="btn signup">
          create account
        </button>
      </form>
    </div>
  );
};
