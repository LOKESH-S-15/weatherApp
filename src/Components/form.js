import React from "react";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.ok);
    return (
      <div>
        <h1>heloo from form </h1>
      </div>
    );
  }
}
