import React from "react";

class Contents extends React.Component {
  render() {
    let result = [];
    for (let i = 0; i < this.props.contents.length; i++) {
      result.push(
        <li key={this.props.contents.id}>
          <a
            key={this.props.contents.id}
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode("read");
              this.props.setPresent(this.props.contents[i].id);
            }}
          >
            {this.props.contents[i].title}
          </a>
        </li>
      );
    }
    return <ul key="contents">{result}</ul>;
  }
}

export default Contents;
