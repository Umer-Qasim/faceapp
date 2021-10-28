import React from "react";

export const Nav = (props) => {
  return (
    <nav className="nav">
      <h1 className="nav-logo">Faceapp</h1>
      {props.loggedIn ? (
        <React.Fragment>
          <h6 className="nav-username">{"@" + props.username}</h6>
          <button
            className="nav-logout"
            type="button"
            onClick={props.togglelogin}
          >
            Logout
          </button>
        </React.Fragment>
      ) : null}
    </nav>
  );
};
