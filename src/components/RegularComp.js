import React from "react";

export default class RegularComp extends React.Component {
  render() {
    console.log("Regular comp render");
    return <div>Regular Component {this.props.name}</div>;
  }
}
