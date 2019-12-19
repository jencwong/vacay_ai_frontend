import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
// import Login from "./Login";
// import Register from "./Register";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
    this.getMatches = this.getMatches.bind(this);
  }
  componentDidMount() {
    this.getMatches();
  }

  getMatches() {
    const user_id = sessionStorage.getItem("user_id");
    fetch(`http://localhost:3000/profile/${user_id}`)
      .then(response => response.json())
      .then(jsoneMatches => this.setState({ matches: jsoneMatches }))
      .catch(error => console.error(error));
    //   .then(daters => console.log(daters));
  }

  //   componentDidMount() {
  //     let loginscreen = [];
  //     loginscreen.push(
  //       <Login parentContext={this} appContext={this.props.parentContext} />
  //     );
  //     let loginmessage = "Not registered yet, Register Now";
  //     this.setState({
  //       loginscreen: loginscreen,
  //       loginmessage: loginmessage
  //     });
  //   }
  //   handleClick(event) {
  //     // console.log("event",event);
  //     var loginmessage;
  //     if (this.state.isLogin) {
  //       var loginscreen = [];
  //       loginscreen.push(<Register parentContext={this} />);
  //       loginmessage = "Already registered.Go to Login";
  //       this.setState({
  //         loginscreen: loginscreen,
  //         loginmessage: loginmessage,
  //         buttonLabel: "Login",
  //         isLogin: false
  //       });
  //     } else {
  //       var loginscreen = [];
  //       loginscreen.push(<Login parentContext={this} />);
  //       loginmessage = "Not Registered yet.Go to registration";
  //       this.setState({
  //         loginscreen: loginscreen,
  //         loginmessage: loginmessage,
  //         buttonLabel: "Register",
  //         isLogin: true
  //       });
  //     }
  //   }
  render() {
    return (
      <div>
        {/* <h1>User's Profile</h1> */}
        <h2 className="resultHeadline">
          <strong>Your Favorites</strong>
        </h2>
        <div className="mainDiv">
          <div className="childDiv">
            {this.state.matches.map(destination => {
              return (
                <div className="mainHolder">
                  <h2>
                    {destination.name}, {destination.state}
                  </h2>
                  <div className="picHolder">
                    <img src={destination.image}></img>
                  </div>
                  <div className="attractions">
                    <p>List of Attractions:</p>
                    <li>{destination.attractions}</li>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15
};

export default Profile;
