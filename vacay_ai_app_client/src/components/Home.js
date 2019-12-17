import React, { Component } from "react";
import ReactPlayer from "react-player";
import Profile from "./Profile";
import Login from "./Login";
// import injectTapEventPlugin from "react-tap-event-plugin";
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }
  componentDidlMount() {
    var loginPage = [];
    loginPage.push(<Profile appContext={this} key={"login-screen"} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <div className="home">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

const style = {
  margin: 15
};

//   render() {
//     return (
//       <div className="home">
//         <Login />
//       </div>
//     );
//   }
// }

export default Home;
