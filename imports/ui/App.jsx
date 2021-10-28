import React, { useState } from "react";
import { Footer } from "./Layout/Footer.jsx";
import { Feed } from "./Posts/Feed.jsx";
import { LoginForm } from "./Auth/LoginForm.jsx";
import { Nav } from "./Layout/Nav.jsx";
import { WithFixedHeight } from "./Layout/WithFixedHeight.jsx";
import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection } from "../api/Posts";
import { Error } from "./Layout/Error.jsx";

export const App = () => {
  const [loggedIn, setLoggedInState] = useState(false);
  const [error, setError] = useState({ error: null });

  const posts = useTracker(() => {
    return PostsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  });

  const setLoggedIn = () => {
    setLoggedInState(true);
  };

  const setLoggedOut = () => {
    setLoggedInState(false);
  };

  return (
    <div>
      <Nav
        username={loggedIn ? Meteor.user().username : ""}
        togglelogin={setLoggedOut}
        loggedIn={loggedIn}
      />
      <Error error={error.error} setError={setError} />
      <WithFixedHeight>
        {loggedIn ? (
          <Feed posts={posts} />
        ) : (
          <LoginForm setError={setError} loggedIn={setLoggedIn} />
        )}
      </WithFixedHeight>
      <Footer />
    </div>
  );
};
