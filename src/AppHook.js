import React, { useState } from "react";
import Title from "./component_hooks/Title";
import Contents from "./component_hooks/Contents";
import Nav from "./component_hooks/Nav";
import Content from "./component_hooks/Content";
import "./AppHook.css";

function AppHook() {
  const [present, setPresent] = useState({
    id: null,
    title: null,
    content: null,
  });
  const [nextId, setNextId] = useState(3);
  const [mode, setMode] = useState("welcome");
  const [contents, setContents] = useState([
    {
      id: 0,
      title: "html",
      content: "This is html!",
    },
    {
      id: 1,
      title: "css",
      content: "This is css!",
    },
    {
      id: 2,
      title: "js",
      content: "This is js!",
    },
  ]);

  function addContent(_id, _title, _content) {
    const tmp = contents.concat({
      id: _id,
      title: _title,
      content: _content,
    });
    setContents(tmp);
  }

  function deleteContent(_id) {
    let tmp = Array.from(contents);
    for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === _id) {
        tmp.splice(i, 1);
        break;
      }
    }
    setContents(tmp);
  }

  function updateContent(_id, _title, _content) {
    let tmp = Array.from(contents);
    for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === _id) {
        tmp[i].id = _id;
        tmp[i].title = _title;
        tmp[i].content = _content;
        break;
      }
    }
    setContents(tmp);
  }

  return (
    <div className="App_hook">
      <Title setMode={setMode}></Title>
      <Contents
        contents={contents}
        setMode={setMode}
        present={present}
        setPresent={setPresent}
      ></Contents>
      <Nav
        present={present}
        contents={contents}
        setMode={setMode}
        mode={mode}
        deleteContent={deleteContent}
      ></Nav>
      <Content
        setMode={setMode}
        present={present}
        mode={mode}
        contents={contents}
        addContent={addContent}
        nextId={nextId}
        setNextId={setNextId}
        updateContent={updateContent}
      ></Content>
    </div>
  );
}

export default AppHook;
