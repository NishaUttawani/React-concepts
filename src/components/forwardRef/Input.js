import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
      </div>
    );
  }
}
