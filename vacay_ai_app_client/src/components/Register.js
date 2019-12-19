import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";
import Login from "./Login";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }
  handleClick(event) {
    let apiBaseUrl = "http://localhost:3000/users/";
    console.log(
      "values",
      this.state.firstname,
      this.state.lastname,
      this.state.email,
      this.state.username,
      this.state.password
    );
    //To be done:check for empty values before hitting submit
    let self = this;

    if (
      this.state.firstname.length > 0 &&
      this.state.lastname.length > 0 &&
      this.state.email.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password.length > 0
    ) {
      let payload = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
        // role: role
      };
      axios
        .post(apiBaseUrl, payload)
        .then(function(response) {
          console.log(response);
          if (response.data.code === 200) {
            //  console.log("registration successfull");
            let loginscreen = [];
            loginscreen.push(
              <Login parentContext={this} appContext={self.props.appContext} />
            );
            let loginmessage = "Not Registered yet.Go to registration";
            self.props.parentContext.setState({
              loginscreen: loginscreen,
              loginmessage: loginmessage,
              buttonLabel: "Register",
              isLogin: true
            });
          } else {
            console.log("some error ocurred", response.data.code);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      alert("Input field value is missing");
    }
  }

  render() {
    // console.log("props",this.props);
    // let userhintText, userLabel;
    // if (this.props.role === "student") {
    //   userhintText = "Enter your Student Id";
    //   userLabel = "Student Id";
    // } else {
    //   userhintText = "Enter your Teacher Id";
    //   userLabel = "Teacher Id";
    // }
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar style={{ background: "#3C921D" }} title="Register" />
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) =>
                this.setState({ firstname: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) =>
                this.setState({ lastname: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              hintText="Enter your username"
              type="username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />

            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              backgroundColor="#3c921D"
              labelColor="#ffffff"
              label="Submit"
              // primary={true}
              style={style}
              onClick={event => this.handleClick(event, this.props.role)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Register;
