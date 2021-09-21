import React from "react";

function Contents(props) {
  return (
    <ul key="contents">
      {props.contents.map((content) => (
        <li key={content.id}>
          <a
            key={content.id}
            href="#!"
            onClick={() => {
              props.setMode("read");
              props.setPresent({
                id: content.id,
                title: content.title,
                content: content.content,
              });
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
