import React from "react";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      username: null,
      email: null,
      user: {
        name: null,
        username: null,
        email: null,
        id: null,
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postUser = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      id: 11,
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((res) => {
        console.log(res);
        alert("User Added");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { name, email, username } = this.state;
    return (
      <div>
        <h4>New User</h4>
        <form onSubmit={this.postUser}>
          <div>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div>
            UserName:{" "}
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div>
            {" "}
            Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div>
            <button type="submit">Add user</button>
          </div>
        </form>
      </div>
    );
  }
}
