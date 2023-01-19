import React from "react";
import { UserConsumer } from "./userContext";
import withCounter from "./withCounter";

class ClickCounter extends React.Component {
  render() {
    return (
      //way1 of using context is using context Consumer
      <UserConsumer>
        {(username) => {
          return (
            <button
              onClick={this.props.icreamentCount}
              style={this.props.style}
            >
              {username} Clicked {this.props.count} times
            </button>
          );
        }}
      </UserConsumer>
    );
  }
}

export default withCounter(ClickCounter);
