import React from "react";

function Nav(props) {
  return (
    <ul>
      <li key="new">
        <a
          key="new"
          href="#!"
          onClick={() => {
            props.setMode("create");
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
            props.setMode("update");
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
            props.deleteContent(props.mode);
          }}
        >
          Delete
        </a>
      </li>
    </ul>
  );
}

export default Nav;
