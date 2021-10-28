import React from "react";

export const FormToggle = (props) => {
  function toggle() {
    props.toggleForm();
  }

  return (
    <div className="form-toggle">
      <button
        className={props.login ? "active-toggle" : "nonactive-toggle"}
        onClick={toggle}
      >
        log in
      </button>
      <button
        onClick={toggle}
        className={props.login ? "nonactive-toggle" : "active-toggle"}
      >
        sign up
      </button>
    </div>
  );
};
