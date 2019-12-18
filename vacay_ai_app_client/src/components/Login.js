import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Redirect } from "react-router-dom";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
// replace UploadPage with Profile
// import UploadPage from "./UploadPage";
import Profile from "./Profile";

let apiBaseUrl = "http://localhost:3000/users";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toQuestionnaire: false
      //   menuValue: 1,
      //   loginComponent: localloginComponent
      //   loginRole: "user"
    };

    this.handleClick = this.handleClick.bind(this);
    // let localloginComponent = [];
    // localloginComponent.push(
    //   <MuiThemeProvider key={"theme"}>
    //     <div>
    //       <TextField
    //         hintText="Enter your Username"
    //         floatingLabelText="Username"
    //         onChange={(event, newValue) =>
    //           this.setState({ username: newValue })
    //         }
    //       />
    //       <br />
    //       <TextField
    //         type="password"
    //         hintText="Enter your Password"
    //         floatingLabelText="Password"
    //         onChange={(event, newValue) =>
    //           this.setState({ password: newValue })
    //         }
    //       />
    //       <br />
    //       <RaisedButton
    //         label="Submit"
    //         primary={true}
    //         style={style}
    //         onClick={event => this.handleClick(event)}
    //       />
    //     </div>
    //   </MuiThemeProvider>
    // );

    //   componentDidMount() {
    //     console.log("didmount prop values", this.props);
    //     // if (this.props.role != undefined) {
    //     //   if (this.props.role == "user") {
    //     console.log("in student componentdidMount");
    //     let localloginComponent = [];
    //     localloginComponent.push(
    //       <MuiThemeProvider>
    //         <div>
    //           <TextField
    //             hintText="Enter your Username"
    //             floatingLabelText="Username"
    //             onChange={(event, newValue) =>
    //               this.setState({ username: newValue })
    //             }
    //           />
    //           <br />
    //           <TextField
    //             type="password"
    //             hintText="Enter your Password"
    //             floatingLabelText="Password"
    //             onChange={(event, newValue) =>
    //               this.setState({ password: newValue })
    //             }
    //           />
    //           <br />
    //           <RaisedButton
    //             label="Submit"
    //             primary={true}
    //             style={style}
    //             onClick={event => this.handleClick(event)}
    //           />
    //         </div>
    //       </MuiThemeProvider>
    //     );
    //     this.setState({
    //       menuValue: 1,
    //       loginComponent: localloginComponent,
    //       loginRole: "user"
    //     });
    //   } else if (this.props.role == "admin") {
    //     console.log("in admin componentWillMount");
    //     let localloginComponent = [];
    //     localloginComponent.push(
    //       <MuiThemeProvider>
    //         <div>
    //           <TextField
    //             hintText="Enter your College Rollno"
    //             floatingLabelText="Admin Id"
    //             onChange={(event, newValue) =>
    //               this.setState({ username: newValue })
    //             }
    //           />
    //           <br />
    //           <TextField
    //             type="password"
    //             hintText="Enter your Password"
    //             floatingLabelText="Password"
    //             onChange={(event, newValue) =>
    //               this.setState({ password: newValue })
    //             }
    //           />
    //   <br />
    //   <RaisedButton
    //     label="Submit"
    //     primary={true}
    //     style={style}
    //     onClick={event => this.handleClick(event)}
    //   />
    //     </div>
    //   </MuiThemeProvider>
    // );
    // this.setState({
    //   menuValue: 2,
    //   loginComponent: localloginComponent,
    //   loginRole: "admin"
    // });
    //   }
    // }
  }

  handleClick(event) {
    let self = this;
    let payload = {
      username: this.state.username,
      password: this.state.password
      //   role: this.state.loginRole
    };
    axios
      .post(apiBaseUrl + "/login", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code == 200) {
          console.log("Login successfull");
          self.setState({ toQuestionnaire: true });
          // let uploadScreen = [];
          // uploadScreen.push(
          //   <Profile
          //     appContext={self.props.appContext}

          //     //   role={self.state.loginRole}
          //   />
          // );
          // self.props.appContext.setState({
          //   loginPage: [],
          //   uploadScreen: uploadScreen
          // });
        } else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert(response.data.success);
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  //   handleMenuChange(value) {
  //     console.log("menuvalue", value);
  //     let loginRole;
  //     if (value == 1) {
  //       let localloginComponent = [];
  //       loginRole = "user";
  //       localloginComponent.push(
  //         <MuiThemeProvider>
  //           <div>
  //             <TextField
  //               hintText="Enter your College Rollno"
  //               floatingLabelText="User Id"
  //               onChange={(event, newValue) =>
  //                 this.setState({ username: newValue })
  //               }
  //             />
  //             <br />
  //             <TextField
  //               type="password"
  //               hintText="Enter your Password"
  //               floatingLabelText="Password"
  //               onChange={(event, newValue) =>
  //                 this.setState({ password: newValue })
  //               }
  //             />
  //             <br />
  //             <RaisedButton
  //               label="Submit"
  //               primary={true}
  //               style={style}
  //               onClick={event => this.handleClick(event)}
  //             />
  //           </div>
  //         </MuiThemeProvider>
  //       );
  //     } else if (value == 2) {
  //       let localloginComponent = [];
  //       loginRole = "admin";
  //       localloginComponent.push(
  //         <MuiThemeProvider>
  //           <div>
  //             <TextField
  //               hintText="Enter your College Rollno"
  //               floatingLabelText="Admin Id"
  //               onChange={(event, newValue) =>
  //                 this.setState({ username: newValue })
  //               }
  //             />
  //             <br />
  //             <TextField
  //               type="password"
  //               hintText="Enter your Password"
  //               floatingLabelText="Password"
  //               onChange={(event, newValue) =>
  //                 this.setState({ password: newValue })
  //               }
  //             />
  //             <br />
  //             <RaisedButton
  //               label="Submit"
  //               primary={true}
  //               style={style}
  //               onClick={event => this.handleClick(event)}
  //             />
  //           </div>
  //         </MuiThemeProvider>
  //       );
  //     }
  //     this.setState({
  //       menuValue: value,
  //       loginComponent: localloginComponent,
  //       loginRole: loginRole
  //     });
  //   }
  render() {
    const { toQuestionnaire } = this.state;
    if (toQuestionnaire) {
      return <Redirect to="/questionnaire" />;
    }
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="Login" />
          <TextField
            hintText="Enter your Username"
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
            label="Submit"
            primary={true}
            style={style}
            onClick={event => this.handleClick(event)}
          />

          {/* <MuiThemeProvider>
          <div>
            <p>Login as:</p>
            <DropDownMenu
              value={this.state.menuValue}
              onChange={(event, index, value) => this.handleMenuChange(value)}
            >
              <MenuItem value={1} primaryText="User" />
              <MenuItem value={2} primaryText="Admin" />
            </DropDownMenu>
          </div>
        </MuiThemeProvider> */}
          {/* {this.state.loginComponent} */}
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Login;
