import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: " ",
      age: " ",
      password: " ",
    };
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="Name ">Your Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Enter Your Name "
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Enter The Email"
            onChange={this.handleChange}
          />
          <input
            name="age"
            type="number"
            value={this.state.age}
            placeholder="Enter The Age "
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter The Password "
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default FormComponent;
