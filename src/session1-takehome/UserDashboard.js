import React from "react";
import axios from "axios";

export default class UserDashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      avatar:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
    };
  }
  async fetchData(url) {
    try {
      const response = await axios.get(url);
      return response;
    } catch {}
  }
  async buttonHandler(id) {
    if (id > 12) {
      alert("Failed to fetch data");
      return;
    }
    const urlEndpoint = "https://reqres.in/api/users/" + id;
    const data = await this.fetchData(urlEndpoint);
    this.setState({
      email: data.data.data.email,
      name: data.data.data.first_name + " " + data.data.data.last_name,
      avatar: data.data.data.avatar
    });
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.buttonHandler("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              this.buttonHandler("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              this.buttonHandler("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              this.buttonHandler("100");
            }}
          >
            100
          </button>
        </div>
        <div>
          <h1>name:{this.state.name}</h1>
          <h1>email:{this.state.email}</h1>
          <img src={this.state.avatar} alt="" />
        </div>
      </div>
    );
  }
}
