import React from "react";

class Title extends React.Component {
  render() {
    return (
      <h1
        onClick={() => {
          this.props.onChangeMode("welcome");
        }}
      >
        <a href="#!">Web with class component!</a>
      </h1>
    );
  }
}

export default Title;
