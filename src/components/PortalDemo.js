import React from "react";
import ReactDOM from "react-dom";

export default class PortalDemo extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <h3>Portal Demo</h3>,
      document.getElementById("portal-root")
    );
  }
}
