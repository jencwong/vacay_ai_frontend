import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
// import Login from "./Login";
// import Register from "./Register";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
    this.getMatches = this.getMatches.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  async handleDelete(destination_id) {
    console.log(destination_id);
    const deleteMatch = await axios.delete(`/matches/${destination_id}`);
    this.getMatches();
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
                    {destination.destination.name},{" "}
                    {destination.destination.state}
                  </h2>
                  <div className="picHolder">
                    <img src={destination.destination.image}></img>
                  </div>
                  <div className="attractions">
                    <p>List of Attractions:</p>
                    <li>{destination.destination.attractions}</li>
                  </div>
                  <div className="buttons is-centered">
                    <button
                      className="button is-danger is-normal is-hovered"
                      onClick={event => {
                        this.handleDelete(destination.matchid);
                      }}
                    >
                      Remove
                    </button>
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
