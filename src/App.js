import React from "react";
import Title from "./components_class/Title";
import Contents from "./components_class/Contents";
import Nav from "./components_class/Nav";
import Content from "./components_class/Content";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      present: null,
      next_id: 3,
      mode: "welcome",
      contents: [
        {
          id: 0,
          title: "html",
          content: "this is html!",
        },
        {
          id: 1,
          title: "css",
          content: "this is css!",
        },
        {
          id: 2,
          title: "js",
          content: "this is js!",
        },
      ],
    };
  }

  setPresent(_id) {
    this.setState({
      present: _id,
    });
  }

  changeMode(_mode) {
    this.setState({
      mode: _mode,
    });
  }

  addContent(_title, _content) {
    const tmp = this.state.contents.concat({
      id: this.state.next_id,
      title: _title,
      content: _content,
    });
    this.setState({
      next_id: this.state.next_id + 1,
      contents: tmp,
    });
  }

  deleteContent(_id) {
    for (let i = 0; i < this.state.contents.length; i++) {
      if (_id === this.state.contents[i].id) {
        this.state.contents.splice(i, 1);
        break;
      }
    }
    this.setState({
      contents: this.state.contents,
    });
  }

  updateContent(_title, _content, _id) {
    let tmp = this.state.contents.slice();
    for (let i = 0; i < tmp.length; i++) {
      if (_id === tmp[i].id) {
        tmp[i].title = _title;
        tmp[i].content = _content;
        this.setState({
          contents: tmp,
        });
        break;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Title onChangeMode={this.changeMode.bind(this)}></Title>
        <Contents
          contents={this.state.contents}
          onChangeMode={this.changeMode.bind(this)}
          setPresent={this.setPresent.bind(this)}
        ></Contents>
        <Nav
          present={this.state.present}
          mode={this.state.mode}
          onChangeMode={this.changeMode.bind(this)}
          deleteContent={this.deleteContent.bind(this)}
        ></Nav>
        <Content
          onChangeMode={this.changeMode.bind(this)}
          present={this.state.present}
          mode={this.state.mode}
          contents={this.state.contents}
          addContent={this.addContent.bind(this)}
          updateContent={this.updateContent.bind(this)}
        ></Content>
      </div>
    );
  }
}

export default App;
