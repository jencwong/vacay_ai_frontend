import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Login from "./Login";
import Register from "./Register";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginscreen: [],
      loginmessage: "",
      buttonLabel: "Register",
      isLogin: true
    };
  }

  componentDidMount() {
    let loginscreen = [];
    loginscreen.push(
      <Login parentContext={this} appContext={this.props.parentContext} />
    );
    let loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    });
  }

  handleClick(event) {
    // console.log("event",event);
    var loginmessage;
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(<Register parentContext={this} />);
      loginmessage = "Already registered.Go to Login";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Login",
        isLogin: false
      });
    } else {
      var loginscreen = [];
      loginscreen.push(<Login parentContext={this} />);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Register",
        isLogin: true
      });
    }
  }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <h3>User's Profile</h3>
          <MuiThemeProvider>
            <div>
              <RaisedButton
                label={this.state.buttonLabel}
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15
};

// import React, { Component } from "react";
// import ReactPlayer from "react-player";
// import Profile from "./Profile";
// import Login from "./Login";
// // import injectTapEventPlugin from "react-tap-event-plugin";
// // // Needed for onTouchTap
// // // http://stackoverflow.com/a/34015469/988941
// // injectTapEventPlugin();

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loginPage: [],
//       uploadScreen: []
//     };
//   }
//   componentDidlMount() {
//     var loginPage = [];
//     loginPage.push(<Profile appContext={this} key={"login-screen"} />);
//     this.setState({
//       loginPage: loginPage
//     });
//   }
//   render() {
//     return (
//       <div className="home">
//         {this.state.loginPage}
//         {this.state.uploadScreen}
//       </div>
//     );
//   }
// }

// const style = {
//   margin: 15
// };

//   render() {
//     return (
//       <div className="home">
//         <Login />
//       </div>
//     );
//   }
// }

export default Home;
