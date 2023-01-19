import React from "react";

export class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nisha"
    };
    this.address = React.createRef();
    this.callBackRef = null;
    this.setCallBackRef = (element) => {
      this.callBackRef = element;
    };
  }

  handleClick() {
    alert(this.address.current.value);
    this.address.current.value = "";
    this.address.current.focus();
    // this.callBackRef.focus();
  }

  componentDidMount() {
    // this.address.current.focus();
    if (this.callBackRef) {
      // this.callBackRef.focus();
    }
  }

  render() {
    return (
      <>
        <h4>Hello {this.state.name}</h4>
        <p>{this.props.greeting}</p>
        <div>
          <label>Name (state)</label>
          <input //controlled component
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label>Address (ref)</label>
          <input //Uncontrolled component
            type="text"
            ref={this.address}
          />
        </div>
        <div>
          <label>Address (callback ref)</label>
          <input //Uncontrolled component
            type="text"
            ref={this.setCallBackRef}
          />
        </div>
        <div>
          <input
            type="button"
            value="Submit"
            onClick={() => this.handleClick()}
          />
        </div>
      </>
    );
  }
}
