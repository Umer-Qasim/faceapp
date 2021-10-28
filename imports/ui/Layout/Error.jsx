import React from "react";

export const Error = (props) => {
  if (props.error)
    window.setTimeout(() => {
      props.setError({ error: null });
    }, 5000);
  return props.error ? <h3 className="error">{props.error.reason}</h3> : null;
};
