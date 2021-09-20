import React, { useState } from "react";

function Content(props) {
  if (props.mode === "welcome") {
    return <h1>Welcome WEB!</h1>;
  }
  if (typeof props.mode === "number") {
    for (let i = 0; i < props.contents.length; i++) {
      if (props.contents[i].id === props.mode) {
        return <h1>{props.contents[i].content}</h1>;
      }
    }
  }
  if (props.mode === "create") {
    return (
      <form>
        <input type="text"></input>
        <textarea></textarea>
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const t = e.target.form[0].value;
            const c = e.target.form[1].value;
            props.addContent(props.nextId, t, c);
            props.setNextId(props.nextId + 1);
          }}
        ></input>
      </form>
    );
  }
  if (props.mode === "update") {
    return (
      <form>
        <input></input>
        <textarea></textarea>
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const t = e.target.form[0].value;
            const c = e.target.form[1].value;
            props.updateContent(props.updateTarget.id, t, c);
          }}
        ></input>
      </form>
    );
  } else {
    return <div></div>;
  }
}

export default Content;
