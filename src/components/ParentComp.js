import React from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export default class ParentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "InitialName"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "InitialName"
      });
    }, 2000);
  }
  render() {
    console.log("****Parent comp render****");
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}
