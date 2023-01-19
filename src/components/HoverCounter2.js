import React from "react";

class HoverCounter2 extends React.Component {
  render() {
    const { count, incrementCounter } = this.props;
    return <button onClick={incrementCounter}>Hover {count} times</button>;
  }
}

export default HoverCounter2;
