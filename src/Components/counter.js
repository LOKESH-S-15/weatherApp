import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleEvent = (e) => {
    this.setState(function (prevstate) {
      return {
        count: e + prevstate.count
      };
    });
    console.log(e);
  };
  render() {
    console.log(this.props.ok);
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleEvent(1 * this.props.ok)}>+</button>
        <button onClick={() => this.handleEvent(-1)}>-</button>
      </div>
    );
  }
}
