import React from "react";

const Loader = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

//If message prop is not passed on Loader component, add a default text
Loader.defaultProps = {
  message: "Loading",
};

export default Loader;
