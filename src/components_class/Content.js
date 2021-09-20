import React from "react";
import "./Content.css";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: null,
      content: null,
    };
  }

  render() {
    if (this.props.mode === "welcome") {
      return <h1>Welcome WEB!</h1>;
    }
    if (this.props.mode === "read") {
      for (let i = 0; i < this.props.contents.length; i++) {
        if (this.props.present === this.props.contents[i].id) {
          return <h1>{this.props.contents[i].content}</h1>;
        }
      }
    }
    if (this.props.mode === "create") {
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
              this.props.addContent(t, c);
              this.props.onChangeMode("welcome");
            }}
          ></input>
        </form>
      );
    }
    if (this.props.mode === "update") {
      return (
        <form>
          <input name="title" value={this.state.title} type="text"></input>
          <textarea name="content"></textarea>
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const t = e.target.form[0].value;
              const c = e.target.form[1].value;
              this.props.updateContent(t, c, this.props.present);
              this.props.onChangeMode("welcome");
            }}
          ></input>
        </form>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Content;
