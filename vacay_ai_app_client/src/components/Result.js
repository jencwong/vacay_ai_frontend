import React, { Component } from "react";
// import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Questionnaire from "./Questionnaire";
import Profile from "./Profile";
import axios from "axios";

// function Result(props) {
// const [toQuestionnaire, setQuestionnaire] = useState(false);
// if (toQuestionnaire) {
//   return <Redirect to="/questionnaire" />;
// }

class Result extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      user_id: "",
      destination_id: ""
    };
  }
  async handleAdd(event, user_id, destination_id) {
    console.log(user_id, destination_id);
    event.preventDefault();
    const matchData = {
      user_id: user_id,
      destination_id: destination_id
    };
    const newMatch = await axios.post("/matches", matchData);
    console.log(newMatch.data);
    this.props.history.push("/profile");
    return <Redirect to="/profile" />;
  }

  async componentDidMount() {
    if (this.props.matches) {
      await console.log("mounted", this.props.matches);
      await this.setState({
        matches: this.props.matches,
        user_id: this.props.user_id,
        destination_id: this.props.destination_id
      });
    }
  }

  render() {
    return (
      <CSSTransitionGroup
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div>
          {/* Your answer combination is{" "}
        <strong>
          {props.quizResult}
          <br />
        </strong> */}
          <h1 className="resultHeadline">
            <strong>Here are your matching destinations: </strong>
          </h1>
          <div className="mainDiv">
            <div className="childDiv">
              {/* {props.matches.map(destination => { */}
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
                    <div className="buttons is-centered">
                      <button
                        className="button is-success is-normal is-hovered"
                        onClick={event => {
                          const user_id = sessionStorage.getItem("user_id");

                          this.handleAdd(event, user_id, destination.id);
                        }}
                      >
                        Favorite
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

// Result.propTypes = {
//   quizResult: PropTypes.string.isRequired
// };

export default withRouter(Result);
