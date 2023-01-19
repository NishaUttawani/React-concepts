import React from "react";

export default class ChildButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.handleClick}>Click Me (from Child)</button>
    );
  }
}
