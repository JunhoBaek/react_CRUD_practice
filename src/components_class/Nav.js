import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li key="new">
          <a
            key="new"
            href="#!"
            onClick={() => {
              this.props.onChangeMode("create");
            }}
          >
            New
          </a>
        </li>
        <li key="update">
          <a
            key="update"
            href="#!"
            onClick={() => {
              this.props.onChangeMode("update");
            }}
          >
            Update
          </a>
        </li>
        <li key="delete">
          <a
            key="delete"
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              this.props.deleteContent(this.props.present);
              this.props.onChangeMode("welcome");
            }}
          >
            Delete
          </a>
        </li>
      </ul>
    );
  }
}

export default Nav;
