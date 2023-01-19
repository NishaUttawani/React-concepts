import React from "react";

class ClickCounter2 extends React.Component {
  render() {
    const { count, incrementCounter } = this.props;
    return <button onClick={incrementCounter}>Click {count} times</button>;
  }
}

export default ClickCounter2;
