import React from "react";

function Nav(props) {
  return (
    <ul>
      <li>
        <a
          href="#"
          onClick={() => {
            props.setMode("create");
          }}
        >
          New
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => {
            for (let i = 0; i < props.contents.length; i++) {
              if (props.contents[i].id === props.mode) {
                props.setUpdateTarget({
                  id: props.contents[i].id,
                  title: props.contents[i].title,
                  content: props.contents[i].content,
                });
                props.setMode("update");
                break;
              }
            }
          }}
        >
          Update
        </a>
      </li>
      <li>
        <a
          href="#"
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
