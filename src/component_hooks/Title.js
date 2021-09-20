import React from "react";

function Title(props) {
  return (
    <h1>
      <a
        href="#"
        onClick={() => {
          props.setMode("welcome");
        }}
      >
        WEB_with_fuction
      </a>
    </h1>
  );
}

export default Title;
