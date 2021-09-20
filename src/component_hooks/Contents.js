import React from "react";

function Contents(props) {
  return (
    <ul>
      {props.contents.map((content) => (
        <li key={content.id}>
          <a
            href="#"
            key={content.id}
            onClick={() => {
              props.setMode(content.id);
            }}
          >
            {content.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Contents;
