import React from "react";
import UserContext from "./userContext";
import withCounter from "./withCounter";

class HoverCounter extends React.Component {
  render() {
    return (
      <h2 onMouseOver={this.props.icreamentCount}>
        {this.context} Hovered {this.props.count} times
      </h2>
    );
  }
}
HoverCounter.contextType = UserContext; //way2 of using context is contextType
export default withCounter(HoverCounter, 5);
