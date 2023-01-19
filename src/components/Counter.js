import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  icreamentCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <>
        {this.props.name}
        <br />
        {this.props.render(this.state.count, this.icreamentCount)}
        <hr />
      </>
    );
  }
}
