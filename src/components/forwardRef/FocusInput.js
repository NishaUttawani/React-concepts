import React from "react";
import FrInput from "./FrInput";
import Input from "./Input";

export default class FocusInput extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  forwardClickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {/* WAY1: create ref at both parent : componentRef and child : Native Element Ref
        and use the handlers to eventually focus the native elements*/}
        <h5>Using Parent Child communication</h5>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
        <hr />
        {/* Way2: Here only one ref is created forwarded to the child component, 
        meaning the ref is directlt attached to the child component  (native element)
        and we can focus the same from parent directly*/}
        <h5>Using Forward Ref</h5>
        <FrInput ref={this.inputRef}></FrInput>
        <button onClick={this.forwardClickHandler}>
          Focus Input (FrwdRef)
        </button>
      </div>
    );
  }
}
