import React from "react";

const withCounter = (WrappedComponent, icreamentBy) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    icreamentCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + (icreamentBy || 1) };
      });
    };

    render() {
      let newProps = { ...this.props };
      if (this.props.theme === "dark") {
        newProps = {
          ...newProps,
          style: { background: "black", color: "white" }
        };
      }
      return (
        <WrappedComponent
          count={this.state.count}
          icreamentCount={this.icreamentCount}
          {...newProps}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
