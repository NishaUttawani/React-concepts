import React from "react";
import axios from "axios";
import PostUser from "./PostUser";

export default class MyHttp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({
          users: res.data
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h4>List of Users</h4>
        {users.length &&
          users.map((user) => <div key={user.id}>{user.name}</div>)}
        <PostUser />
      </div>
    );
  }
}
