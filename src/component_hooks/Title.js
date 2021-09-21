import React from "react";

function Title(props) {
  return (
    <h1>
      <a
        href="#!"
        onClick={() => {
          props.setMode("welcome");
        }}
      >
        WEB with fuction component!
      </a>
    </h1>
  );
}

export default Title;
